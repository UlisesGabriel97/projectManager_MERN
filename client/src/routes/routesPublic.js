import { Login } from "../pages/Login";


export const routesPublic =  [
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Recover />,
    },
  ]