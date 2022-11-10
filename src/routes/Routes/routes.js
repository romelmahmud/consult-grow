import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import {
  AddService,
  Blog,
  Error,
  Home,
  Login,
  Register,
  Service,
  Services,
  UserReviews,
} from "../../pages";
import UpdateReview from "../../pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";

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
        path: "/updatereview/:id",
        element: <UpdateReview />,
      },

      {
        path: "/userreviews",
        element: (
          <PrivateRoute>
            <UserReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
