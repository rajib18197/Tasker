import { useEffect, useState } from "react";
import { usePosts } from "./usePosts";

export default function Home() {
  const { trendingProducts, isLoading, isError, error } = usePosts({
    isTrending: true,
  });

  if (isLoading && !isError) return <h2>Loading</h2>;

  if (!isLoading && isError)
    return (
      <h2>
        {error.code} || {error.message}
      </h2>
    );

  return (
    <div className="mt-10">
      <h1>Products Home Page</h1>
      <div>
        {trendingProducts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
