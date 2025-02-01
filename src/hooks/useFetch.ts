import { useState, useEffect, useCallback } from "react";
import axios, { AxiosResponse, AxiosError } from "axios";

interface ApiResponse<T> {
  code: number;
  message: string;
  data: T[];
}

interface UseFetchResult<T> {
  data: T[];
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(
  url: string,
  initialData: T[] = []
): UseFetchResult<T> {
  const [data, setData] = useState<T[]>(initialData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response: AxiosResponse<ApiResponse<T>> = await axios.get(url);

      if (response.data.code === 200) {
        setData(response.data.data);
      } else {
        throw new Error(response.data.message || "Unknown error occurred");
      }
    } catch (err) {
      const axiosError = err as AxiosError;
      setError(
        axiosError.response?.data
          ? (axiosError.response.data as ApiResponse<T>).message
          : axiosError.message
      );
      setData([]);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    loading,
    error,
  };
}
