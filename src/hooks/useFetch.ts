import { useState, useEffect } from "react";

import { mapParameterData } from "@/helpers";

export const useFetch = (url: string) => {
  const [fetchedData, setFetchedData] = useState<any>();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(url, { signal })
      .then((res) => res.json())
      .then((data) => {
        const fetched = data[0];
        const mappedData = mapParameterData(fetched);

        setFetchedData(mappedData);
      })
      .catch((err) => {
        if (err.name === "AbortName") {
          throw new Error("Fetch Cancelled");
        }
      });

    return () => {
      controller.abort();
    };
  }, [url]);

  return fetchedData;
};
