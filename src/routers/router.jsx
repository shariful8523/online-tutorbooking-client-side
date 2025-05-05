import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        }
    ]
    },
  ]);

export default router;