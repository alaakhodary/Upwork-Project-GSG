import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setErorr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (e) {
        setErorr(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;
