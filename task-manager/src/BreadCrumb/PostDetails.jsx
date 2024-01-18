import { useParams } from "react-router-dom";
import { usePostDetails } from "./usePosts";

export default function PostDetails() {
  const { id } = useParams();
  const { postDetails, isLoading, isError, error } = usePostDetails(id);

  if (isLoading && !isError) return <h2>Loading</h2>;

  if (!isLoading && isError)
    return (
      <h2>
        {error.code} || {error.message}
      </h2>
    );

  return (
    <div className="mt-10">
      <h2>Product Details Page {postDetails.id}</h2>
      <h2>{postDetails.title}</h2>
      <h2>{postDetails.body}</h2>
    </div>
  );
}
