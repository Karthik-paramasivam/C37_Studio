import React from "react";
import Slider from "react-slick";
import "react-lazy-load-image-component/src/effects/blur.css";
import Marriagephoto02 from "../Images/Marriagephoto2.jpg";
import Marriagephoto7 from "../Images/CSB08046.jpg";
import Marriagephoto8 from "../Images/RBG09890-Enhanced-NR.jpg";
import Marriagephoto9 from "../Images/16CSB01666.jpg";
import Family1 from "../Images/CSB09196.jpg";
import Photo1 from "../Images/CSB03653.webp";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import "../App.css";
import "../styles/Home.css";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import audio from "../audio/camera-shutter-6305.mp3";
import Meternity1 from "../Images/meta01.jpg";
import Wedding from "../Images/wedding.jpg";
import Wedding1 from "../Images/wedding01.jpg";
import Logo from "../Images/studio37Logob.webp";
import { useNavigate } from "react-router-dom";
import video1 from "../Videos/wed.mp4";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CarouselFade() {
  const audioRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [loadTime, setLoadTime] = useState(0); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 

    return () => clearTimeout(timer);
  }, []);

  const handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    }
  };

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  const handleExploreMoreClick = () => {
    navigate("/gallery/wedding");
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  const handleFamilyExploreMoreClick = () => {
    navigate("/gallery/family&baby");
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  const handleMaternityExploreMoreClick = () => {
    navigate("/gallery/maternity");
    window.scrollTo(0, 0); // Scroll to top of the page
  };

  const handleReachExploreMoreClick = () => {
    handleButtonClick();
    setTimeout(() => {
      navigate("/ourteam");
      window.scrollTo(0, 0); // Scroll to top of the page
    }, 600);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "5px",
    slidesToShow: 2,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const getThreshold = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      return 0.05; // Small devices
    }
    return 0.15; // Medium and larger devices
  };

  const [threshold, setThreshold] = useState(getThreshold());

  useEffect(() => {
    const handleResize = () => {
      setThreshold(getThreshold());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [hasViewed, setHasViewed] = useState({
    myElement: false,
    secondElement: false,
    thirdElement: false,
    fourthElement: false,
    fifthElement: false,
    sixthElement: false,
  });

  const { ref: myRef, inView: myElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.myElement) {
        setHasViewed((prev) => ({ ...prev, myElement: true }));
      }
    },
  });
  console.log("Element is visible:", myElementIsVisible);

  const { ref: secondRef, inView: secondElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.secondElement) {
        setHasViewed((prev) => ({ ...prev, secondElement: true }));
      }
    },
  });

  console.log("secondElementIsVisible is visible:", secondElementIsVisible);

  const { ref: ThirdRef, inView: ThirdElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.thirdElement) {
        setHasViewed((prev) => ({ ...prev, thirdElement: true }));
      }
    },
  });

  console.log("ThirdElementIsVisible is visible:", ThirdElementIsVisible);

  const { ref: FourthRef, inView: FourthElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.fourthElement) {
        setHasViewed((prev) => ({ ...prev, fourthElement: true }));
      }
    },
  });

  console.log("FourthElementIsVisible is visible:", FourthElementIsVisible);

  const { ref: FifthRef, inView: FifthElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.fifthElement) {
        setHasViewed((prev) => ({ ...prev, fifthElement: true }));
      }
    },
  });

  console.log("FifthElementIsVisible is visible:", FifthElementIsVisible);

  const { ref: SixthRef, inView: SixthElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.fifthElement) {
        setHasViewed((prev) => ({ ...prev, sixthElement: true }));
      }
    },
  });

  console.log("SixthElementIsVisible is visible:", SixthElementIsVisible);

  const styl = `.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
    .slick-slide img {
      transition: transform 0.5s ease-in-out; 
    }

  
    .slick-slide.slick-center img {
        transform: scale(1.1);
        
    }
    .navbar-toggler {
    padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
    font-size: var(--bs-navbar-toggler-font-size);
    line-height: 1;
    color: var(--bs-navbar-color);
    background-color: #fff;
    border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
    border-radius: var(--bs-navbar-toggler-border-radius);
    transition: var(--bs-navbar-toggler-transition);

  
}`;
  return (
    <>
      <audio ref={audioRef} src={audio} type="audio/mp3" />

      <style>{styl}</style>
      <div>
        {loading ? (
         
          <div className="container-fluid mt-5 border border-light m-0 p-0 bg-light">
            <div className="container-fluid mt-1 m-0 p-0 border border-white">
              <div className="mt-4 mt-md-4 mx-auto border border-white m-0 p-0">
                <Skeleton className="skel border border-white m-0 p-0 " />
              </div>
            </div>

            <div className="container-fluid mt-5">
              <Skeleton count={1}></Skeleton>
            </div>

            <div className="container-fluid mt-3 ">
              <div className="row m-0 p-0">
                <div className="col col-12 col-md-6 col-lg-4 mt-0 p-0 border border-light m-auto">
                  <div className="border border-light col col-md-12 col-lg-10  m-auto">
                    <Skeleton className="skelrow2 border border-light m-0 p-0 " />
                  </div>
                </div>

                <div className="col-11 col-md-11 col-lg-7 col-xl-6 mx-auto">
                  <div className="border border-light m-0 p-0 mt-3 mt-lg-2">
                    <Skeleton count={20}></Skeleton>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid mt-5">
              <Skeleton count={1}></Skeleton>
            </div>

            <div className="container mt-3">
              <div className="row ">
                <div className=" col col-12">
                  <Skeleton className="skel2 border border-white m-0 p-0 " />
                </div>
              </div>
            </div>

            <div className="container-fluid mt-5">
              <Skeleton count={1}></Skeleton>
            </div>

            <div className="contianer mt-3">
              <div className="row m-0 p-0">
                <div
                  className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center"
                  style={{ alignItems: "center" }}
                >
                  <div className="shadow-sm border border-light col-11 col-md-4 col-lg-4 ms-1 mt-2 main">
                    <Skeleton className="skel3 border border-light m-0 p-0 " />
                  </div>
                  <div className="shadow-sm border border-light col-11 col-md-4 col-lg-4 ms-1 mt-2 main">
                    <Skeleton className="skel3 border border-light m-0 p-0 " />
                  </div>
                  <div className="shadow-sm border border-light col-11 col-md-4 col-lg-4 ms-1 mt-2 main">
                    <Skeleton className="skel3 border border-light m-0 p-0 " />
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid mt-5 border border-light">
              <Skeleton count={1}></Skeleton>
            </div>

            <div className="container-fluid mt-2 border border-light">
              <div className="row m-0 p-0">
                <div className="col-12 m-0 p-0 m-auto">
                <Skeleton  count={5} />
              
                </div>
              </div>
            </div>

            <div className="container-fluid border border-light mt-4 p-1 ">
            <div className="row m-0 p-0">
              <div className="col-4 col-lg-1 text-start m-0 p-0 ">
                <Skeleton className="w-50 h-100 ms-3  m-0 p-0 "></Skeleton>
              </div>
              <div className="col-8 col-lg-11 text-end m-0 p-0 mt-2 pe-1 d-flex justify-content-end align-items-center">
                <span className="ms-1 me-1 me-md-2 me-lg-3 m-auto ">
                  <Skeleton
                    circle={true}
                    height={30}
                    width={30}
                    className="p-1"
                  />
                </span>

                <span className="me-md-2 me-lg-3 ">
                  <Skeleton
                    circle={true}
                    height={30}
                    width={30}
                    className="p-1"
                  />
                </span>

                <span className="ms-1 me-md-2 me-lg-3 ">
                  <Skeleton
                    circle={true}
                    height={30}
                    width={30}
                    className="p-1"
                  />
                </span>

                <span className="ms-1 me-md-2 me-lg-3 ">
                  <Skeleton
                    circle={true}
                    height={30}
                    width={30}
                    className="p-1"
                  />
                </span>

                <span className="ms-1 me-md-2 me-lg-3">
                  <Skeleton
                    circle={true}
                    height={30}
                    width={30}
                    className="p-1"
                  />
                </span>
              </div>
            </div>
          </div>
          </div>
        ) : (
          <div className="mt-5 border border-white m-0 p-0">
            <Container
              fluid
              className="container-fluid m-0 p-0 mt-1 border border-white bg-light"
            >
              <div className="container-fluid mt-4">
                <div className="row">
                  <div className="col col-12 m-0 p-0 ">
                    <video
                      className="video-responsive border border-light rounded"
                      autoPlay
                      loop
                      muted
                    >
                      <source src={video1} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              <div className="container justify-content-center align-items-center mt-5">
                <div className="row">
                  <div className="col-12 col-md-12">
                    <p className="fw-bold fs-2">
                      Celebrate Special Moments
                    </p>
                  </div>
                  <div
                    className={`row m-0 p-0 mt-3 mt-md-0 slide-in-left ${
                      hasViewed.myElement ? "animate-slide-in" : ""
                    }`}
                    ref={myRef}
                  >
                    <div className="col col-12 col-md-6 col-lg-4 mt-0 p-0 border border-light w-sm-75 w-md-25 w-lg-25 m-auto">
                      <div className="border border-white col col-md-12 col-lg-10 w-sm-75 m-auto">
                        <img
                          src={Photo1}
                          alt="Photo1"
                          className="img-fluid ms-0 border border-white rounded-3"
                        />
                      </div>
                    </div>
                    <div className="card card1 col-11 col-md-11 col-lg-7 mt-0 ms-3 ms-md-4 mt-md-4 mt-4 mt-lg-0 mt-xl-0 mt-xxl-0 shadow-sm border border-light">
                      <p className="mt-2 h4 lh-base fs-3 fw-bold">
                        Did we just become best friends?
                      </p>
                      <p className="mt-2 lh-base" style={{ fontSize: "18px" }}>
                        Once we start working together, we’ll learn how we can
                        best tailor your individual needs through listening to
                        your love story.
                      </p>

                      <ul
                        className="bullet-list mt-2 mx-auto text-start"
                        style={{ fontSize: "18px" }}
                      >
                        <li>
                          <span>
                            {" "}
                            <span className="fw-bold">
                              Consistent communication{" "}
                            </span>{" "}
                            to ensure everything is going to plan.
                          </span>
                        </li>
                        <li>
                          <span>
                            <span className="fw-bold">
                              Offering assistance{" "}
                            </span>{" "}
                            whenever necessary.
                          </span>
                        </li>
                        <li>
                          <span>
                            <span className="fw-bold"> Ensuring </span> you
                            never feel lost or stressed throughout the process.
                          </span>
                        </li>
                        <li>
                          <span>
                            <span className="fw-bold">
                              Making wedding planning a blast{" "}
                            </span>{" "}
                            and helping navigate your plans.
                          </span>
                        </li>
                        <li>
                          <span>
                            <span className="fw-bold"> Let's talk </span> and
                            make your special day perfect!
                          </span>
                        </li>
                      </ul>
                      <p style={{ fontSize: "18px" }} className="mt-0">
                        We’re dedicated to providing you with a seamless and
                        enjoyable wedding planning experience.{" "}
                      </p>

                      <p style={{ fontSize: "18px" }} className="mt-0">
                        Let’s create{" "}
                        <span className="text-bold">
                          unforgettable memories
                        </span>{" "}
                        together.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border border-light mt-5 ">
                <div className="container mt-5">
                  <div className="row">
                    <div className="col-12 col-md-12 ">
                      <p
                        className="fw-bold fs-2"
                      >
                        Capturing Your Love Story
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div
                      className={`col-9 col-md-11 col-lg-11 ms-5 ms-md-4 m-0 p-0 border border-2 border-light rounded ms-lg-5 ms-md-3 bg-light shadow slide-in-left ${
                        hasViewed.thirdElement ? "animate-slide-in" : ""
                      }`}
                      ref={ThirdRef}
                    >
                      <Slider {...settings}>
                        <div>
                          <img
                            src={Wedding1}
                            alt="Marriagephoto4"
                            className="img-fluid p-md-3 p-1"
                          />
                        </div>
                        <div>
                          <img
                            src={Marriagephoto7}
                            alt="Marriagephoto7"
                            className="img-fluid p-md-3 p-1"
                          />
                        </div>
                        <div>
                          <img
                            src={Marriagephoto02}
                            alt="Marriagephoto2"
                            className="img-fluid p-md-3 p-1 "
                          />
                        </div>
                        <div>
                          <img
                            src={Marriagephoto8}
                            alt="Marriagephoto8"
                            className="img-fluid p-md-3 p-1 "
                          />
                        </div>
                        <div>
                          <img
                            src={Marriagephoto9}
                            alt="Marriagephoto9"
                            className="img-fluid p-md-3 p-1"
                          />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 border border-light">
                <div className="container-fluid mt-5 bg-light ">
                  {/* <div className="row text-center"> */}
                  <div
                    className={`row slide-in-left  ${
                      hasViewed.secondElement ? "animate-slide-in" : ""
                    }`}
                    ref={secondRef}
                  >
                    <div className="col-12 col-md-12 mt-2 text-center">
                      <p
                        className="fw-bold fs-2 text-center"
                      >
                        Experience our photographic excellence{" "}
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div
                      className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center"
                      style={{ alignItems: "center" }}
                    >
                      <div className="card shadow-sm border border-light col-11 col-md-4 col-lg-4 ms-1 mt-2 main">
                        <img
                          src={Family1}
                          alt="Family photo"
                          className="img-fluid   p-2"
                          style={{ width: "100%" }}
                        />

                        <div className="over text-center m-auto border border-light rounded d-flex">
                          <Button
                            className="family-imagebutton align-self-center text-center m-auto explrbtn "
                            onClick={handleFamilyExploreMoreClick}
                            style={{
                              backgroundColor: "rgb(0, 0, 0, 0.1)",
                              color: "white",
                              border: "1px solid",
                            }}
                          >
                            <span>Explore More</span>
                          
                          </Button>
                        </div>
                      </div>
                      <div className="ms-1 card shadow-sm border border-light col-11 col-md-4 col-lg-4 ms-1 mt-2 main">
                        <img
                          src={Wedding}
                          alt="Wedding Photo"
                          className="img-fluid p-2 "
                          style={{ width: "100%" }}
                        />
                        <div className="over text-center m-auto border border-light rounded d-flex">
                          <Button
                            className="family-imagebutton align-self-center text-center m-auto explrbtn"
                            onClick={handleExploreMoreClick}
                            style={{
                              backgroundColor: "rgb(0, 0, 0, 0.1)",
                              color: "white",
                              border: "1px solid",
                            }}
                          >
                            {" "}
                            <span>Explore More</span>
                         
                          </Button>
                        </div>
                      </div>
                      <div className="ms-1 card shadow-sm border border-light col-11 col-md-4 col-lg-4 ms-1 mt-2 main">
                        <img
                          src={Meternity1}
                          alt="Maternity Photo"
                          className="img-fluid p-2"
                          style={{ width: "100%" }}
                        />
                        <div className="over text-center m-auto border border-light rounded-3 d-flex">
                          <Button
                            className="family-imagebutton align-self-center text-center m-auto explrbtn"
                            onClick={handleMaternityExploreMoreClick}
                            style={{
                              backgroundColor: "rgb(0, 0, 0, 0.1)",
                              color: "white",
                              border: "1px solid",
                            }}
                          >
                            {" "}
                            <span>Explore More</span>
                           
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container border border-light shadow-sm mt-5 rounded-3 camera-background">
                <div
                  className={`className="row m-0 p-0 slide-in-left ${
                    hasViewed.sixthElement ? "animate-slide-in" : ""
                  }`}
                  ref={SixthRef}
                >
                  <div className="col-12 col-md-12 mt-2 text-center text-light">
                    <p
                      className="fw-bold fs-2 text-center"
                    >
                      We're thrilled you're still here!{" "}
                    </p>
                    <p
                      className="fw-bold fs-2 text-center"
                    >
                      Ready for next steps?{" "}
                    </p>
                    <div>
                      <Button
                        className="rounded-pill reachButton"
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.5)",
                          border: "2px solid rgba(0, 0, 0, 0.1)",
                        }}
                        onClick={handleReachExploreMoreClick}
                      >
                        Let's start dreaming together
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-fluid border border-white mt-3 bg-white">
                <div
                  className={`row slide-in-left ${
                    hasViewed.fifthElement ? "animate-slide-in" : ""
                  }`}
                  ref={FifthRef}
                >
                  <div className="col-4 col-lg-1 text-start m-0 p-0">
                    <img
                      src={Logo}
                      width={100}
                      onClick={handleLogoClick}
                      alt="Logo"
                      className="img-fluid logo-image"
                    />
                  </div>
                  <div className="col-8 col-lg-11 text-end m-0 p-0 pe-1 d-flex justify-content-end align-items-center">
                    <span className="ms-1 me-1 me-md-2 me-lg-3 brand-image m-auto ">
                      <a
                        href="https://wa.me/917502584493"
                        className="text-dark"
                      >
                        <FontAwesomeIcon
                          icon={faWhatsapp}
                          size="xl"
                          className="p-1 social-image"
                        />
                      </a>
                    </span>

                    <span className="me-md-2 me-lg-3 brand-image">
                      <a
                        href="https://www.instagram.com/studio37wedding/"
                        className="text-dark"
                      >
                        <FontAwesomeIcon
                          icon={faXTwitter}
                          size="xl"
                          className="p-1 social-image"
                        />
                      </a>
                    </span>

                    <span className="me-md-2 me-lg-3 brand-image">
                      <a
                        href="https://www.instagram.com/studio37wedding/"
                        className="text-dark"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          size="xl"
                          className="p-1 social-image"
                        />
                      </a>
                    </span>

                    <span className="ms-1 me-md-2 me-lg-3 brand-image">
                      <a
                        href="https://www.facebook.com/studio37wedding"
                        className="text-dark"
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          size="xl"
                          className="p-1 social-image"
                        />
                      </a>
                    </span>

                    <span className="ms-1 me-md-2 me-lg-3 brand-image">
                      <a
                        href="https://www.youtube.com/results?search_query=studio37wedding"
                        className="text-dark"
                      >
                        <FontAwesomeIcon
                          icon={faYoutube}
                          size="xl"
                          className="p-1 social-image"
                        />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        )}
      </div>
    </>
  );
}
