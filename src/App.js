import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fuse from "fuse.js";

import CardDesign from "./components/CardDesign";
import Pagination from "./components/Pagination";
import Form from "react-bootstrap/Form";

function App() {
  let [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(25);
  const [search, setSearch] = useState("");

  async function fetchData() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const json = response.data;
      setCountries(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = countries.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function handleInput(e) {
    const val = e.target.value;
    setSearch(val);
  }

  const fuse = new Fuse(countries, {
    keys: ["name.official", "name.common", "cca2", "cca3"],
  });
  const result = fuse.search(search);

  return (
    <Container className="mt-5">
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Search Country</Form.Label>
          <Form.Control
            onChange={(e) => handleInput(e)}
            type="text"
            placeholder="Search country..."
          />
        </Form.Group>
      </Form>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={countries.length}
            paginate={paginate}
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        {search
          ? result.map((country) => (
              <Col md={4} key={country.item.cca2} className="mb-5">
                <CardDesign countries={country.item} />
              </Col>
            ))
          : currentPosts.map((country) => (
              <Col md={4} key={country.cca2} className="mb-5">
                <CardDesign countries={country} />
              </Col>
            ))}
      </Row>
    </Container>
  );
}

export default App;
