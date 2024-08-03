import { Suspense } from "react";
import router from "./config/routes";
import { RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </Suspense>
  );
}
