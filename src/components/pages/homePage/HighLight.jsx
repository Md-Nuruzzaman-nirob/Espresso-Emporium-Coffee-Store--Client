import icon1 from "../../../assets/icons/1.png";
import icon2 from "../../../assets/icons/2.png";
import icon3 from "../../../assets/icons/3.png";
import icon4 from "../../../assets/icons/4.png";

const HighLight = () => {
  return (
    <div className=" bg-[#ECEAE3] font-Rancho px-4 md:px-10">
      <div className="h-[120px] md:h-[200px] xl:h-[250px] 2xl:h-[300px] max-w-7xl mx-auto flex justify-evenly items-center">
        <div>
          <img
            className="w-[25px] md:w-[50px] xl:w-[70px] h-[25px] md:h-[50px] xl:h-[70px]"
            src={icon1}
            alt=""
          />
          <h3 className="text-sm md:text-2xl lg:text-3xl xl:text-4xl text-[#331A15] mt-2 md:mt-4 mb-1 md:mb-2">
            Awesome Aroma
          </h3>
          <p className="text-[7px] md:text-[10px] lg:text-xs xl:text-base mr-2 md:mr-3 lg:mr-5 xl:mr-8 text-[#1B1A1A] font-Raleway">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>

        <div>
          <img
            className="w-[25px] md:w-[50px] xl:w-[70px] h-[25px] md:h-[50px] xl:h-[70px]"
            src={icon2}
            alt=""
          />
          <h3 className="text-sm md:text-2xl lg:text-3xl xl:text-4xl text-[#331A15] mt-2 md:mt-4 mb-1 md:mb-2">
            High Quality
          </h3>
          <p className="text-[7px] md:text-[10px] lg:text-xs xl:text-base mr-2 md:mr-3 lg:mr-5 xl:mr-8 text-[#1B1A1A] font-Raleway">
            We served the coffee to you maintaining the best quality
          </p>
        </div>

        <div>
          <img
            className="w-[25px] md:w-[50px] xl:w-[70px] h-[25px] md:h-[50px] xl:h-[70px]"
            src={icon3}
            alt=""
          />
          <h3 className="text-sm md:text-2xl lg:text-3xl xl:text-4xl text-[#331A15] mt-2 md:mt-4 mb-1 md:mb-2">
            Pure Grades
          </h3>
          <p className="text-[7px] md:text-[10px] lg:text-xs xl:text-base mr-2 md:mr-3 lg:mr-5 xl:mr-8 text-[#1B1A1A] font-Raleway">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>

        <div>
          <img
            className="w-[25px] md:w-[50px] xl:w-[70px] h-[25px] md:h-[50px] xl:h-[70px]"
            src={icon4}
            alt=""
          />
          <h3 className="text-sm md:text-2xl lg:text-3xl xl:text-4xl text-[#331A15] mt-2 md:mt-4 mb-1 md:mb-2">
            Proper Roasting
          </h3>
          <p className="text-[7px] md:text-[10px] lg:text-xs xl:text-base mr-2 md:mr-3 lg:mr-5 xl:mr-8 text-[#1B1A1A] font-Raleway">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighLight;
