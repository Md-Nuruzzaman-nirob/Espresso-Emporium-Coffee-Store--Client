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
      <div className="max-w-7xl xl:mx-auto pt-12 pb-12 mx-4 md:mx-10">
        <button
          style={{
            textShadow: "2px 2px 4px rgba(51, 26, 21)",
          }}
          onClick={handleGoBack}
          className="btn btn-sm bg-[#E3B577] text-xs lg:text-base text-white hover:text-[#331A15] hover:bg-[#F5F4F1] border-2 border-transparent hover:border-[#331A15] rounded-full font-Rancho px-6"
        >
          <BsBoxArrowLeft />
          Back
        </button>
      </div>
      <div className="max-w-7xl xl:mx-auto mx-4 md:mx-10 bg-[#F5F4F1] flex items-center rounded-xl font-Raleway mb-28">
        {photo ? (
          <div className="flex-1 w-[350px] h-[450px] flex flex-col items-center justify-center my-[70] ">
            <img className=" " src={photo} alt="" />
          </div>
        ) : (
          <div className="flex-1 w-[350px] h-[450px] my-[70] flex flex-col items-center justify-center">
            <p className="font-Rancho text-2xl">
              <VscEmptyWindow></VscEmptyWindow>
              empty photo
            </p>
          </div>
        )}

        <div className="flex-1 text-xl font-bold">
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
