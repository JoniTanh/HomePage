import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Layout from "../utils/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        index: true,
      },
      {
        path: "/portfolio",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default router;
