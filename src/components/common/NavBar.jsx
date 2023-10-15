import logo from "../../assets/more/logo1.png";
import bg from "../../assets/more/15.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <Link to={"/"} className="flex justify-center items-center py-3">
        <img
          className="w-10 h-12 md:w-[60px] md:h-[75px] xl:w-[75px] xl:h-[90px] mr-4"
          src={logo}
          alt=""
        />
        <h1 className="font-Rancho text-2xl md:text-4xl xl:text-5xl">
          Espresso Emporium
        </h1>
      </Link>
    </div>
  );
};

export default NavBar;
