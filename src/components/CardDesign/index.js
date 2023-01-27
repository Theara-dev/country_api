import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import PopupModal from "../../components/PopupModal";

const Index = (countries) => {
  const [modalShow, setModalShow] = useState(false);

  function handleClick(e, name) {
    setModalShow(true);
  }

  return (
    <>
      <PopupModal
        onClick={() => setModalShow(false)}
        show={modalShow}
        onHide={() => setModalShow(false)}
        countries={countries}
      />
      <Card
        onClick={(e) => handleClick(e, countries.countries.name.official)}
        style={{ width: "18rem" }}
      >
        <Card.Img
          variant="top"
          src={countries.countries.flags.png}
          height={200}
        />
        <Card.Body>
          <Card.Title>{countries.countries.name.official}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>
            <strong>CCA2: </strong>
            {countries.countries.cca2}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>CCA3: </strong>
            {countries.countries.cca3}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Native Name: </strong>
            {countries.countries.name.common}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Alternative Name: </strong>
            {countries.countries.altSpellings[1]}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Calling Code: </strong>
            {countries.countries.idd.root}
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
};

export default Index;
