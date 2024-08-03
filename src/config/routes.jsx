import Layout from "@/components/Layout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const Jobs = lazy(() => import("@/pages/Jobs"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
    errorElement: <NotFound />,
  },
]);
export default router;
