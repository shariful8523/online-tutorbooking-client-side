import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        }
    ]
    },
  ]);

export default router;