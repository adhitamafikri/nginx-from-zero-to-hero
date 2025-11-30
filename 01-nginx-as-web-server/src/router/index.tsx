import { createBrowserRouter } from "react-router";
import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Posts } from "../pages/Posts";
// import { Loader } from "../components/loader";
import { Error } from "../components/error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    errorElement: <Error />,
  },
  {
    path: "/about",
    Component: About,
    errorElement: <Error />,
  },
  {
    path: "/posts",
    Component: Posts,
    loader: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        return {
          message: "Failed to fetch Posts",
          status: response.status,
          statusText: response.statusText,
        };
      }

      const data = await response.json();
      return { posts: data };
    },
    errorElement: <Error />,
  },
]);
