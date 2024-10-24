import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import "../App.css";
import Slider from "react-slick";
import ma1 from "../Images/CSB03719.jpg";
import ma01 from "../Images/CSB01325.jpg";
import ma2 from "../Images/CSB06762.jpg";
import ma02 from "../Images/DSC07749.jpg";
import ma3 from "../Images/CSB06786.jpg";
import ma4 from "../Images/CSB06690.jpg";
import ma5 from "../Images/CSB06772.jpg";
import ma6 from "../Images/Untitled-1.jpg";
import ma7 from "../Images/Untitled-2.jpg";
import ma8 from "../Images/CSB03534-Edit.jpg";
import ma9 from "../Images/CSB03928.jpg";
import ma10 from "../Images/CSB03947.jpg";
import ma11 from "../Images/CSB06748.jpg";
import ma12 from "../Images/CSB06772.jpg";
import ma13 from "../Images/CSB06762.jpg";
import ma14 from "../Images/CSB07047.jpg";
import ma22 from "../Images/CSB06467.jpg";
import ma16 from "../Images/CSB06743.jpg";
import ma17 from "../Images/CSB07047.jpg";
import ma18 from "../Images/CSB01308-Edit.jpg";
import ma19 from "../Images/meta.jpg";
import ma20 from "../Images/CSB00392.jpg";
import ma21 from "../Images/CSB00363.jpg";
import ma15 from "../Images/CSB06488.jpg";
import ma23 from "../Images/CSB06746.jpg";
import { useNavigate } from "react-router-dom";
import ma24 from "../Images/csb04760.jpg";
import ma25 from "../Images/csb04781.jpg";
import ma26 from "../Images/csb04792.jpg";
import ma27 from "../Images/csb04854.jpg";
import ma28 from "../Images/csb04792(1).jpg";
import ma29 from "../Images/CSB04838.jpg";
import ma30 from "../Images/csb04814(1).jpg";
import ma31 from "../Images/csb04760(1).jpg";
import ma32 from "../Images/csb04854(1).jpg";
import ma33 from "../Images/meta01.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "../Images/studio37Logob.webp";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Button } from "react-bootstrap";
import { Riple } from "react-loading-indicators";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/Maternity.css";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import audio from "../audio/camera-shutter-6305.mp3";

export default function Maternity() {
  const audioRef = useRef(null);

  const [loading, setLoading] = useState(true);
  const [loadTime, setLoadTime] = useState(0); // State for page load time
  const [hoverDirection, setHoverDirection] = useState("");
  const handleMouseEnter = (e) => {
    const { clientWidth, clientHeight, offsetLeft, offsetTop } =
      e.currentTarget;
    const x = e.clientX - offsetLeft;
    const y = e.clientY - offsetTop;
    const xPercent = x / clientWidth;
    const yPercent = y / clientHeight;

    // if (xPercent > 0.5 && yPercent < 0.5) setHoverDirection('in-top');
    // if (xPercent >= 1 && yPercent < 1) setHoverDirection('in-right');
    if (xPercent < 0.5 && yPercent >= 0.5) setHoverDirection("in-left");
    else setHoverDirection("in-right");
  };
  const handleMouseLeave = (e) => {
    setHoverDirection("");
  };
  const carouselRef = useRef(null);
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  // const scrollToCarousel = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  const scrollToCarousel = () => {
    setTimeout(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 500); // 2000 milliseconds = 2 seconds
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
  const handlesocialClick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior

    const url = event.currentTarget.href; // Safely get the href attribute from the currentTarget
    setTimeout(() => {
      // window.location.href = url; // Navigate to the URL after the delay
      window.open(url, "_blank");
    }, 500); // 1000ms = 1 second
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    rtl: true,
    autoplaySpeed: 3000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      return 0.05;
    }
    return 0.15;
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
  // console.log("Element is visible:", myElementIsVisible);

  const { ref: myRef2, inView: mySecondElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.secondElement) {
        setHasViewed((prev) => ({ ...prev, secondElement: true }));
      }
    },
  });
  // console.log("SecondElement is visible:", mySecondElementIsVisible);

  const { ref: myRef3, inView: myThirdElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.thirdElement) {
        setHasViewed((prev) => ({ ...prev, thirdElement: true }));
      }
    },
  });
  // console.log("ThirdElement is visible:", myThirdElementIsVisible);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

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
      navigate("/about");
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
  const isMobileDevice = () => {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  };

  return (
    <div>
      <audio ref={audioRef} src={audio} type="audio/mp3" />

      {loading ? (
        <div className="container-fluid mt-5 border border-white m-0 p-0">
          <div className="container-fluid mt-1 m-0 p-0 border border-white">
            <div className="mt-4 mt-md-4 mx-auto border border-white m-0 p-0">
              <Skeleton className="sklton border border-white m-0 p-0 " />
            </div>
          </div>

          <div className="container-fluid mt-5 m-0 p-0">
            <Skeleton count={1}></Skeleton>
          </div>

          <div className="container  mt-3 ">
            <div className="row m-0 p-0 ">
              <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                <div className="card tw-origin-top-left tw--rotate-2  col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 mt-lg-3 mt-md-0 ms-md-2">
                  <div>
                    <Skeleton className="sklton2 border border-white m-0 p-0 " />
                  </div>
                </div>

                <div className="card tw-origin-top-left tw--rotate-2 col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3 mt-md-0 ms-md-2">
                  <div>
                    <Skeleton className="sklton2 border border-white m-0 p-0 " />
                  </div>
                </div>

                <div className="card tw-origin-top-left tw--rotate-2 col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3 mt-md-0 ms-md-2">
                  <div>
                    <Skeleton className="sklton2 border border-white m-0 p-0 " />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mt-5 m-0 p-0">
            <Skeleton count={1}></Skeleton>
          </div>

          <div className="border border-white mt-3">
            <div className="container-fluid mt-0">
              <div className="row border border-white m-0 p-0">
                <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center">
                  <div className="card col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 mt-lg-3">
                    <div>
                      <Skeleton className="sklton3 border border-white m-0 p-0 " />
                    </div>
                  </div>

                  <div className="card col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3">
                    <div>
                      <Skeleton className="sklton3 border border-white m-0 p-0 " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mt-5 m-0 p-0">
            <Skeleton count={1}></Skeleton>
          </div>

          <div className="container mt-3">
            <div className="row  border border-light bg-light shadow-sm rounded mt-lg-2 m-0 p-0">
              <div className="col-12 col-lg-12 m-auto">
                <Skeleton className="sklton4 border border-white m-0 p-0 " />
              </div>
            </div>
          </div>

          <div className="container-fluid mt-5 m-0 p-0">
            <Skeleton count={1}></Skeleton>
          </div>

          <div className="container  mt-3">
            <div className="row  border border-light bg-light shadow-sm rounded m-0 p-0">
              <div className="col-12 col-lg-12 m-auto">
                <Skeleton className="sklton5 border border-white m-0 p-0 " />
              </div>
            </div>
          </div>

          <div className="container-fluid border border-light mt-5 ">
            <div className="row m-0 p-0">
              <div className="col-12 col-md-2 col-lg-2 col-xl-2 col-xxl-2  ">
                <div className="d-flex flex-column mt-3">
                  <Skeleton
                    className="ms-3 mb-2 m-0 p-0"
                    style={{ width: "50%", height: "50px" }}
                  ></Skeleton>
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
            className="container-fluid m-0 p-0 mt-1 border border-white"
          >
            <div className="container-fluid mt-4">
              <div className="row">
                <div className="col col-12 m-0 p-0 border-white rounded">
                  <div className="hover-image-container2 main2">
                    <img
                      src={ma01}
                      alt="Image01"
                      className="img-fluid m-0 p-0 family-image border border-light rounded-3 default-img"
                    />
                    <img
                      src={ma02}
                      alt="Hover Image02"
                      className="img-fluid m-0 p-0 border border-light rounded-3 hover-img"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-4 border border-white">
              <div className="row">
                <div className="col col-12 m-0 p-0">
                  <p className="fs-2 fw-bolder mt-3">
                    Celebrate Maternity Memories
                  </p>
                </div>
                <div className="row">
                  <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                    <div className="card tw-origin-top-left tw--rotate-2  col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 mt-lg-3 mt-md-0 ms-md-2">
                      <div className="hover-image-container2 main2">
                        <img
                          src={ma2}
                          alt="Image2"
                          className="img-fluid m-0 p-0 family-image border border-light rounded-3 default-img"
                        />
                        <img
                          src={ma5}
                          alt="Hover Image5"
                          className="img-fluid m-0 p-0 border border-light rounded-3 hover-img"
                        />
                        <div className="over2">
                          <Button
                            className="family-imagebutton2 align-self-center text-center m-auto explrbtn"
                            style={{
                              backgroundColor: "rgb(0, 0, 0, 0.1)",
                              color: "white",
                              border: "0px solid",
                            }}
                            onClick={scrollToCarousel}
                          >
                            <span>Discover more</span>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="card tw-origin-top-left tw--rotate-2 col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3 mt-md-0 ms-md-2">
                      <div className="hover-image-container2 main2">
                        <img
                          src={ma3}
                          alt="Image3"
                          className="img-fluid m-0 p-0 family-image border border-light rounded-3 default-img"
                        />
                        <img
                          src={ma4}
                          alt="Hover Image4"
                          className="img-fluid m-0 p-0 border border-light rounded-3 hover-img"
                        />
                        <div className="over2">
                          <Button
                            className="family-imagebutton2 align-self-center text-center m-auto explrbtn"
                            style={{
                              backgroundColor: "rgb(0, 0, 0, 0.1)",
                              color: "white",
                              border: "0px solid",
                            }}
                            onClick={scrollToCarousel}
                          >
                            <span>Discover more</span>
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="card tw-origin-top-left tw--rotate-2 col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3 mt-md-0 ms-md-2">
                      <div className="hover-image-container2 main2">
                        <img
                          src={ma6}
                          alt="Image6"
                          className="img-fluid m-0 p-0 family-image border border-light rounded-3 default-img"
                        />
                        <img
                          src={ma7}
                          alt="Hover Image7"
                          className="img-fluid m-0 p-0 border border-light rounded-3 hover-img"
                        />
                        <div className="over2">
                          <Button
                            className="family-imagebutton2 align-self-center text-center m-auto explrbtn"
                            style={{
                              backgroundColor: "rgb(0, 0, 0, 0.1)",
                              color: "white",
                              border: "0px solid",
                            }}
                            onClick={scrollToCarousel}
                          >
                            <span>Discover more</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mt-5">
              <div className="row">
                <div className="col col-12 text-center">
                  <p className="fs-2 fw-bolder mt-3">
                    {/* <span className="border border-left border-dark rounded-start border-3 me-1 fs-2"></span> */}
                    Embrace Pregnancy Glow
                  </p>
                </div>
              </div>
            </div>

            <div className="border border-white mt-0">
              {/* <div className="container-fluid mt-0"> */}
              <div
                className={`container-fluid mt-0 slide-in-left  ${
                  mySecondElementIsVisible ? "animate-slide-in" : ""
                }`}
                ref={myRef2}
              >
                {/* <div className="row">
              <div className="col-12">
                <p
                  className="text-dark fw-bold fs-2"
                  style={{ fontFamily: "Arial" }}
                >
           Precisely Captured Shots
                  </p>{" "}
              </div>
              
            </div> */}

                <div className="row border border-white">
                  <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center">
                    {/* <div className="card slideleft col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 mt-lg-3">
                <img src={m6} alt="m6 image" className="img-fluid m-0 p-0 p-2 family-image border border-light rounded-3"/>
              </div> */}

                    <div className="card col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 mt-lg-3">
                      <div
                        className={`hover-image-container  ${hoverDirection}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img
                          src={ma1}
                          alt="m6 image"
                          className="img-fluid m-0 p-0 p-2 border border-light rounded-3 default-img"
                        />
                        <img
                          src={ma8}
                          alt="hover m9 image"
                          className="img-fluid m-0 p-0 p-2  border border-light rounded-3 hover-img"
                        />
                      </div>
                    </div>

                    {/* <div className="card col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3">
                <img
                  src={m8}
                  alt="m8 image"
                  className="img-fluid m-0 p-0 p-2 family-image border border-light rounded"
                />
              </div> */}

                    <div className="card col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3">
                      <div
                        className={`hover-image-container  ${hoverDirection}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {" "}
                        <img
                          src={ma9}
                          alt="m8 image"
                          className="img-fluid m-0 p-0 p-2  border border-light rounded default-img"
                        />
                        <img
                          src={ma10}
                          alt="hover m10 image"
                          className="img-fluid m-0 p-0 p-2  border border-light rounded hover-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 mt-lg-5 border border-white" ref={carouselRef}>
              <div className="container mt-2 mt-lg-5">
                {/* <div className={`container-fluid bg-white mt-5 slide-in-left  ${
              myElementIsVisible ? "animate-slide-in" : ""
            }`}
            ref={myRef}> */}

                <div className="row">
                  {/* <div
                className={`row slide-in-left  ${
                  hasViewed.myElement ? "animate-slide-in" : ""
                }`}
                ref={myRef}
              > */}
                  <div className="col-12">
                    <p className="text-dark fw-bold fs-2">
                      Maternity Twinkles{" "}
                    </p>
                  </div>
                </div>
                <div className="row  border border-light bg-light shadow-sm rounded mt-lg-2">
                  <div className="col-12 col-lg-12 m-auto">
                    <Slider {...settings}>
                      <div className="p-1" style={{ width: "93%" }}>
                        <img
                          src={ma12}
                          alt="Image12"
                          className="img-fluid mt-1 border border-light rounded"
                        />
                      </div>
                      <div className="p-1" style={{ width: "93%" }}>
                        <img
                          src={ma16}
                          alt="Image16"
                          className="img-fluid mt-1 border border-light rounded"
                        />
                      </div>
                      <div className="p-1" style={{ width: "93%" }}>
                        <img
                          src={ma20}
                          alt="Image20"
                          className="img-fluid mt-1 border border-light rounded"
                        />
                      </div>
                      <div className="p-1" style={{ width: "93%" }}>
                        <img
                          src={ma11}
                          alt="Image11"
                          className="img-fluid mt-1 border border-light rounded"
                        />
                      </div>
                      <div className="p-1" style={{ width: "93%" }}>
                        <img
                          src={ma15}
                          alt="Image15"
                          className="img-fluid mt-1 border border-light rounded"
                        />
                      </div>
                      <div className="p-1" style={{ width: "93%" }}>
                        <img
                          src={ma17}
                          alt="Image17"
                          className="img-fluid mt-1 border border-light rounded"
                        />
                      </div>
                      <div className="p-1" style={{ width: "93%" }}>
                        <img
                          src={ma21}
                          alt="Image21"
                          className="img-fluid mt-1 border border-light rounded"
                        />
                      </div>
                      <div className="p-1" style={{ width: "93%" }}>
                        <img
                          src={ma23}
                          alt="Image23"
                          className="img-fluid mt-1 border border-light rounded"
                        />
                      </div>
                      {/* <div className="p-1" style={{ width: "93%" }}>
                      <img
                        src={Image6}
                        alt="Image6"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div>
                    <div className="p-1" style={{ width: "93%" }}>
                      <img
                        src={Image2}
                        alt="Image2"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div> */}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="container-fluid mt-5">
                      <div style={{borderTop:"5px solid", borderBottom:"5px solid", borderRadius:"3px"}}>
                        <div style={{borderTop:"10px dashed rgb(0, 0, 0, 0.9)", borderBottom:"10px dashed rgb(0, 0, 0, 0.9)"}}>
                       
                          <div className="row m-0 p-0 border border-dark bg-dark">
                <div className="col-12 col-lg-12 m-auto">
                  <Slider {...settings}>
                    <div className=" border border-5 border-dark rounded-3" style={{ width: "93%" }}>
                      <img
                        src={ma12}
                        alt="Image3"
                        className="img-fluid border border-dark rounded-3"
                      />
                    </div>
                    <div className="border border-5 border-dark  rounded-3" style={{ width: "93%" }}>
                      <img
                        src={ma16}
                        alt="Image4"
                        className="img-fluid border border-dark rounded-3"
                      />
                    </div>
                    <div className="border border-5 border-dark  rounded-3" style={{ width: "93%" }}>
                      <img
                        src={ma11}
                        alt="Image5"
                        className="img-fluid border border-dark rounded-3"
                      />
                    </div>
                    <div className=" border border-5 border-dark rounded-3" style={{ width: "93%" }}>
                      <img
                        src={ma15}
                        alt="Image5"
                        className="img-fluid border border-dark rounded-3"
                      />
                    </div>
                    <div className=" border border-5 border-dark rounded-3" style={{ width: "93%" }}>
                      <img
                        src={ma17}
                        alt="Image5"
                        className="img-fluid border border-dark rounded-3"
                      />
                    </div>
                  </Slider>
                
              </div>
                          
                        
                        </div>
                        </div>
                      </div>
          </div> */}

            <div className="mt-5 mt-lg-5 border border-white">
              {/* <div className="container mt-2 mt-lg-5"> */}
              <div
                className={`container mt-2 mt-lg-5 slide-in-left  ${
                  myElementIsVisible ? "animate-slide-in" : ""
                }`}
                ref={myRef}
              >
                <div className="row">
                  {/* <div
                className={`row slide-in-left  ${
                  hasViewed.myElement ? "animate-slide-in" : ""
                }`}
                ref={myRef}
              > */}
                  <div className="col-12">
                    <p className="text-dark fw-bold fs-2">
                      Cherish Motherhood Memories
                    </p>
                  </div>
                </div>
                <div className="row  border border-light bg-light shadow-sm rounded">
                  <div className="col-12 col-lg-12 m-auto">
                    <Slider {...settings2}>
                      <div className="p-1" style={{ width: "93%" }}>
                        <img
                          src={ma32}
                          alt="Image32"
                          className="img-fluid mt-1 border border-light rounded"
                        />
                      </div>
                      <div className="p-1" style={{ width: "93%" }}>
                        <img
                          src={ma18}
                          alt="Image18"
                          className="img-fluid mt-1 border border-light rounded"
                        />
                      </div>
                      <div className="p-1" style={{ width: "93%" }}>
                        <img
                          src={ma33}
                          alt="Image33"
                          className="img-fluid mt-1 border border-light rounded"
                        />
                      </div>
                      <div className="p-1" style={{ width: "93%" }}>
                        <img
                          src={ma29}
                          alt="Image29"
                          className="img-fluid mt-1 border border-light rounded"
                        />
                      </div>

                      <div className="p-1" style={{ width: "93%" }}>
                        <img
                          src={ma19}
                          alt="Image19"
                          className="img-fluid mt-1 border border-light rounded"
                        />
                      </div>
                      {/* <div className="p-1" style={{ width: "93%" }}>
                      <img
                        src={Image6}
                        alt="Image6"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div>
                    <div className="p-1" style={{ width: "93%" }}>
                      <img
                        src={Image2}
                        alt="Image2"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div> */}
                    </Slider>
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

            <div
              className="container-fluid border border-white mt-5 p-4 "
              style={{ backgroundColor: "#fffffff3" }}
            >
              <div
                className={`row slide-in-left ${
                  hasViewed.thirdElement ? "animate-slide-in" : ""
                }`}
                ref={myRef3}
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
                    <p className="h5 text-start fw-bold beat-animation">
                      Contact Us
                    </p>
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
                      style={{ textAlign: "left", lineHeight: "35px" }}
                    >
                      STUDIO37wedding,
                      <br />
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
                      {/* 7502584493 / 7200889433 */}
                      <a
                        {...(isMobileDevice()
                          ? { href: "tel:7502584493" }
                          : {})}
                        className="text-dark text-decoration-none"
                      >
                        7502584493
                      </a>
                      /
                      <a
                        {...(isMobileDevice()
                          ? { href: "tel:7200889433" }
                          : {})}
                        className="text-dark text-decoration-none"
                      >
                        7200889433
                      </a>
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-3 col-lg-3 col-xl-3 col-xxl-4 text-md-center text-lg-center">
                  <div
                    className="mt-3 text-md-center text-lg-center"
                    style={{ textAlign: "left" }}
                  >
                    <p className="h5 fw-bold text-md-center text-lg-center beat-animation">
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
                    <p className="text-start h5 mt-3 fw-bold text-md-center ms-md-3 ms-xxl-4 beat-animation">
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
  );
}
