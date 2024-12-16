import AboutTwo from "@/components/containers/HomeTwo/AboutTwo";
import BlogTwo from "@/components/containers/HomeTwo/BlogTwo";
import CaseTwo from "@/components/containers/HomeTwo/CaseTwo";
import ChooseArea from "@/components/containers/HomeTwo/ChooseArea";
import FaqDark from "@/components/containers/HomeTwo/FaqDark";
import Quote from "@/components/containers/HomeTwo/Quote";
import ServiceTwo from "@/components/containers/HomeTwo/ServiceTwo";
import TestimonialDark from "@/components/containers/HomeTwo/TestimonialDark";
import BannerTwo from "@/components/layout/banner/BannerTwo";
import CustomCursor from "@/components/layout/CustomCursor";
import FooterTwo from "@/components/layout/footer/FooterTwo";
import HeaderDark from "@/components/layout/header/HeaderDark";
import ScrollProgressButton from "@/components/layout/ScrollProgressButton";

const page = () => {
  return (
    // <>
    //   <TopHeader />
    //   <Header />
    //   <Banner />
    //   <Service />
    //   <About />
    //   <CounterSection />
    //   <Case />
    //   <Offer />
    //   <Brand />
    //   <Process />
    //   <Testimonial />
    //   <Blog />
    //   <Footer />
    //   <CustomCursor />
    //   <ScrollProgressButton />
    // </>
    <>
      <div className="darken">
        <HeaderDark />
        <BannerTwo />
        {/* <Brand /> */}
        <AboutTwo />
        <ServiceTwo />
        <ChooseArea />
        {/* <Team /> */}
        <FaqDark />
        <CaseTwo />
        <TestimonialDark />
        {/* <BlogTwo /> */}
        <Quote />
        <FooterTwo />
        <CustomCursor />
        <ScrollProgressButton />
      </div>
    </>
  );
};

export default page;
