import Layout from "@/components/Layout";
import AsideLayout from "@/components/AsideLayout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "@/components/AuthRoute";

const Home = lazy(() => import("@/pages/Home"));
const Jobs = lazy(() => import("@/pages/Jobs"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/jobs",
    element: <AsideLayout />,
    children: [
      {
        index: true,
        element: (
          <AuthRoute>
            <Jobs />
          </AuthRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
