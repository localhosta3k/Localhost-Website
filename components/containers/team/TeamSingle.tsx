import Image from "next/image";
import Link from "next/link";
import One from "@/public/images/team/team-image1.jpg";

const TeamSingle = () => {
  return (
    <>
      <section className="team-single pt-120 pb-40">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="team-single__image">
                <Image src={One} alt="Image" priority />
                <div className="team-info">
                  <Link href="/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="/" className="active">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link href="/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="/">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="team-single__content">
                <div className="title pb-20 mb-20 bor-bottom">
                  <h3>Aakarsh Sharma</h3>
                  <span className="primary-color mt-1">
                    Full Stack Developer
                  </span>
                </div>
                <div className="team-single__info">
                  <h4 className="pb-2">About Me</h4>
                  <p className="mb-20">
                    Aakarsh Sharma is a skilled full-stack developer with
                    expertise in creating dynamic, user-centric web and mobile
                    applications. Known for delivering efficient solutions, he
                    combines technical excellence with fluent communication
                    skills, ensuring seamless collaboration.
                  </p>
                  <p>
                    Aakarsh Sharma is a skilled full-stack developer with
                    expertise in creating dynamic, user-centric web and mobile
                    applications. Known for delivering efficient solutions, he
                    combines technical excellence with fluent communication
                    skills, ensuring seamless collaboration. Aakarsh is
                    passionate about leveraging cutting-edge technologies to
                    solve complex challenges and drive impactful digital
                    transformations.
                  </p>
                  <div className="skills mt-40">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="experience-progress-wrapper">
                          <div className="experience-progress pb-4">
                            <div className="experience-title-wrapper d-flex align-items-center justify-content-between">
                              <h5 className="experience-title pb-2">
                                IT Management
                              </h5>
                              <span className="exp" style={{ left: "95%" }}>
                                95%
                              </span>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar "
                                data-aos="fade-left"
                                data-aos-duration="800"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow={90}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="experience-progress pb-4">
                            <div className="experience-title-wrapper d-flex justify-content-between align-items-center">
                              <h5 className="experience-title pb-2">
                                App Development
                              </h5>
                              <span style={{ left: "85%" }}>85%</span>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar "
                                data-aos="fade-left"
                                data-aos-duration="900"
                                role="progressbar"
                                style={{ width: "86%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="experience-progress-wrapper">
                          <div className="experience-progress pb-4">
                            <div className="experience-title-wrapper d-flex align-items-center justify-content-between">
                              <h5 className="experience-title pb-2">
                                Web Development
                              </h5>
                              <span className="exp" style={{ left: "95%" }}>
                                95%
                              </span>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar "
                                data-aos="fade-left"
                                data-aos-duration="800"
                                role="progressbar"
                                style={{ width: "95%" }}
                                aria-valuenow={95}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="experience-progress pb-4">
                            <div className="experience-title-wrapper d-flex justify-content-between align-items-center">
                              <h5 className="experience-title pb-2">
                                Platform Integration
                              </h5>
                              <span style={{ left: "90%" }}>90%</span>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar "
                                data-aos="fade-left"
                                data-aos-duration="900"
                                role="progressbar"
                                style={{ width: "98%" }}
                                aria-valuenow={98}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-single-history mt-60">
          <div className="container">
            <div className="title pb-30 mb-30 bor-bottom">
              <h3>Education Background</h3>
            </div>
            <h4>
              <span className="primary-color text-capitalize mb-3">
                Bachelor&apos;s degree in Computer Science
              </span>
              , 2024
            </h4>
            <p>
              Aakarsh Sharma, a full-stack developer with a Bachelor’s degree in
              Computer Science, excels in creating user-friendly web and mobile
              applications. With strong technical expertise and fluent
              communication skills, he ensures smooth collaboration and delivers
              high-quality solutions. Aakarsh is passionate about leveraging
              innovative technologies to solve complex problems and drive
              results.
            </p>
          </div>
        </div>
      </section>
      <section className="team-single pt-40 pb-40">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="team-single__image">
                <Image src={One} alt="Image" priority />
                <div className="team-info">
                  <Link href="/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="/" className="active">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link href="/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="/">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="team-single__content">
                <div className="title pb-20 mb-20 bor-bottom">
                  <h3>Abhinav Sinha</h3>
                  <span className="primary-color mt-1">
                    Full Stack Developer
                  </span>
                </div>
                <div className="team-single__info">
                  <h4 className="pb-2">About Me</h4>
                  <p className="mb-20">
                    Abhinav Sinha is a proficient full-stack developer
                    specializing in app development with React Native. With
                    expertise in building high-performing, cross-platform mobile
                    applications, he ensures seamless user experiences.
                  </p>
                  <p>
                    Abhinav combines technical proficiency with problem-solving
                    skills, delivering innovative solutions that meet client
                    needs and drive business growth through cutting-edge app
                    technologies.
                  </p>
                  <div className="skills mt-40">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="experience-progress-wrapper">
                          <div className="experience-progress pb-4">
                            <div className="experience-title-wrapper d-flex align-items-center justify-content-between">
                              <h5 className="experience-title pb-2">
                                IT Management
                              </h5>
                              <span className="exp" style={{ left: "85%" }}>
                                85%
                              </span>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar "
                                data-aos="fade-left"
                                data-aos-duration="800"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow={90}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="experience-progress pb-4">
                            <div className="experience-title-wrapper d-flex justify-content-between align-items-center">
                              <h5 className="experience-title pb-2">
                                App Development
                              </h5>
                              <span style={{ left: "98%" }}>98%</span>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar "
                                data-aos="fade-left"
                                data-aos-duration="900"
                                role="progressbar"
                                style={{ width: "86%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="experience-progress-wrapper">
                          <div className="experience-progress pb-4">
                            <div className="experience-title-wrapper d-flex align-items-center justify-content-between">
                              <h5 className="experience-title pb-2">
                                Web Development
                              </h5>
                              <span className="exp" style={{ left: "95%" }}>
                                95%
                              </span>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar "
                                data-aos="fade-left"
                                data-aos-duration="800"
                                role="progressbar"
                                style={{ width: "95%" }}
                                aria-valuenow={95}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="experience-progress pb-4">
                            <div className="experience-title-wrapper d-flex justify-content-between align-items-center">
                              <h5 className="experience-title pb-2">
                                Platform Integration
                              </h5>
                              <span style={{ left: "96%" }}>96%</span>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar "
                                data-aos="fade-left"
                                data-aos-duration="900"
                                role="progressbar"
                                style={{ width: "98%" }}
                                aria-valuenow={98}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-single-history mt-60">
          <div className="container">
            <div className="title pb-30 mb-30 bor-bottom">
              <h3>Education Background</h3>
            </div>
            <h4>
              <span className="primary-color text-capitalize mb-3">
                Bachelor&apos;s degree in Computer Science
              </span>
              , 2024
            </h4>
            <p>
              Abhinav Sinha, a full-stack developer with a Bachelor’s degree in
              Computer Science, excels in creating user-friendly web and mobile
              applications. With strong technical expertise and fluent
              communication skills, he ensures smooth collaboration and delivers
              high-quality solutions. Aakarsh is passionate about leveraging
              innovative technologies to solve complex problems and drive
              results.
            </p>
          </div>
        </div>
      </section>
      <section className="team-single pt-40 pb-40">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-4 col-md-6">
              <div className="team-single__image">
                <Image src={One} alt="Image" priority />
                <div className="team-info">
                  <Link href="/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link href="/" className="active">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link href="/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                  <Link href="/">
                    <i className="fa-brands fa-pinterest-p"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="team-single__content">
                <div className="title pb-20 mb-20 bor-bottom">
                  <h3>Kartik Singh Bisht</h3>
                  <span className="primary-color mt-1">
                    Full Stack Developer
                  </span>
                </div>
                <div className="team-single__info">
                  <h4 className="pb-2">About Me</h4>
                  <p className="mb-20">
                    Kartik Singh Bisht is a skilled full-stack developer
                    specializing in web development using the MERN stack and
                    Google APIs. With a passion for building scalable, dynamic
                    web applications, he delivers tailored solutions that
                    enhance functionality and user experience.
                  </p>
                  <p>
                    Kartik’s expertise ensures efficient integrations and
                    innovative approaches to meet diverse client needs.
                  </p>
                  <div className="skills mt-40">
                    <div className="row g-4">
                      <div className="col-md-6">
                        <div className="experience-progress-wrapper">
                          <div className="experience-progress pb-4">
                            <div className="experience-title-wrapper d-flex align-items-center justify-content-between">
                              <h5 className="experience-title pb-2">
                                IT Management
                              </h5>
                              <span className="exp" style={{ left: "90%" }}>
                                90%
                              </span>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar "
                                data-aos="fade-left"
                                data-aos-duration="800"
                                role="progressbar"
                                style={{ width: "90%" }}
                                aria-valuenow={90}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="experience-progress pb-4">
                            <div className="experience-title-wrapper d-flex justify-content-between align-items-center">
                              <h5 className="experience-title pb-2">
                                App Development
                              </h5>
                              <span style={{ left: "90%" }}>90%</span>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar "
                                data-aos="fade-left"
                                data-aos-duration="900"
                                role="progressbar"
                                style={{ width: "86%" }}
                                aria-valuenow={85}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="experience-progress-wrapper">
                          <div className="experience-progress pb-4">
                            <div className="experience-title-wrapper d-flex align-items-center justify-content-between">
                              <h5 className="experience-title pb-2">
                                Web Development
                              </h5>
                              <span className="exp" style={{ left: "90%" }}>
                                90%
                              </span>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar "
                                data-aos="fade-left"
                                data-aos-duration="800"
                                role="progressbar"
                                style={{ width: "95%" }}
                                aria-valuenow={95}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                          <div className="experience-progress pb-4">
                            <div className="experience-title-wrapper d-flex justify-content-between align-items-center">
                              <h5 className="experience-title pb-2">
                                Platform Integration
                              </h5>
                              <span style={{ left: "90%" }}>90%</span>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar "
                                data-aos="fade-left"
                                data-aos-duration="900"
                                role="progressbar"
                                style={{ width: "98%" }}
                                aria-valuenow={98}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-single-history mt-60">
          <div className="container">
            <div className="title pb-30 mb-30 bor-bottom">
              <h3>Education Background</h3>
            </div>
            <h4>
              <span className="primary-color text-capitalize mb-3">
                Bachelor&apos;s degree in Computer Science
              </span>
              , 2024
            </h4>
            <p>
              Kartik Singh Bisht, a full-stack developer with a Bachelor’s
              degree in Computer Science, excels in creating user-friendly web
              and mobile applications. With strong technical expertise and
              fluent communication skills, he ensures smooth collaboration and
              delivers high-quality solutions. Aakarsh is passionate about
              leveraging innovative technologies to solve complex problems and
              drive results.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSingle;
