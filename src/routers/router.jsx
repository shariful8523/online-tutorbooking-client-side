import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayOut from "../LayOuts/MainLayOut";
import Home from "../pages/Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AddTutorials from "../pages/AddTutorials";
import ViewCategory from "../pages/ViewCategory";
import ViewDetails from "../pages/ViewDetails";
import FindTutors from "../pages/FindTutors";
import MyTutorials from "../pages/MyTutorials";
import MyBookedTutorial from "../pages/MyBookedTutorial";
import UpdateTutorials from "../pages/UpdateTutorials";
import PrivateRouter from "../LayOuts/PrivateRouter";
import Error from "../pages/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/addTutorials",
        element: <PrivateRouter>
          <AddTutorials></AddTutorials>
        </PrivateRouter>,
      },
      {
        path: "/Tutors/:language",
        element: <PrivateRouter> <ViewCategory></ViewCategory> </PrivateRouter>,
      },

      {
        path: "/viewDetails/:id",
        element: <PrivateRouter><ViewDetails></ViewDetails></PrivateRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/tutor/${params.id}`)
      },

      {
        path: "/findTutors",
        element: <PrivateRouter><FindTutors></FindTutors></PrivateRouter>,
      },
      {
        path: "/myTutorials",
        element: <PrivateRouter> <MyTutorials></MyTutorials> </PrivateRouter>,
      },
      {
        path: "/bookedTutors",
        element: <PrivateRouter><MyBookedTutorial></MyBookedTutorial></PrivateRouter>,
      },
      {
        path: "/update/:id",
        element: <PrivateRouter><UpdateTutorials></UpdateTutorials></PrivateRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/tutor/${params.id}`)

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