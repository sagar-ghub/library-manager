import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

export default function NotificationToast({ message }) {
  return (
    <ToastContainer position={"bottom-end"}>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">Message</strong>
          {/* <small>11 mins ago</small> */}
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}
