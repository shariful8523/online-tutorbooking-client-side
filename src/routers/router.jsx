import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddTutorials from "../pages/AddTutorials";
import ViewCategory from "../pages/ViewCategory";


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
           path: "/addTutorials",
           element: <AddTutorials></AddTutorials> ,
        },
        {
          path: "/findTutors/:language",
          element: <ViewCategory></ViewCategory> ,
        },
        
        {
           path: " ",
           element: <h1></h1> ,
        },
        {
           path: " ",
           element: <h1></h1> ,
        },
        {
           path: " ",
           element: <h1></h1> ,
        },
        
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/register",
            element: <Register></Register>,
        },
    ]
    },
  ]);

export default router;