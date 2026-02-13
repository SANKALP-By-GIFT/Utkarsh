import PostCard from "../components/PostCard";
import { usePosts } from "../hooks/usePosts";

const Posts = () => {
    const { data, isLoading, isError } = usePosts();

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching posts</p>;
    if (!data.length) return <p>No posts available</p>;

    return (
        <div className="grid gap-6">
            {data.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Posts;