import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.tsx";
import NotFound, { RouteError } from "../pages/NotFound.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <RouteError />,
  },
  { path: "*", element: <NotFound />, errorElement: <RouteError /> },
]);