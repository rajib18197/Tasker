import { useEffect, useState } from "react";

export function usePosts({ isTrending = false } = {}) {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});

  useEffect(
    function () {
      async function loadProducts() {
        try {
          setIsLoading(true);
          setIsError(false);
          setError({});

          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );

          console.log(response);
          if (!response.ok) {
            const error = new Error("Could Not load the Products Data!");
            error.code = response.status;
            error.info = await response.json();
            throw error;
          }
          const data = await response.json();
          console.log(data);
          setTrendingProducts(isTrending ? data.slice(0, 6) : data);
        } catch (err) {
          setIsError(true);
          setError({ code: err.code, message: err.message });
        } finally {
          setIsLoading(false);
        }
      }

      loadProducts();
    },
    [isTrending]
  );

  return { trendingProducts, isLoading, isError, error };
}

export function usePostDetails(id) {
  const [postDetails, setPostDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});

  useEffect(function () {
    async function loadProducts() {
      try {
        setIsLoading(true);
        setIsError(false);
        setError({});

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        console.log(response);
        if (!response.ok) {
          const error = new Error("Could Not load the Post details Data!");
          error.code = response.status;
          error.info = await response.json();
          throw error;
        }
        const data = await response.json();
        console.log(data);
        setPostDetails(data);
      } catch (err) {
        setIsError(true);
        setError({ code: err.code, message: err.message });
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  return { postDetails, isLoading, isError, error };
}
