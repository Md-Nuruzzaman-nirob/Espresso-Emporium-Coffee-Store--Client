import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { BsBoxArrowLeft } from "react-icons/bs";
import bg from "../../../assets/more/11.png";
import toast from "react-hot-toast";

const NewCoffeeAddingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { id } = useParams();
  const data = useLoaderData();
  //   console.log(data);

  const result = data.find((singleData) => singleData._id === id);

  const { name, chef, supplier, taste, category, details, photo } =
    result || {};

  const handleGoBack = () => {
    navigate(location?.state ? location.state : "/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = { name, chef, supplier, taste, category, details, photo };

    // sending to backEnd
    fetch(
      `https://espresso-emporium-n0w8l8r8p-md-nuruzzaman-nirob.vercel.app/coffee/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCoffee),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Updated Successfully");
          handleGoBack();
        }
      });
  };
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
      }}
      className="font-Raleway"
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
      <div className="max-w-7xl mx-4 md:mx-10 xl:mx-auto px-4 md:px-10 lg:px-16 xl:px-28 py-10 md:py-16 lg:py-20 bg-[#F4F3F0] mb-16 md:mb-20 lg:mb-28 rounded-3xl">
        <h3
          style={{
            textShadow: "2px 2px 4px rgba(51, 26, 21)",
          }}
          className="font-Rancho text-3xl md:text-5xl text-center"
        >
          Update Existing Coffee Details
        </h3>
        <p className="text-center text-xs md:text-sm lg:text-base xl:text-lg font-semibold md:mx-6 lg:mx-10 xl:mx-20 my-5 md:my-8">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        <form onSubmit={handleSubmit} className="font-semibold">
          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold ml-5 mb-2"
              >
                Name
              </label>
              <input
                defaultValue={name}
                type="text"
                id="name"
                name="name"
                className="text-sm rounded-full w-full px-5 py-3 bg-white text-black border focus:border-black focus:bg-white"
                placeholder="Enter coffee name"
                required
              />
            </div>

            <div className="w-1/2 ml-2">
              <label
                htmlFor="chef"
                className="block text-gray-700 text-sm font-bold ml-5 mb-2"
              >
                Chef
              </label>
              <input
                defaultValue={chef}
                type="text"
                id="chef"
                name="chef"
                className="text-sm rounded-full w-full px-5 py-3 bg-white text-black border focus:border-black focus-bg-white"
                placeholder="Enter coffee chef"
                required
              />
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="supplier"
                className="block text-gray-700 text-sm font-bold ml-5 mb-2"
              >
                Supplier
              </label>
              <input
                defaultValue={supplier}
                type="text"
                id="supplier"
                name="supplier"
                className="text-sm rounded-full w-full px-5 py-3 bg-white text-black border focus:border-black focus-bg-white"
                placeholder="Enter coffee supplier"
                required
              />
            </div>

            <div className="w-1/2 ml-2">
              <label
                htmlFor="taste"
                className="block text-gray-700 text-sm font-bold ml-5 mb-2"
              >
                Taste
              </label>
              <input
                defaultValue={taste}
                type="text"
                id="taste"
                name="taste"
                className="text-sm rounded-full w-full px-5 py-3 bg-white text-black border focus:border-black focus-bg-white"
                placeholder="Enter coffee taste"
              />
            </div>
          </div>

          <div className="mb-4 flex">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="category"
                className="block text-gray-700 text-sm font-bold ml-5 mb-2"
              >
                Category
              </label>
              <input
                defaultValue={category}
                type="text"
                id="category"
                name="category"
                className="text-sm rounded-full w-full px-5 py-3 bg-white text-black border focus:border-black focus-bg-white"
                placeholder="Enter coffee category"
                required
              />
            </div>

            <div className="w-1/2 ml-2">
              <label
                htmlFor="details"
                className="block text-gray-700 text-sm font-bold ml-5 mb-2"
              >
                Details
              </label>
              <input
                defaultValue={details}
                type="text"
                id="details"
                name="details"
                className="text-sm rounded-full w-full px-5 py-3 bg-white text-black border focus-border-black focus-bg-white"
                placeholder="Enter coffee details"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="photo"
              className="block text-gray-700 text-sm font-bold ml-5 mb-2"
            >
              Photo
            </label>
            <input
              defaultValue={photo}
              type="text"
              id="photo"
              name="photo"
              className="text-sm rounded-full w-full px-5 py-3 bg-white text-black border focus-border-black focus-bg-white"
              placeholder="Enter coffee photo"
            />
          </div>

          <button
            type="submit"
            style={{
              textShadow: "2px 2px 4px rgba(51, 26, 21)",
            }}
            className=" w-full btn bg-[#E3B577] text-xs lg:text-base text-white hover:text-[#331A15] hover:bg-[#F5F4F1] border-2 border-transparent hover:border-[#331A15] rounded-full font-Rancho"
          >
            Update Coffee Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewCoffeeAddingPage;
