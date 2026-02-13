import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPostById } from "../services/api";

const PostDetails = () => {
    const { postId } = useParams();

    const { data, isLoading } = useQuery({
        queryKey: ["post", postId],
        queryFn: () => fetchPostById(postId)
    });

    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>Post not found</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold">{data.title}</h1>
            <p className="text-gray-500">{data.author}</p>
            <p className="mt-4">{data.content}</p>

            <Link to="/posts" className="text-blue-600 mt-4 inline-block">
                Back to Posts
            </Link>
        </div>
    );
};

export default PostDetails;

