import { createBrowserRouter } from "react-router";
import Home from "../Components/HomePageBeforeLogin/Home";
import LayOut from "../LayOut/LayOut";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default Router;
