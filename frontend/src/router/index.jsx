import { createBrowserRouter, Navigate } from "react-router-dom";
import Home, { loader as logosLoader } from "../components/Home";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Layout from "../utils/Layout";
import ProjectDetails from "../components/UI/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        index: true,
        loader: logosLoader,
      },
      {
        path: "/portfolio",
        element: <Projects />,
      },
      {
        path: "/portfolio/:projectId",
        element: <ProjectDetails />,
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
