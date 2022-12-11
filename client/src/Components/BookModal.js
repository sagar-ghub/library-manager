import React from "react";
import { Modal, Button, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookAtlas,
  faBookOpen,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

export default function BookModal(props) {
  // let image = props?.data?.image?.image;
  // var arr = new Uint8Array(image);
  // var str = String.fromCharCode.apply(String, arr);
  // console.log("image", str);
  const firstCaps = (string) => {
    return string?.charAt(0).toUpperCase() + string?.slice(1);
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <FontAwesomeIcon icon={faBookOpen} />
          {"  "}
          {firstCaps(props?.data?.title)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Col md={9}>
          <h4>
            <FontAwesomeIcon icon={faUserTie} />
            {"  "}
            Author: {firstCaps(props?.data?.author)}
          </h4>
          <p> {props?.data?.subject}</p>
        </Col>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
