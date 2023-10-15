import img1 from "../../../assets/cups/Rectangle 10.png";
import img2 from "../../../assets/cups/Rectangle 11.png";
import img3 from "../../../assets/cups/Rectangle 12.png";
import img4 from "../../../assets/cups/Rectangle 13.png";
import img5 from "../../../assets/cups/Rectangle 14.png";
import img6 from "../../../assets/cups/Rectangle 15.png";
import img7 from "../../../assets/cups/Rectangle 16.png";
import img8 from "../../../assets/cups/Rectangle 9.png";

const SocialSection = () => {
  return (
    <div className="max-w-7xl mx-auto mb-28">
      <div className="text-center font-Rancho mb-12">
        <p className="text-xl text-black font-Raleway">--- Sip & Savor ---</p>
        <h3
          style={{
            textShadow: "2px 2px 4px rgba(51, 26, 21)",
          }}
          className="text-5xl text-[#331A15] mt-2 mb-4"
        >
          Follow on Instagram
        </h3>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
        <img src={img7} alt="" />
        <img src={img8} alt="" />
      </div>
    </div>
  );
};

export default SocialSection;
