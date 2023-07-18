import { useEffect, useState } from "react";

import { IParametersValues } from "@/store/useDataStore";

export const useFetch = (url: string, onCompleted: (data: IParametersValues) => void) => {
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    fetch(url, { signal })
      .then((res) => res.json())
      .then((data) => {
        const parameters = data[0];

        setFetchData(parameters);
        onCompleted(parameters);
      })
      .catch((err) => {
        if (err.name === "AbortName") {
          throw new Error("Fetch Cancelled");
        }
      });

    return () => {
      controller.abort();
    };
  }, [url, onCompleted]);

  return fetchData;
};
