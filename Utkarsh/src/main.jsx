import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css"
import App from "./App";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Posts from "./pages/Posts";
const PostDetails = React.lazy(() => import("./pages/PostDetails"));
const AddPost = React.lazy(() => import("./pages/AddPost"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Posts /> },
      { path: "posts", element: <Posts /> },
      { path: "posts/:postId", element: <PostDetails /> },
      { path: "add", element: <AddPost /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </App>
  </React.StrictMode>
);
