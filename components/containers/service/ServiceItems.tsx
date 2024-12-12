import Image from "next/image";
import Link from "next/link";
import One from "@/public/images/shape/service-two-item-shape.png";
import Eight from "@/public/images/icon/service-two-icon1.png";
import Ten from "@/public/images/icon/service-two-icon3.png";
import Twelve from "@/public/images/icon/service-two-icon5.png";
import Thirteen from "@/public/images/icon/service-two-icon6.png";

const ServiceItems = () => {
  const Four =
    "https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-image3.5ccfa425.jpg&w=384&q=75";
  const Six =
    "https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-image1.8eb36c4d.jpg&w=384&q=75";
  const Two =
    "https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-image5.a64ef26b.jpg&w=384&q=75";
  const Seven =
    "https://gratech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fservice-image2.07756d6b.jpg&w=384&q=75";
  return (
    <section className="service-inner-area pt-120 pb-120">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image
                  width={370}
                  height={250}
                  src={Seven}
                  alt="Image"
                  priority
                />
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
                  We specialize in creating dynamic, responsive websites
                  tailored to your needs, delivering exceptional performance,
                  user experience, and innovative functionality.
                </p>
                {/* <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image
                  width={370}
                  height={250}
                  src={Four}
                  alt="Image"
                  priority
                />
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
                  Creating innovative, user-friendly mobile applications
                  tailored to your business needs, ensuring seamless
                  performance, scalability, and enhanced user engagement.
                </p>
                {/* <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image
                  width={370}
                  height={250}
                  src={Six}
                  alt="Image"
                  priority
                />
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
                  We craft user-centric UI/UX designs that blend functionality
                  with aesthetics, enhancing user engagement and delivering
                  seamless digital experiences.
                </p>
                {/* <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="service-two__item">
              <div className="image">
                <Image
                  width={370}
                  height={250}
                  src={Two}
                  alt="Image"
                  priority
                />
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
                  Ensuring database security with robust encryption, access
                  controls, and monitoring to protect sensitive data and prevent
                  unauthorized access.
                </p>
                {/* <Link className="read-more-btn" href="service-details">
                  Read More <i className="fa-regular fa-arrow-right-long"></i>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceItems;
