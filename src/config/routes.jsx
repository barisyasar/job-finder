import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home"));
const Jobs = lazy(() => import("@/pages/Jobs"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const ROUTES = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(ROUTES);
export default router;
