import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";

import App from "./App";
import Layout from "./components/Layout";
import Posts from "./pages/Posts";
import Loader from "./components/Loader";
import './index.css'

const PostDetails = React.lazy(() => import("./pages/PostDetails"));
const AddPost = React.lazy(() => import("./pages/AddPost"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "posts", element: <Posts /> },
      {
        path: "posts/:postId",
        element: (
          <Suspense fallback={<Loader />}>
            <PostDetails />
          </Suspense>
        )
      },
      {
        path: "add",
        element: (
          <Suspense fallback={<Loader />}>
            <AddPost />
          </Suspense>
        )
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <App>
    <RouterProvider router={router} />
  </App>
);