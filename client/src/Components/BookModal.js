import React from "react";
import { Modal, Button, Col } from "react-bootstrap";

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
          {firstCaps(props?.data?.title)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Col md={9}>
          <h4>Author: {firstCaps(props?.data?.author)}</h4>
          <p> {props?.data?.subject}</p>
        </Col>
        {/* <Col md={3}>
          <img
            src={
              `data:${props?.data?.image?.contentType}base64,` +
              image?.toString("base64")
            }
            alt="book"
          />
        </Col> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
