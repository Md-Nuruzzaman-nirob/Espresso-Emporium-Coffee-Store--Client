import { VscEmptyWindow } from "react-icons/vsc";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import bg from "../../../assets/more/11.png";
import { BsBoxArrowLeft } from "react-icons/bs";

const CoffeeDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();

  const result = data.find((singleData) => singleData._id === id);
  const { name, chef, supplier, taste, category, details, photo } =
    result || {};

  const location = useLocation();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(location?.state ? location.state : "/");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
      }}
    >
      <div className="max-w-7xl mx-4 md:mx-10 xl:mx-auto text-right lg:text-left py-8 md:py-12">
        <button
          style={{
            textShadow: "2px 2px 4px rgba(51, 26, 21)",
          }}
          onClick={handleGoBack}
          className="btn btn-sm lg:btn-md text-xs lg:text-base text-white hover:text-[#331A15] bg-[#E3B577] hover:bg-[#F5F4F1] border-2 border-transparent hover:border-[#331A15] rounded-full font-Rancho px-6 lg:px-10"
        >
          <BsBoxArrowLeft />
          Back
        </button>
      </div>

      <div className="max-w-7xl mx-4 md:mx-10 xl:mx-auto flex flex-col md:flex-row items-center bg-[#F5F4F1] rounded-xl font-Raleway mb-16 md:mb-20 lg:mb-28">
        {photo ? (
          <div className="flex-1 w-28 md:w-[350px] md:h-[450px] flex flex-col items-center my-6 md:my-0 justify-center ">
            <img src={photo} alt="" />
          </div>
        ) : (
          <div className="flex-1 w-[350px] h-[450px] my-24 md:my-0 flex items-center justify-center">
            <p className="font-Rancho text-2xl flex items-center gap-2">
              <VscEmptyWindow></VscEmptyWindow>
              empty photo
            </p>
          </div>
        )}

        <div className="flex-1 lg:text-xl font-bold mb-6 md:mb-0">
          <h1
            style={{
              textShadow: "2px 2px 4px rgba(51, 26, 21)",
            }}
            className="text-2xl md:text-3xl xl:text-4xl font-Rancho font-medium text-center md:text-start mb-5"
          >
            Niceties
          </h1>
          <h3>
            Name : <span className="font-semibold text-[#5C5B5B]">{name}</span>
          </h3>
          <h3 className="my-2">
            Chef : <span className="font-semibold text-[#5C5B5B]">{chef}</span>
          </h3>
          <h3 className="my-2">
            Supplier :{" "}
            <span className="font-semibold text-[#5C5B5B]">{supplier}</span>
          </h3>
          <h3 className="my-2">
            Taste :{" "}
            <span className="font-semibold text-[#5C5B5B]">{taste}</span>
          </h3>
          <h3 className="my-2">
            Category :{" "}
            <span className="font-semibold text-[#5C5B5B]">{category}</span>
          </h3>
          <h3 className="my-2">
            Details :{" "}
            <span className="font-semibold text-[#5C5B5B]">{details}</span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
