import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Mobiles from "../pages/Mobiles/Mobiles";
import Details from "../pages/Details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path:"/",
            element: <Home />
        },
        {
          path:"/mobiles",
          element: <Mobiles />
        },
        {
          path:"/details/:id",
          element: <Details />
        }
      ]
    },
  ]);

  export default router