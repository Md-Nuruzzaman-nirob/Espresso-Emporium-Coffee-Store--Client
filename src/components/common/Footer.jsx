import bg1 from "../../assets/more/13.jpg";
import bg2 from "../../assets/more/24.jpg";
import logo from "../../assets/more/logo1.png";
import icon1 from "../../assets/icons/facebook-3-2 1@2x.png";
import icon2 from "../../assets/icons/Group 24@2x.png";
import icon3 from "../../assets/icons/instagram-2016-5 1@2x.png";
import icon4 from "../../assets/icons/linkedin-icon-2 1@2x.png";
import frame1 from "../../assets/icons/Frame@2x1.png";
import frame2 from "../../assets/icons/Frame@2x2.png";
import frame3 from "../../assets/icons/Frame@2x.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: " no-repeat",
      }}
    >
      <div className="font-Raleway max-w-7xl mx-auto flex justify-center items-center gap-10 pt-28 pb-12 ">
        <div className="flex-1 text-[#1B1A1A]">
          <img className="w-[75px] h-[90px]" src={logo} alt="" />
          <h3
            style={{
              textShadow: "2px 2px 4px rgba(51, 26, 21)",
            }}
            className="text-5xl text-[#331A15] font-Rancho mt-6 mb-8"
          >
            Espresso Emporium
          </h3>
          <p className="text-xl">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>
          <div className="flex items-center gap-5 my-8">
            <img className="w-10 h-10" src={icon1} alt="" />
            <img className="w-10 h-10" src={icon2} alt="" />
            <img className="w-10 h-10" src={icon3} alt="" />
            <img className="w-10 h-10" src={icon4} alt="" />
          </div>
          <h3
            style={{
              textShadow: "2px 2px 4px rgba(51, 26, 21)",
            }}
            className="text-5xl text-[#331A15] font-Rancho mb-8"
          >
            Get in Touch
          </h3>
          <div className="flex items-center gap-2">
            <img className="w-6 h-6" src={frame1} alt="" />
            <p className="font-sans hover:underline">+880 1901010101</p>
          </div>
          <div className="flex items-center gap-2 my-4">
            <img className="w-6 h-6" src={frame2} alt="" />
            <p className="hover:underline">info.mdnuruzzaman1@gmail.com</p>
          </div>
          <div className="flex items-center gap-2">
            <img className="w-6 h-6" src={frame3} alt="" />
            <p>72, Wall street, King Road, Dhaka</p>
          </div>
        </div>

        {/* contact */}
        <div className="flex-1">
          <h3
            style={{
              textShadow: "2px 2px 4px rgba(51, 26, 21)",
            }}
            className="text-5xl text-[#331A15] font-Rancho mb-8"
          >
            Connect with Us
          </h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                className="rounded-full w-full px-3 py-2 bg-white text-black border focus:border-black focus:bg-white"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="rounded-full w-full px-3 py-2 bg-white text-black border focus:border-black focus:bg-white"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                className="rounded-3xl w-full px-3 py-4 bg-white text-black border focus:border-black focus:bg-white overflow-hidden"
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              style={{
                textShadow: "2px 2px 4px rgba(51, 26, 21)",
              }}
              className="btn btn-sm lg:btn-md bg-[#E3B577] text-xs lg:text-base text-white hover:text-[#331A15] hover:bg-[#F5F4F1] border-2 border-transparent hover:border-[#331A15] rounded-full font-Rancho"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: " no-repeat",
        }}
        className="text-center py-3 font-Rancho"
      >
        <p className="text-sm text-[#FFF]">Create by NIROB</p>
        <h3 className="text-[#FFF] text-xl">
          Copyright Espresso Emporium ! All Rights Reserved.{" "}
        </h3>
      </div>
    </div>
  );
};

export default Footer;
