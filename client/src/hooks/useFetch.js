import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import apis from "../api/api";

function useFetch(query, page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const sendQuery = useCallback(
    async (query, page) => {
      try {
        setLoading(true);
        //   await setError(false);

        const { data } = await apis.getBooks(query || "", page || 1);

        console.log(data.book);
        if (data.count <= page * 10) {
          // 4 10
          setHasMore(false);
          setLoading(false);
          // return;
        } else {
          setHasMore(true);
          setList([]);
        }
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
          // return [...new Set([...prev, ...data.book])];
        });
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    },
    [query, page]
  );

  useEffect(() => {
    sendQuery(query, page);
  }, [query, sendQuery, page]);

  return { loading, error, list, hasMore };
}

export default useFetch;
