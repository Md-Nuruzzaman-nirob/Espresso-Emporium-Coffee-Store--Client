import { Link, useLoaderData, useLocation } from "react-router-dom";
import bg from "../../../assets/more/1.png";
import { GiCoffeeCup } from "react-icons/gi";
import ProductsCard from "./ProductsCard";

const Products = () => {
  const coffees = useLoaderData();
  const location = useLocation();

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
      }}
      className="bg-white font-Rancho my-28"
    >
      <div className="text-center">
        <p className="text-xl text-black font-Raleway">--- Sip & Savor ---</p>
        <h3
          style={{
            textShadow: "2px 2px 4px rgba(51, 26, 21)",
          }}
          className="text-4xl md:text-5xl text-[#331A15] mt-2 mb-4"
        >
          Our Popular Products
        </h3>
        <Link to={"/addnewcoffee"} state={location?.pathname}>
          <button
            style={{
              textShadow: "2px 2px 4px rgba(51, 26, 21)",
            }}
            className="btn btn-sm lg:btn-md bg-[#E3B577] text-xs lg:text-base text-white hover:text-[#331A15] hover:bg-[#F5F4F1] border-2 border-transparent hover:border-[#331A15] rounded-full"
          >
            Add Coffee <GiCoffeeCup></GiCoffeeCup>
          </button>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 mt-12 px-4 md:px-10">
        {coffees.map((card) => (
          <ProductsCard key={card._id} card={card}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
