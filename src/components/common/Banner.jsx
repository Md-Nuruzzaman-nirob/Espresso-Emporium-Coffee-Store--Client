import bg from "../../assets/more/3.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
      }}
      className="font-Rancho"
    >
      <div className="h-[28vh] md:h-[50vh] lg:h-[60vh] xl:h-[90vh] max-w-7xl mx-8 md:mx-10 xl:mx-auto flex justify-end items-center">
        <div className="text-center md:text-start md:w-6/12 2xl:w-7/12">
          {" "}
          <h1 className="text-xl md:text-2xl lg:text-4xl xl:text-5xl text-white">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="2xl:w-11/12 text-[#FFF] text-[8px] md:text-[10px] lg:text-sm 2xl:text-base font-Raleway mt-2 md:mt-4 mb-3 md:mb-5 xl:mb-8">
            It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="btn btn-sm lg:btn-md bg-[#E3B577] text-xs lg:text-base text-[#331A15] hover:bg-transparent hover:text-white hover:border-white border-2 border-transparent rounded-full">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
