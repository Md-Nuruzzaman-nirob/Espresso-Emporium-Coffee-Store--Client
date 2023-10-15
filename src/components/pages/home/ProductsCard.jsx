import PropTypes from "prop-types";
// import toast from "react-hot-toast";
import { AiFillEye, AiTwotoneDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProductsCard = ({ card }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { name, chef, photo, _id } = card || {};
  console.log(photo);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you want to delete this?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              navigate("/");
            }
          });
      }
    });
  };
  return (
    <div className="bg-[#F5F4F1] flex items-center justify-around rounded-xl font-Raleway">
      <div className="w-[200px] h-[250px] my-7">
        {photo !== "" ? (
          <img className="" src={photo} alt="" />
        ) : (
          <p className="h-full flex flex-col items-center justify-center font-Rancho text-2xl">
            <VscEmptyWindow></VscEmptyWindow>
            empty photo
          </p>
        )}
      </div>
      <div className="text-xl font-bold">
        <h3>
          Name : <span className="font-semibold text-[#5C5B5B]">{name}</span>
        </h3>
        <h3 className="my-2">
          Chef : <span className="font-semibold text-[#5C5B5B]">{chef}</span>
        </h3>
        <h3>
          Price : <span className="font-semibold text-[#5C5B5B]"></span>
        </h3>
      </div>
      <div className="flex flex-col">
        <Link to={`/coffedetails/${_id}`} state={location.pathname}>
          <button className="btn btn-sm lg:btn-md bg-[#E3B577] text-xs lg:text-base text-white hover:text-[#331A15] hover:bg-[#F5F4F1] border-2 border-transparent hover:border-[#331A15] rounded-full">
            <AiFillEye></AiFillEye>
          </button>
        </Link>
        <Link to={`/coffeupdate/${_id}`} state={location.pathname}>
          <button className="btn btn-sm lg:btn-md bg-black text-xs lg:text-base text-white hover:text-[#331A15] hover:bg-[#F5F4F1] border-2 border-transparent hover:border-[#331A15] my-4 rounded-full">
            <BsPencil></BsPencil>
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-red-600 text-xs lg:text-base text-white hover:text-[#331A15] hover:bg-[#F5F4F1] border-2 border-transparent hover:border-[#331A15] rounded-full"
        >
          <AiTwotoneDelete></AiTwotoneDelete>
        </button>
      </div>
    </div>
  );
};

ProductsCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default ProductsCard;
