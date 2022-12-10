import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import apis from "../api/api";

export default function AddBooks() {
  const [data, setData] = useState({
    title: "",
    author: "",
    subject: "",
    publishedDate: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log(data);
    const res = await apis.postBook(data);
    setData({
      title: "",
      author: "",
      subject: "",
      publishedDate: "",
    });
  };

  return (
    <div className="text-center addBooks">
      <Row>
        <h1>Add Books</h1>
        <Col md={12} className=" d-flex justify-content-center">
          <div className="inputgroup">
            <span>Book Title</span>
            <br />
            <input
              type="text"
              value={data.title}
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="inputgroup">
            <span>Book Author</span>
            <br />
            <input
              type="text"
              value={data.author}
              name="author"
              onChange={handleChange}
            />
          </div>
        </Col>
        <Col md={12} className=" d-flex justify-content-center">
          <div className="inputgroup">
            <span>Book Subject</span>
            <br />
            <input
              type="text"
              value={data.subject}
              name="subject"
              onChange={handleChange}
            />
          </div>{" "}
          <div className="inputgroup">
            <span>Published Date (YYYY-MM-DD)</span>
            <br />
            <input
              type="date"
              style={{ width: "85%" }}
              value={data.publishedDate}
              name="publishedDate"
              onChange={handleChange}
            />
          </div>
        </Col>
      </Row>
      <Row className="m-5">
        <Col md={12} className=" d-flex justify-content-center">
          <Button variant="primary" type="submit" onClick={handleSubmit}>
            Add Book
          </Button>
        </Col>
      </Row>
    </div>
  );
}
