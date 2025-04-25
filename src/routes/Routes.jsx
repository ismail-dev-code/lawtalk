import { createBrowserRouter } from "react-router";
import MainLayout from "../components/mainlayout/MainLayout";
import Booking from "../pages/Booking";
import Blog from "../pages/Blog";
import LayerDetails from "../pages/LayerDetails";
import ErrorPage from "../pages/ErrorPage";
import Loader from "../components/loading/Loader";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    HydrateFallback: <Loader />,
    Component: MainLayout,
    children: [
      {
        path: "/",
        index: true,
        Component: Home,
      },
      {
        path: "/booking",
        Component: Booking,
      },
      {
        path: "/blogs",
        Component: Blog,
      },
      {
        path: "/lawyer-details/:name",
        Component: LayerDetails,
      },
    ],
  },
]);
