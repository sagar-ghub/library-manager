import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import apis from "../api/api";

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(false);

  const sendQuery = useCallback(
    async (query, page) => {
      try {
        setLoading(true);
        //   await setError(false);

        const { data } = await apis.getBooks(query || "", page || 1);

        // console.log(data.book);
        if (data.book.length === 0) {
          setHasMore(false);
          setLoading(false);
          setList([]);
          return;
        }
        if (data.count <= page * 10) {
          // 4 10
          setHasMore(false);
          setLoading(false);
          // return;
        } else {
          setHasMore(true);
          setList([]);
        }

        // console.log(page, query);

        if (query != "") {
          setList((prev) => {
            let obj = { arr: [...prev, ...data.book] };
            obj.arr = obj.arr.filter(
              (value, index, self) =>
                index ===
                self.findIndex(
                  (t) => t.title === value.title && t.author === value.author
                )
            );
            return obj.arr;
          });
        }
        // return [...prev, ...data.book];
        // return [...new Set([...prev, ...data.book])];
        // });
        else if (query == "" && page === 0)
          setList([...new Set([...data.book])]);
        else setList([...new Set([...list, ...data.book])]);
        setCount(data.count);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err);
      }
    },
    [query, page]
  );

  useEffect(() => {
    sendQuery(query, page);
  }, [query, sendQuery, page]);

  return { loading, error, list, hasMore, count };
}

export default useFetch;
