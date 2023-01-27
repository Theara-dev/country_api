import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

import "./popup.css";

const Index = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.countries.countries.name.official}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="country__details">
        <div>
          <img
            src={props.countries.countries.flags.png}
            alt={"flag"}
            width={200}
          />
          <h4>{props.countries.countries.name.common}</h4>
        </div>
        <ListGroup>
          <h5>Name</h5>
          <ListGroup.Item>
            <strong>Common: </strong>
            {props.countries.countries.name.common}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Official: </strong>
            {props.countries.countries.name.official}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Common (Native): </strong>
            {props.countries.countries.name.common}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Official (Native): </strong>
            {props.countries.countries.name.official}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Alternative spellings: </strong>
            {props.countries.countries.altSpellings[0]
              ? ""
              : props.countries.countries.altSpellings[0]}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup>
          <h5>Code</h5>
          <ListGroup.Item>
            <strong>ISO 3166-1 alpha-2: </strong>
            {props.countries.countries.cca2}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>ISO 3166-1 alpha-3: </strong>
            {props.countries.countries.cca3}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>ISO 3166-1 numeric: </strong>
            {props.countries.countries.ccn3}
          </ListGroup.Item>
        </ListGroup>
        <ListGroup>
          <h5>Geography</h5>
          <ListGroup.Item>
            <strong>Region: </strong>
            {props.countries.countries.region}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Subregion: </strong>
            {props.countries.countries.subregion}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Capital: </strong>
            {props.countries.countries.capital}
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
    </Modal>
  );
};

export default Index;
