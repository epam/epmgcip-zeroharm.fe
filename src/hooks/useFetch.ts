import { useState, useEffect } from "react";
import { mapParameterData } from "@Helpers";

export const useFetch = (path: string, onComplete: (data: any) => void) => {
  const [fetchedData, setFetchedData] = useState<any>();

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(`${process.env.REACT_APP_ZERO_HARM_URL}${path}`, { signal })
      .then((res) => res.json())
      .then((data) => {
        const fetched = data[0];
        const mappedData = mapParameterData(fetched);

        setFetchedData(mappedData);
        onComplete(mappedData);
      })
      .catch((err) => {
        if (err.name === "AbortName") {
          throw new Error("Fetch Cancelled");
        }
      });

    return () => {
      controller.abort();
    };
  }, [path]);

  return fetchedData;
};
