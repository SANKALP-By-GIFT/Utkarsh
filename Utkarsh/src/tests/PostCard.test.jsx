import { render } from "@testing-library/react";
import PostCard from "../components/PostCard";
import { BrowserRouter } from "react-router-dom";

test("PostCard snapshot", () => {
    const post = {
        id: 1,
        title: "Test Post",
        author: "Admin",
        content: "Test content"
    };

    const { asFragment } = render(
        <BrowserRouter>
            <PostCard post={post} />
        </BrowserRouter>
    );

    expect(asFragment()).toMatchSnapshot();
});