import Link from "next/link";
import Image from "next/image";
import One from "@/public/images/shape/footer-regular-left.png";
import Two from "@/public/images/shape/footer-solid-left.png";
import Three from "@/public/images/shape/footer-regular-right.png";
import Four from "@/public/images/shape/footer-solid-right.png";
import Five from "@/public/images/shape/footer-shadow-shape.png";
import Logo from "@/public/images/logo/logo.svg";

const Footer = () => {
  return (
    <footer className="footer-area secondary-bg">
      <div
        className="footer__shape-regular-left "
        data-aos="fade-left"
        data-aos-delay="0"
        data-aos-duration="1500"
      >
        <Image src={One} alt="shape" priority />
      </div>
      <div
        className="footer__shape-solid-left "
        data-aos="fade-left"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Image className="sway_Y__animation" src={Two} alt="shape" priority />
      </div>
      <div
        className="footer__shape-solid-right "
        data-aos="fade-right"
        data-aos-delay="0"
        data-aos-duration="1500"
      >
        <Image className="sway_Y__animation" src={Three} alt="shape" priority />
      </div>
      <div
        className="footer__shape-regular-right "
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="1500"
      >
        <Image src={Four} alt="shape" priority />
      </div>
      <div className="footer__shadow-shape">
        <Image src={Five} alt="shodow" priority />
      </div>
      <div className="container">
        <div className="footer__wrp pt-100 pb-100">
          <div
            className="footer__item item-big "
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1500"
          >
            <Link href="/" className="logo mb-30">
              {/* <Image src={Logo} alt="Image" priority /> */}
              <div style={{ fontSize: "2rem", color: "white" }}>LOCALHOST</div>
            </Link>
            <p>
              As your technology partner, we’re committed to delivering
              reliable, tailored solutions that simplify operations, enhance
              productivity, and support long-term growth.
            </p>
            <div className="social-icon">
              <Link
                href="https://www.instagram.com/localhost_a3k/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <Link href="/">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link href="/">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link href="/">
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>
          <div
            className="footer__item item-sm "
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <h3 className="footer-title">IT Solution</h3>
            <ul>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i> IT
                  Management
                </Link>
              </li>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i> SEO
                  Optimization
                </Link>
              </li>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i> Web
                  Development
                </Link>
              </li>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i> App / IOS
                  Dev
                </Link>
              </li>
              <li>
                <Link href="service-details">
                  <i className="fa-regular fa-angles-right me-1"></i> eCommerce
                  Dev
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="footer__item item-sm "
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <h3 className="footer-title">Quick Link</h3>
            <ul>
              <li>
                <Link href="about">
                  <i className="fa-regular fa-angles-right me-1"></i> About
                  LocalHost
                </Link>
              </li>
              <li>
                <Link href="service">
                  <i className="fa-regular fa-angles-right me-1"></i> Our
                  Services
                </Link>
              </li>
              <li>
                <Link href="pricing">
                  <i className="fa-regular fa-angles-right me-1"></i> Pricing
                  Plan
                </Link>
              </li>
              <li>
                <Link href="team">
                  <i className="fa-regular fa-angles-right me-1"></i> Our Team
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="footer__item item-big "
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1500"
          >
            <h3 className="footer-title">Contact Us</h3>
            <p className="mb-20">Delhi, India</p>
            <ul className="footer-contact">
              <li>
                <i className="fa-regular fa-clock"></i>
                <div className="info">
                  <h5>Opening Hours:</h5>
                  <p>Mon - Sat: 10.00 AM - 8.00 PM</p>
                </div>
              </li>
              <li>
                <i className="fa-duotone fa-phone"></i>
                <div className="info">
                  <h5>Phone Call:</h5>
                  <p>+91 ,9973780798 +91 7018120917, +91 9351972847</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center">
            <p data-aos="fade-down" data-aos-delay="0" data-aos-duration="1500">
              &copy; All Copyright 2024 by <Link href="/">LocalHost</Link>
            </p>
            <ul
              className="d-flex align-items-center flex-wrap gap-4 "
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <li>
                <Link href="/">Terms & Condition</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;