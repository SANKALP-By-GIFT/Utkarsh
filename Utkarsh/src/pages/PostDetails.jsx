import { useParams, Link } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

const PostDetails = () => {
  const { postId } = useParams();
  const queryClient = useQueryClient();

  // Get all posts from cache
  const posts = queryClient.getQueryData(["posts"]);

  // Find the selected post
  const post = posts?.find(
    (p) => p.id.toString() === postId
  );

  if (!post)
    return <p className="text-red-500">Post not found.</p>;

  return (
    <article className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900">
        {post.title}
      </h1>

      <p className="text-gray-500 mt-2">
        By {post.author} • {post.date}
      </p>

      <div className="mt-6 text-gray-800 leading-relaxed">
        {post.content}
      </div>

      <Link
        to="/posts"
        className="inline-block mt-8 text-blue-600 hover:underline"
      >
        ← Back to Posts
      </Link>
    </article>
  );
};

export default PostDetails;
