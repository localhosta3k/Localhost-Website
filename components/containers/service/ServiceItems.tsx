import Image from "next/image";
import Link from "next/link";
import One from "@/public/images/shape/service-two-item-shape.png";
import Two from "@/public/images/service/service-image1.jpg";
import Three from "@/public/images/service/service-image2.jpg";
import Four from "@/public/images/service/service-image3.jpg";
import Five from "@/public/images/service/service-image4.jpg";
import Six from "@/public/images/service/service-image5.jpg";
import Seven from "@/public/images/service/service-image6.jpg";
import Eight from "@/public/images/icon/service-two-icon1.png";
import Nine from "@/public/images/icon/service-two-icon2.png";
import Ten from "@/public/images/icon/service-two-icon3.png";
import Eleven from "@/public/images/icon/service-two-icon4.png";
import Twelve from "@/public/images/icon/service-two-icon5.png";
import Thirteen from "@/public/images/icon/service-two-icon6.png";

const ServiceItems = () => {
  // const Four = "https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-image3.5ccfa425.jpg&w=384&q=75"
  // const Six = "https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-image1.8eb36c4d.jpg&w=384&q=75"
  // const Two = "https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-image5.a64ef26b.jpg&w=384&q=75"
  // const Seven = "https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-image2.07756d6b.jpg&w=384&q=75"
  return (
    <section className="service-inner-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image width={370} height={250} src={Seven} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Thirteen} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    Web App Develpopment
                  </Link>
                </h4>
                <p>
                  Pellentesque nec the condimentum nec lorem nulla augue est
                  ultricies ac iaculis.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image width={370} height={250} src={Four} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Ten} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    App Development
                  </Link>
                </h4>
                <p>
                  Pellentesque nec the condimentum nec lorem nulla augue est
                  ultricies ac iaculis.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image width={370} height={250} src={Six} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Twelve} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    UI/UX Design
                  </Link>
                </h4>
                <p>
                  Pellentesque nec the condimentum nec lorem nulla augue est
                  ultricies ac iaculis.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image width={370} height={250} src={Two} alt="Image" priority />
              </div>
              <div className="service-two__content">
                <div className="icon">
                  <Image src={Eight} alt="icon" priority />
                </div>
                <div className="shape">
                  <Image src={One} alt="shape" priority />
                </div>
                <h4>
                  <Link href="service-details" className="primary-hover">
                    Database Security
                  </Link>
                </h4>
                <p>
                  Pellentesque nec the condimentum nec lorem nulla augue est
                  ultricies ac iaculis.
                </p>
                <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
