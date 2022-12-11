import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import apis from "../api/api";
import NotificationToast from "./NotificationToast";
import SpinLoader from "./SpinLoader";

export default function AddBooks() {
  const [data, setData] = useState({
    title: "",
    author: "",
    subject: "",
    publishedDate: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // const [image, setImage] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const callToast = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const handleSubmit = async () => {
    console.log(data);
    if (!data.title || !data.author || !data.subject) {
      callToast("Please fill all the fields");
      return;
    }
    try {
      setLoading(true);
      // let imageRes = "";
      // if (image) {
      //   const formData = new FormData();
      //   formData.append("file", image);
      //   formData.append("upload_preset", "presetName");

      //   imageRes = await apis.addImage(formData);
      //   console.log("imageRes", imageRes?.data?._id);
      // }

      const res = await apis.postBook({
        ...data,
        //  image: imageRes?.data?._id
      });
      setData({
        title: "",
        author: "",
        subject: "",
        publishedDate: "",
      });
      callToast("Book Added Successfully");
      setLoading(false);
    } catch (err) {
      callToast("Something went wrong");
      setLoading(false);
    }
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
        {/* <Col md={12} className=" d-flex justify-content-center">
          <div className="inputgroup">
            <span>Image</span>
            <br />
            <input
              type="file"
              accept="image/*"
              name="subject"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>{" "}
        </Col> */}
      </Row>

      <Row className="m-5">
        <Col md={12} className=" d-flex justify-content-center">
          <Button
            variant="primary"
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? <SpinLoader /> : " Add Book"}
          </Button>
        </Col>
      </Row>
      {message != "" && <NotificationToast message={message} />}
    </div>
  );
}
