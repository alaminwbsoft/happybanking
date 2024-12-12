import { createBrowserRouter } from "react-router";
import Home from "../Components/HomePageBeforeLogin/Home";
import LayOut from "../LayOut/LayOut";
import Login from "../Components/HomePageBeforeLogin/Login";
import Blog from "../Components/HomePageBeforeLogin/Blog";
import Contact from "../Components/HomePageBeforeLogin/Contact";
import Register from "../Components/HomePageBeforeLogin/Register";
import MFS from "../Components/PagesAfterlogin/MFS";
import Card from "../Components/PagesAfterlogin/Card";
import Bank from "../Components/PagesAfterlogin/Bank";
import Profile from "../Components/PagesAfterlogin/Profile";
import Transaction from "../Components/PagesAfterlogin/Transaction";
import MFSToMFSPayment from "../Components/PagesAfterlogin/MFSToMFSPayment";
import About from "../Components/PagesAfterlogin/About";
import PocketToBank from "../Components/PagesAfterlogin/PocketToBank";
import HomeAfrerLogin from "../Components/PagesAfterlogin/HomeAfrerLogin";

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
        path: "/dashboard",
        element: <HomeAfrerLogin />,
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
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/mfs",
        element: <MFS />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "/bank",
        element: <Bank />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/transaction",
        element: <Transaction />,
      },
      {
        path: "/mfsToMfsPayment",
        element: <MFSToMFSPayment />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/pocketToBank",
        element: <PocketToBank />,
      },
    ],
  },
]);

export default Router;
