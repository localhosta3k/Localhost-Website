import CmnBanner from "@/components/layout/banner/CmnBanner";
import AboutTwo from "@/components/containers/HomeTwo/AboutTwo";
import Offer from "@/components/containers/HomeOne/Offer";
import Brand from "@/components/containers/HomeOne/Brand";
import CustomCursor from "@/components/layout/CustomCursor";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import CaseTwo from "@/components/containers/HomeTwo/CaseTwo";
import TestimonialDark from "@/components/containers/HomeTwo/TestimonialDark";
import HeaderDark from "@/components/layout/header/HeaderDark";
import TopHeader from "@/components/layout/header/TopHeader";
import Header from "@/components/layout/header/Header";
import Testimonial from "@/components/containers/HomeOne/Testimonial";

const page = () => {
  return (
    <div>
      <Header />
      {/* <HeaderDark /> */}
      <CmnBanner title="About Us" />
      <AboutTwo />
      <Offer />
      {/* <Brand /> */}
      <CaseTwo />
      {/* <TestimonialDark /> */}
      {/* <Case />*/}
       <Testimonial /> 
      {/* <Team /> */}
      {/* <Footer /> */}
      <FooterTwo />
      <CustomCursor />
      <ScrollProgressButton />
    </div>
  );
};

export default page;
