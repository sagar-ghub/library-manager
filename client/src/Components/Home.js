import React from "react";
import { Col, Row } from "react-bootstrap";
import womenReading from "../assets/women_reading.png";
export default function Home() {
  return (
    <div className="text-center">
      <Row>
        <Col md={12}>
          <div>
            <img src={womenReading} height={"500px"} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={10} className="d-flex justify-content-end ">
          <blockquote>
            {/* <p>
              <strong>If this is coffee,</strong> please bring me some tea;{" "}
              <strong>but if this is tea,</strong> please bring me some coffee.
            </p>
            <p className="text-end">
              <cite className="text-end">Abraham Lincoln</cite>
            </p> */}
            <p>
              <strong>The only thing </strong>that you absolutely have to know,
              is the <strong> location of the library.</strong>
            </p>
            <p className="text-end">
              <cite className="text-end">Albert Einstein</cite>
            </p>
          </blockquote>
        </Col>
      </Row>
    </div>
  );
}
