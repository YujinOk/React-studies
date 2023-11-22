import { useEffect, useState } from "react";

export const useFetch = (url, options = {}) => {
  //   console.log(options);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      //   const signal = controller.signal;
      setIsLoading(true);
      setIsError(false);
      setData(undefined);
      try {
        const response = await fetch(url).then((res) => res.json(), {
          signal: controller.signal,
          ...options,
        });

        setData(response);
        setIsLoading(false);
      } catch (error) {
        if (error.name === "AbortError") return;
        if (controller.signal.aborted) return;
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [url]);
  //   console.log({ data, isLoading, isError });
  return { data, isLoading, isError };
};
