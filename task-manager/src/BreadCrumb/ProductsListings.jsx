import { Link } from "react-router-dom";
import { usePosts } from "./usePosts";

export default function ProductsListings() {
  const { trendingProducts: posts, isLoading, isError, error } = usePosts();

  if (isLoading && !isError) return <h2>Loading</h2>;

  if (!isLoading && isError)
    return (
      <h2>
        {error.code} || {error.message}
      </h2>
    );

  return (
    <div className="mt-10">
      <h1>Products Listing Page</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
