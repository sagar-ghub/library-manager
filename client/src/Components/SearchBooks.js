import React, { useCallback, useRef, useState } from "react";
import { Button, Col, PageItem, Row } from "react-bootstrap";
import apis from "../api/api";
import useFetch from "../hooks/useFetch";
import BookModal from "./BookModal";
import SpinLoader from "./SpinLoader";
const moment = require("moment");
export default function SearchBooks() {
  const [query, setQuery] = useState("");
  const [queryInput, setQueryInput] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [search, setSearch] = useState(false);
  const { loading, count, list, hasMore } = useFetch(query, pageNum, search);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState();

  const observer = useRef(); // (*)
  const lastBookElementRef = useCallback(
    // (*)
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          // console.log("Sa, visible");
          setPageNum((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleChange = (e) => {
    setQueryInput(e.target.value);
  };

  const handleClick = async (id) => {
    // const res = await apis.getBookById(id);
    // setModalData(res.data);
    // console.log("res", res.data[0]);
  };
  const firstCaps = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div className="searchBooks">
      <Row>
        <h1>Search Books</h1>
        <Col md={8} className="d-flex justify-content-end">
          <input
            type="text"
            placeholder="Books,title,author,subject"
            value={queryInput}
            onChange={handleChange}
          />
        </Col>
        <Col md={2}>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              setPageNum(0);
              setQuery(queryInput);
            }}
          >
            Search
          </Button>
        </Col>
      </Row>
      <Row>
        <Col
          md={8}
          className="d-flex justify-content-end"
          style={{ margin: "-25px 0px 15px -15px" }}
        >
          <small>For date use YYYY-MM-DD </small>
        </Col>
      </Row>
      <Row>
        <Col md={11} className="">
          <Row className="list_heading fs-5 fw-bold">
            <Col md={3}>
              <p>Title</p>{" "}
            </Col>
            <Col md={3}>
              <p>Author</p>
            </Col>
            <Col md={4} className="text-truncate">
              <p>Subject</p>
            </Col>

            <Col md={2}>
              <p>Date</p>
            </Col>
          </Row>

          <div className="list fs-5 ">
            {list.length === 0 && !loading && <p>No Records found</p>}
            {list.map((item, i) => {
              const isLastElement = list.length === i + 1;
              const date = moment(item.publishedDate).format("DD-MM-YYYY");
              return isLastElement ? (
                <Row
                  key={i}
                  ref={lastBookElementRef}
                  onClick={() => {
                    setModalShow(true);
                    setModalData(item);
                    // handleClick(item._id);
                  }}
                >
                  <Col md={3} className="text-truncate">
                    {firstCaps(item.title)}{" "}
                  </Col>
                  <Col md={3} className="text-truncate">
                    {firstCaps(item.author)}
                  </Col>
                  <Col md={4} className="text-truncate">
                    {item.subject}
                  </Col>

                  <Col md={2}>{date}</Col>
                </Row>
              ) : (
                <Row
                  key={i}
                  onClick={() => {
                    setModalShow(true);
                    setModalData(item);
                    // handleClick(item._id);
                  }}
                >
                  <Col md={3}>{firstCaps(item.title)} </Col>
                  <Col md={3}>{firstCaps(item.author)}</Col>
                  <Col md={4} className="text-truncate">
                    {item.subject}
                  </Col>
                  <Col md={2}>{date}</Col>
                </Row>
              );
            })}
            <div className="d-flex justify-content-center mt-3">
              {loading && <SpinLoader />}
            </div>
          </div>
        </Col>

        <BookModal
          show={modalShow}
          data={modalData}
          onHide={() => setModalShow(false)}
        />
      </Row>
      <Row>
        <Col md={11} className="d-flex justify-content-end fs-6 mt-3 fw-bold">
          <p>Count: {count}</p>
        </Col>
      </Row>
    </div>
  );
}
