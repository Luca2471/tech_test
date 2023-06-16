import { useEffect, useState } from 'react';

export const useVulnerabilities = (configObj: any) => {
  const {
    axiosInstance,
    method,
    url,
    requestConfig = {}
  } = configObj;

  const [response, setResponse] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await axiosInstance[method](url, {
          ...requestConfig,
          signal: controller.signal,
        });
        setResponse(res.data.data);
      } catch (error: any) {
        error.message !== 'canceled' && setError(error.message) && console.error('something bad', error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();

    return () => controller.abort();
  }, []);

  return [response, error, loading];
};
