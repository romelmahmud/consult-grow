import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import {
  Blog,
  Error,
  Home,
  Login,
  Register,
  Service,
  Services,
  User,
} from "../../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <Service />,
      },

      {
        path: "/user",
        element: <User />,
      },
    ],
  },
]);
