import { createBrowserRouter } from "react-router-dom";
import Root from "../components/layout/Root";
import Home from "../components/pages/homePage/Home";
import NewCoffeeAddingPage from "../components/pages/addPage/NewCoffeeAddingPage";
import CoffeeDetails from "../components/pages/detailsPage/CoffeeDetails";
import CoffeeUpdate from "../components/pages/updatePage/CoffeeUpdate";

const myAppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addnewcoffee",
        element: <NewCoffeeAddingPage></NewCoffeeAddingPage>,
      },
      {
        path: "/coffedetails/:id",
        element: <CoffeeDetails></CoffeeDetails>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/coffeupdate/:id",
        element: <CoffeeUpdate></CoffeeUpdate>,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
    ],
  },
]);

export default myAppRouter;
