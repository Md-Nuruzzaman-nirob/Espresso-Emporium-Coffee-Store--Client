import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/homePage/Home";
import NewCoffeeAddingPage from "../components/pages/addPage/NewCoffeeAddingPage";
import CoffeeDetails from "../components/pages/detailsPage/CoffeeDetails";
import CoffeeUpdate from "../components/pages/updatePage/CoffeeUpdate";
import Login from "../components/pages/auth/Login";
import Register from "../components/pages/auth/Register";

const myAppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://espresso-emporium-n0w8l8r8p-md-nuruzzaman-nirob.vercel.app/coffee"
          ),
      },
      {
        path: "/addnewcoffee",
        element: <NewCoffeeAddingPage></NewCoffeeAddingPage>,
      },
      {
        path: "/coffedetails/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: () =>
          fetch(
            "https://espresso-emporium-n0w8l8r8p-md-nuruzzaman-nirob.vercel.app/coffee"
          ),
      },
      {
        path: "/coffeupdate/:id",
        element: <CoffeeUpdate></CoffeeUpdate>,
        loader: () =>
          fetch(
            "https://espresso-emporium-n0w8l8r8p-md-nuruzzaman-nirob.vercel.app/coffee"
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default myAppRouter;
