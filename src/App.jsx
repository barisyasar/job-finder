import { Suspense } from "react";
import router from "./config/routes";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
