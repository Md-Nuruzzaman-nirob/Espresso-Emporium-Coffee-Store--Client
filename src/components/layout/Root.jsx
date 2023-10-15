import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
