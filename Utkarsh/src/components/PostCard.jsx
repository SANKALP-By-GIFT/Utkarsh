import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow p-5 rounded-lg">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-sm text-gray-500">By {post.author}</p>
      <p className="mt-2">
        {post.content.slice(0, 100)}...
      </p>

      <Link
        to={`/posts/${post.id}`}
        className="text-blue-600 mt-3 inline-block"
      >
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
