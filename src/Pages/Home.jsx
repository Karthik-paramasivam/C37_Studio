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
import "../styles/About.css";


import { Button, CardBody } from "react-bootstrap";
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
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";


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

  const handleHomeButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    }
    setTimeout(() => {
      navigate("/");
      window.scrollTo(0, 0);
    }, 600);
  };

  const handleAboutButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    }
    setTimeout(() => {
      navigate("/ourteam");
      window.scrollTo(0, 0);
    }, 600);
  };

  const handleWeddingButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    }
    setTimeout(() => {
      navigate("/gallery/wedding");
      window.scrollTo(0, 0);
    }, 600);
  };
  const handleFamilyButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    }
    setTimeout(() => {
      navigate("/gallery/family&baby");
      window.scrollTo(0, 0);
    }, 600);
  };
  const handleMaternityButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio play failed:", error);
      });
    }
    setTimeout(() => {
      navigate("/gallery/maternity");
      window.scrollTo(0, 0);
    }, 600);
  };


  const handlesocialClick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior

    const url = event.currentTarget.href; // Safely get the href attribute from the currentTarget
    setTimeout(() => {
      // window.location.href = url; // Navigate to the URL after the delay
      window.open(url, '_blank');
    }, 500); // 1000ms = 1 second
  };

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  const handleExploreMoreClick = () => {
    // navigate("/gallery/wedding");
    // window.scrollTo(0, 0); // Scroll to top of the page
    setTimeout(() => {
    navigate("/gallery/wedding");
    window.scrollTo(0, 0); // Scroll to top of the page
    }, 400);
  };
  const handleFamilyExploreMoreClick = () => {
    // navigate("/gallery/family&baby");
    // window.scrollTo(0, 0); // Scroll to top of the page
    setTimeout(() => {
      navigate("/gallery/family&baby");
      window.scrollTo(0, 0); // Scroll to top of the page
    }, 400); 
  };
  const handleMaternityExploreMoreClick = () => {
    // navigate("/gallery/maternity");
    // window.scrollTo(0, 0); // Scroll to top of the page
    setTimeout(() => {
    navigate("/gallery/maternity");
      window.scrollTo(0, 0); // Scroll to top of the page
    }, 400); 
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

          

          <div className="container mt-3">
            <div className="row">
              <div className="col-12 col-md-6">
                <Skeleton className="skeletonrowcol4 border border-white m-0 p-0 " />
              </div>
              <div className="col-12 col-md-6">
                <Skeleton className="skeletonrowcol5 border border-white m-0 p-0 " />
              </div>
            </div>
          </div>

            <div className="container-fluid mt-5 border border-light">
              <div className="row m-0 p-0">
                <div className="col-12 m-0 p-0 m-auto">
                <Skeleton  count={5} />
              
                </div>
              </div>
            </div>

            <div className="container-fluid border border-light mt-5 ">
            <div className="row m-0 p-0">
              <div className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2  ">
                <div className="d-flex flex-column mt-3">
                  <Skeleton className="ms-3 mb-2 m-0 p-0" style={{width:"50%", height:"50px"}}></Skeleton>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 col-xl-5 col-xxl-3 text-sart">
                <div className="d-flex flex-column mt-3">
                  <Skeleton count={10} className="m-0 p-0 "></Skeleton>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-4 text-md-center text-lg-center">
                <div
                  className="mt-3 text-md-center text-lg-center"
                  style={{ textAlign: "left" }}
                >
                  <Skeleton count={7} className="m-0 p-0 "></Skeleton>
                </div>
              </div>

              <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-3 m-0 p-0 pe-1 d-flex  p-1 mt-3">
                <span className="ms-1 me-1 me-md-2 me-lg-3 brand-image  text-start">
                  <Skeleton
                    circle={true}
                    height={30}
                    width={30}
                    className="p-1"
                  />
                </span>

                <span className="me-md-2 me-lg-3 brand-image">
                  <Skeleton
                    circle={true}
                    height={30}
                    width={30}
                    className="p-1"
                  />
                </span>

                <span className="ms-1 me-md-2 me-lg-3 brand-image">
                  <Skeleton
                    circle={true}
                    height={30}
                    width={30}
                    className="p-1"
                  />
                </span>

                <span className="ms-1 me-md-2 me-lg-3 brand-image">
                  <Skeleton
                    circle={true}
                    height={30}
                    width={30}
                    className="p-1"
                  />
                </span>

                <span className="ms-1 me-md-2 me-lg-3 brand-image">
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
                    <p className="fw-bold fs-2 ">
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
                      <div className="card shadow-sm  col-11 col-md-4 col-lg-4 ms-1 mt-2 main">
                        <img
                          src={Family1}
                          alt="Family photo"
                          className="img-fluid   p-2"
                          style={{ width: "100%" }}
                        />

                        <div className="over text-center m-auto   rounded d-flex">
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
                      <div className="ms-1 card shadow-sm  col-11 col-md-4 col-lg-4 ms-1 mt-2 main">
                        <img
                          src={Wedding}
                          alt="Wedding Photo"
                          className="img-fluid p-2 "
                          style={{ width: "100%" }}
                        />
                        <div className="over text-center m-auto  rounded d-flex">
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
                      <div className="ms-1 card shadow-sm  col-11 col-md-4 col-lg-4 ms-1 mt-2 main">
                        <img
                          src={Meternity1}
                          alt="Maternity Photo"
                          className="img-fluid p-2"
                          style={{ width: "100%" }}
                        />
                        <div className="over text-center m-auto  rounded-3 d-flex">
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

             

              <div className="border border-light">
              <div className="container mt-5">
                <div className="row">
                  <div className="col-12">
                    <p className="fw-bold fs-2">Reach us</p>
                  </div>
                </div>
                <div className="row m-0 p-0">
                  <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                    <div
                      className={`card mainlogo m-0 p-0 p-1 col col-12 col-md-5 col-lg-5 border border-2 border-light slide-in-left ${
                        hasViewed.fourthElement ? "animate-slide-in" : ""
                      }`}
                      ref={FourthRef}
                    >
                      <img src={Logo} alt="Logo" className="img-fluid" />
                      <CardBody>
                        <p className="text-decoration-underline fs-3 fw-bold ">
                          Contact
                        </p>

                        <p
                          className="text-dark m-0 p-0 mt-2  beat-animation"
                          style={{ textAlign: "center", lineHeight:"35px" }}
                        >
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            size="xl"
                            bounce
                            className="text-center me-2"
                          />
                          STUDIO37wedding,
                          <br />
                          Aryan Soap Colony, Ramasamy Nagar,
                          <br />
                          Radhakrishna Layout, Ramanathapuram,
                          <br />
                          Coimbatore, Tamil Nadu 64104
                        </p>
                        <p>
                          <span>
                            <FontAwesomeIcon
                              icon={faPhone}
                              shake
                              className="me-2 mt-3"
                            />
                          </span>
                          <span className=" beat-animation">
                            <a
                              href="tel:7502584493"
                              className="text-dark text-decoration-none"
                            >
                              7502584493
                            </a>
                            /
                            <a
                              href="tel:7200889433"
                              className="text-dark text-decoration-none"
                            >
                              7200889433
                            </a>{" "}
                          </span>
                        </p>
                      </CardBody>
                    </div>

                    <div
                      className={`card shadow-sm m-0 p-0  p-1 ms-lg-5 ms-md-3 col col-12 col-md-6 col-lg-6 mt-2 mt-lg-0 mt-md-0 mt-xl-0 mt-xxl-0 border border-2 border-light slide-in-left ${
                        hasViewed.fourthElement ? "animate-slide-in" : ""
                      }`}
                      ref={FourthRef}
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15666.130655490444!2d76.9913408!3d10.9986043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85722a5eb8683%3A0xf444aae1ff2689e5!2sSTUDIO37wedding!5e0!3m2!1sen!2sin!4v1719825723479!5m2!1sen!2sin"
                        className="w-100 h-100"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <p className="text-end">
                    <a
                      href="https://wa.me/917502584493"
                      className=" fixed-icon"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} bounce size="3x" />
                    </a>
                  </p>
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


              <div className="container-fluid border border-white mt-5 bg-white p-4">
                <div
                  className={`row slide-in-left ${
                    hasViewed.fifthElement ? "animate-slide-in" : ""
                  }`}
                  ref={FifthRef}
                >
                  <div className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2 text-sart">
                  <div className="d-flex flex-column mt-2">
                    <img
                      src={Logo}
                      width={100}
                      alt="Logo"
                      className="img-fluid logo-image mb-3"
                      onClick={handleLogoClick}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-3 col-lg-3 col-xl-5 col-xxl-3 text-sart">
                  <div className="d-flex flex-column mt-3">
                    <p className="h5 text-start fw-bold">Contact Us</p>
                    <div className="col-10" style={{ textAlign: "left" }}>
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        size="xl"
                        beat
                        className="text-center"
                      />
                    </div>

                    <p
                      className="text-dark m-0 p-0 mt-2"
                      style={{ textAlign: "left", lineHeight:"35px" }}
                    >
                      STUDIO37wedding,
                      <br/>
                      Aryan Soap Colony, Ramasamy Nagar,
                      <br />
                      Radhakrishna Layout, Ramanathapuram,
                      <br />
                      Coimbatore, Tamil Nadu 64104
                    </p>
                    <div className="col-10" style={{ textAlign: "left" }}>
                      <FontAwesomeIcon icon={faPhone} shake className=" mt-3" />
                    </div>
                    <p className="text-dark" style={{ textAlign: "left" }}>
                      {" "}
                      7502584493 / 7200889433
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-4 text-md-center text-lg-center">
                  <div
                    className="mt-3 text-md-center text-lg-center"
                    style={{ textAlign: "left" }}
                  >
                    <p className="h5 fw-bold text-md-center text-lg-center">
                      Explore Us
                    </p>
                  </div>
                  <div
                    className="text-md-center text-lg-center "
                    style={{ textAlign: "left" }}
                  >
                    <p className="footerText " onClick={handleHomeButtonClick}>
                      Home
                    </p>
                    <p className="footerText " onClick={handleAboutButtonClick}>
                      About
                    </p>
                    <p
                      className="footerText "
                      onClick={handleWeddingButtonClick}
                    >
                      Wedding
                    </p>
                    <p className="footerText" onClick={handleFamilyButtonClick}>
                      Family & Baby Portraits
                    </p>
                    <p
                      className="footerText"
                      onClick={handleMaternityButtonClick}
                    >
                      Maternity
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-4 col-lg-4 col-xl-4 col-xxl-3  text-md-end  justify-content-end align-items-center align-items-md-end ">
                  <div>
                    <p className="text-start h5 mt-3 fw-bold text-md-center ms-md-3 ms-xxl-4">
                      Follow Us
                    </p>
                  </div>
                  <div className="text-start text-md-end text-xxl-center">
                    <span className="ms-1 me-1 me-md-2 me-lg-3 brand-image logodiv">
                      <a
                        href="https://wa.me/917502584493"
                        className="text-dark"
                        onClick={handlesocialClick}
                      >
                        <FontAwesomeIcon
                          icon={faWhatsapp}
                          size="xl"
                          className="p-1 social-image Whatslogo"
                        />
                      </a>
                    </span>

                    <span className="me-md-2 me-lg-3 brand-image logodiv">
                      <a
                        href="https://x.com/studio37wedding"
                        className="text-dark"
                        onClick={handlesocialClick}
                      >
                        <FontAwesomeIcon
                          icon={faXTwitter}
                          size="xl"
                          className="p-1 social-image Xlogo"
                        />
                      </a>
                    </span>

                    <span className="ms-1 me-md-2 me-lg-3 brand-image logodiv">
                      <a
                        href="https://www.instagram.com/studio37wedding/"
                        className="text-dark"
                        onClick={handlesocialClick}
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          size="xl"
                          className="p-1 social-image instalogo"
                        />
                      </a>
                    </span>

                    <span className="ms-1 me-md-2 me-lg-3 brand-image logodiv">
                      <a
                        href="https://www.facebook.com/studio37wedding"
                        className="text-dark"
                        onClick={handlesocialClick}
                      >
                        <FontAwesomeIcon
                          icon={faFacebook}
                          size="xl"
                          className="p-1 social-image fblogo"
                        />
                      </a>
                    </span>

                    <span className="ms-1 me-md-2 me-lg-3 brand-image logodiv">
                      <a
                        href="https://www.youtube.com/results?search_query=studio37wedding"
                        className="text-dark"
                        onClick={handlesocialClick}
                      >
                        <FontAwesomeIcon
                          icon={faYoutube}
                          size="xl"
                          className="p-1 social-image youtblogo"
                        />
                      </a>
                    </span>
                  </div>
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
