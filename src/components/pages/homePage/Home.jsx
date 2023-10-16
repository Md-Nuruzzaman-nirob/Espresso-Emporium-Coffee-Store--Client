import Banner from "../../common/Banner";
import HighLight from "./HighLight";
import Products from "./Products";
import SocialSection from "./SocialSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HighLight></HighLight>
      <Products></Products>
      <SocialSection></SocialSection>
    </div>
  );
};

export default Home;
