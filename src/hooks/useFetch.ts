import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(url, { signal })
      .then((res) => res.json())
      .then((data) => setFetchData(data))
      .catch((err) => {
        if (err.name === "AbortName") {
          throw new Error("Fetch Cancelled");
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  return fetchData;
};
