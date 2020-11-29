import { useState, useEffect } from 'react';

export const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrl = async () => {
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
      setLoading(false);
    };

    fetchUrl();
  }, [url]);

  return [data, loading];
};
