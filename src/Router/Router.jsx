import { createBrowserRouter } from "react-router";
import Home from "../Components/HomePageBeforeLogin/Home";
import LayOut from "../LayOut/LayOut";
import Login from "../Components/HomePageBeforeLogin/Login";
import Blog from "../Components/HomePageBeforeLogin/Blog";
import Contact from "../Components/HomePageBeforeLogin/Contact";
import Register from "../Components/HomePageBeforeLogin/Register";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      {
        path: "/contact",
        element: <Contact/>
      },
    
    ],
  },
]);

export default Router;
