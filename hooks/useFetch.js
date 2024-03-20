import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (apiUrl) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const res = await axios.get(apiUrl);
        if (mounted) {
          setData(res.data);
        }
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();

    return () => {};
  }, [apiUrl]);

  return { data, isLoading, isError };
};

export default useFetch;
