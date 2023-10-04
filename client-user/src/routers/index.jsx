import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../components/BaseLayout"
import Home from "../pages/Home"
import DetailsMovie from "../pages/DetailsMovie"
import UnderConstruction from "../pages/UnderConstruction";

const router = createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "movies/:slug",
          element: <DetailsMovie />,
        },
        {
          path: "under-construction",
          element: <UnderConstruction />,
        },
      ],
    },
  ]);

export default router;
