import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  const excerpt =
    post.content.length > 100
      ? post.content.slice(0, 100) + "..."
      : post.content;

  return (
    <article
      className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
      aria-labelledby={`post-title-${post.id}`}
    >
      <h2
        id={`post-title-${post.id}`}
        className="text-xl font-semibold text-gray-800"
      >
        {post.title}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        By {post.author} • {post.date}
      </p>

      <p className="mt-3 text-gray-700">{excerpt}</p>

      <Link
        to={`/posts/${post.id}`}
        className="inline-block mt-4 text-blue-600 font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
        aria-label={`Read full post about ${post.title}`}
      >
        Read More →
      </Link>
    </article>
  );
};

export default PostCard;
