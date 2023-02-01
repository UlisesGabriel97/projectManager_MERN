import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { routesPrivate } from "./routesPrivate";
import { routesPublic } from "./routesPublic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...routesPublic, ...routesPrivate]
  }
]);

export const ProviderRouter = () => <RouterProvider router={router} />