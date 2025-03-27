import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, SetError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error("Somethin error");
        }
        const data = await req.json();
        setData(data);
      } catch {
        console.log(error.message);
        SetError(error.message);
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, isPending };
};
