import React, { useCallback, useRef, useState } from "react";
import { Button, Col, PageItem, Row } from "react-bootstrap";
import useFetch from "../hooks/useFetch";
const moment = require("moment");
export default function SearchBooks() {
  const [query, setQuery] = useState("");
  const [queryInput, setQueryInput] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [search, setSearch] = useState(false);
  const { loading, error, list, hasMore } = useFetch(query, pageNum, search);

  const observer = useRef(); // (*)
  const lastBookElementRef = useCallback(
    // (*)
    (node) => {
      console.log("Sa, node: ", node);
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          console.log("Sa, visible");
          setPageNum((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const handleChange = (e) => {
    // setQuery(e.target.value);
    // setPageNum(0);
    // setSearch(true);
    setQueryInput(e.target.value);
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
            {list.map((item, i) => {
              const isLastElement = list.length === i + 1;
              const date = moment(item.publishedDate).format("DD-MM-YYYY");
              return isLastElement ? (
                <Row key={i} ref={lastBookElementRef}>
                  <Col md={3}>{item.title} </Col>
                  <Col md={3}>{item.author}</Col>
                  <Col md={4} className="text-truncate">
                    {item.subject}
                  </Col>

                  <Col md={2}>{date}</Col>
                </Row>
              ) : (
                <Row key={i}>
                  <Col md={3}>{item.title}</Col>
                  <Col md={3}>{item.author}</Col>
                  <Col md={4} className="text-truncate">
                    {item.subject}
                  </Col>
                  <Col md={2}>{date}</Col>
                </Row>
              );
            })}
          </div>
        </Col>
      </Row>
    </div>
  );
}
