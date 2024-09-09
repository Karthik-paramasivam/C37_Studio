import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import Image19 from "../Images/CSB01854.jpg";
import Image1 from "../Images/CSB09007.jpg";
import Image2 from "../Images/CSB07753.jpg";
import Image3 from "../Images/DSC08926.jpg";
import Image4 from "../Images/CSB01884.jpg";
import Image5 from "../Images/CSB09148.jpg";
import Image6 from "../Images/CSB07723.jpg";
import Image7 from "../Images/CSB01140.jpg";
import Image8 from "../Images/CSB09177.jpg";
import Image08 from "../Images/CSB08906-1.jpg";
import Image9 from "../Images/CSB00717.jpg";
import Image10 from "../Images/BabyPhoto1.jpg";
import Image11 from "../Images/CSB07726.jpg";
import Image12 from "../Images/CSB05130.jpg";
import Image13 from "../Images/CSB03249.jpg";
import Image14 from "../Images/CSB07372.jpg";
import Image15 from "../Images/Babyphoto2.jpg";
import Image16 from "../Images/CSB02502.jpg";
import Image17 from "../Images/CSB09685-Edit.jpg";
import Image18 from "../Images/nithiyababy.jpg";
import Image20 from "../Images/CSB07372.jpg";
import Image21 from "../Images/CSB07442.jpg";
import Image22 from "../Images/CSB08931.jpg";
import Image23 from "../Images/CSB09196.jpg";
import Image24 from "../Images/CSB09696-Edit.jpg";
import Image25 from "../Images/nithiyababy2.jpg";
import Image26 from "../Images/CSB08955babys.jpg";
import Image27 from "../Images/CSB09105babys.jpg";
import Image28 from "../Images/CSB04789babys.jpg";
import Image29 from "../Images/CSB08883babys.jpg";
import Image30 from "../Images/CSB04789babys.jpg";
import Image31 from "../Images/CSB08860.jpg";
import Image32 from "../Images/CSB07561.jpg";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "../Images/studio37Logob.webp";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/Family.css";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import audio from "../audio/camera-shutter-6305.mp3";

export default function Family() {
  const audioRef = useRef(null);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);
  const [loading, setLoading] = useState(true);
  const [loadTime, setLoadTime] = useState(0); // State for page load time
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  const handlesocialClick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior

    const url = event.currentTarget.href; // Safely get the href attribute from the currentTarget
    setTimeout(() => {
      // window.location.href = url; // Navigate to the URL after the delay
      window.open(url, "_blank");
    }, 500); // 1000ms = 1 second
  };

  // useEffect(() => {
  //   setNav1(sliderRef1);
  //   setNav2(sliderRef2);
  // }, []);

  const isMobileDevice = () => {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
  };

  const settings1 = {
    // asNavFor: nav2,
    // ref: (slider) => (sliderRef1 = slider),
    asNavFor: sliderRef2.current,
    ref: sliderRef1,
    slidesToShow: 2,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const settings3 = {
    // asNavFor: nav1,
    // ref: (slider) => (sliderRef2 = slider),
    asNavFor: sliderRef1.current,
    ref: sliderRef2,
    slidesToShow: 4,
    swipeToSlide: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const settings02 = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    arrows: false,
    dots: false,
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
  console.log("Element is visible:", myElementIsVisible);

  const { ref: myRef2, inView: mySecondElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.secondElement) {
        setHasViewed((prev) => ({ ...prev, secondElement: true }));
      }
    },
  });
  console.log("SecondElement is visible:", mySecondElementIsVisible);

  const { ref: myRef3, inView: myThirdElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.thirdElement) {
        setHasViewed((prev) => ({ ...prev, thirdElement: true }));
      }
    },
  });
  console.log("ThirdElement is visible:", myThirdElementIsVisible);

  const { ref: myRef4, inView: myFourthElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.fourthElement) {
        setHasViewed((prev) => ({ ...prev, fourthElement: true }));
      }
    },
  });
  console.log("myFourthElement is visible:", myFourthElementIsVisible);

  const { ref: myRef5, inView: myFifthElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.fifthElement) {
        setHasViewed((prev) => ({ ...prev, fifthElement: true }));
      }
    },
  });
  console.log("myFifthElement is visible:", myFifthElementIsVisible);

  const styl = `.slick-prev:before, .slick-next:before {
        font-family: 'slick';
        font-size: 20px;
        line-height: 1;
        opacity: .75;
        color: black;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }`;

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

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

  return (
    <>
      <audio ref={audioRef} src={audio} type="audio/mp3" />

      <style>{styl}</style>
      <div>
        {loading ? (
          <div className="container-fluid mt-5 border border-white m-0 p-0">
            <div className="container-fluid mt-1 m-0 p-0 border border-white">
              <div className="mt-4 mt-md-4 mx-auto border border-white m-0 p-0">
                <Skeleton className="skeltn border border-white m-0 p-0 " />
                <Skeleton className="skeltn skeltn01 border border-white m-0 p-0 " />
              </div>
            </div>

            <div className="container-fluid mt-5 m-0 p-0">
              <Skeleton count={1}></Skeleton>
            </div>

            <div className=" border border-white mt-3">
              <div className="container mt-0 ">
                <div className="row border border-white ">
                  <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                    <div className="card   col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 mt-lg-1 mt-md-0 ">
                      <div>
                        <Skeleton className="skeltn2 border border-white m-0 p-0 " />
                      </div>
                    </div>

                    <div className="card  col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-1 mt-2 mt-md-0 ms-md-2 ms-xl-2 ms-xxl-2">
                      <div>
                        <Skeleton className="skeltn2 border border-white m-0 p-0 " />
                      </div>
                    </div>

                    <div className="card  col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-1 mt-lg-1 mt-2 mt-md-0 ms-md-2 ms-xl-2 ms-xxl-2">
                      <div>
                        <Skeleton className="skeltn2 border border-white m-0 p-0 " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid mt-5 m-0 p-0">
              <Skeleton count={1}></Skeleton>
            </div>

            <div className="container-fluid mt-3 m-0 p-0">
              <div className="row mt-lg-4 bg-light m-0 p-0 border border-light shadow-sm">
                <div className="col-12 col-lg-12 m-auto border border-light">
                  <Skeleton className="skeltn3  border border-white m-0 p-0 " />
                </div>
              </div>
            </div>

            <div className="container-fluid mt-5 m-0 p-0">
              <Skeleton count={1}></Skeleton>
            </div>

            <div className="container mt-3">
              <div className="row border border-white  mt-lg-2">
                <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                  <div className="card  col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 mt-lg-3 mt-md-0 ">
                    <div>
                      <Skeleton className="skeltn4 border border-white m-0 p-0 " />
                    </div>
                  </div>

                  <div className="card  col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3 mt-md-0 ms-md-2 ms-xl-2 ms-xxl-2">
                    <div>
                      <Skeleton className="skeltn4 border border-white m-0 p-0 " />
                    </div>
                  </div>

                  <div className="card  col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-1 mt-lg-3 mt-3 mt-md-0 ms-md-2 ms-xl-2 ms-xxl-2">
                    <div>
                      <Skeleton className="skeltn4 border border-white m-0 p-0 " />
                    </div>
                  </div>
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
              <div className="container-fluid ">
                <div className="container-fluid  mt-4 border border-white ">
                  <Slider
                    asNavFor={nav2}
                    ref={(slider) => (sliderRef1 = slider)}
                    slidesToShow={2}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    //   autoplay={true}
                    //   autoplaySpeed={3500}
                    {...settings1}
                  >
                    {/* <Slider {...settings1}> */}
                    <div>
                      <img
                        src={Image1}
                        alt="Image1"
                        className="img-fluid ms-0 p-0 border border-light rounded"
                      />
                    </div>
                    <div>
                      <img
                        src={Image3}
                        alt="Image3"
                        className="img-fluid ms-0 p-0 border border-light rounded"
                      />
                    </div>
                    <div>
                      <img
                        src={Image2}
                        alt="Image3"
                        className="img-fluid ms-0 p-0 border border-light rounded"
                      />
                    </div>

                    <div>
                      <img
                        src={Image9}
                        alt="Image9"
                        className="img-fluid ms-0 p-0 border border-light rounded"
                      />
                    </div>
                  </Slider>
                  <Slider
                    asNavFor={nav1}
                    ref={(slider) => (sliderRef2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    // autoplay={true}
                    // autoplaySpeed={3000}
                    {...settings3}
                  >
                    {/* <Slider {...settings3}> */}
                    <div>
                      <img
                        src={Image4}
                        alt="Image4"
                        className="img-fluid ms-0 border border-light rounded"
                        style={{ width: "99.8%" }}
                      />
                    </div>
                    <div>
                      <img
                        src={Image5}
                        alt="Image5"
                        className="img-fluid ms-0 border border-light rounded"
                        style={{ width: "99.8%" }}
                      />
                    </div>
                    <div>
                      <img
                        src={Image7}
                        alt="Image7"
                        className="img-fluid ms-0 border border-light rounded"
                        style={{ width: "99.8%" }}
                      />{" "}
                    </div>
                    <div>
                      <img
                        src={Image10}
                        alt="Image10"
                        className="img-fluid ms-0 border border-light rounded"
                        style={{ width: "99.8%" }}
                      />
                    </div>
                    <div>
                      <img
                        src={Image6}
                        alt="Image6"
                        className="img-fluid ms-0 border border-light rounded"
                        style={{ width: "99.8%" }}
                      />{" "}
                    </div>

                    <div>
                      <img
                        src={Image08}
                        alt="Image08"
                        className="img-fluid ms-0 border border-light rounded"
                        style={{ width: "99.8%" }}
                      />{" "}
                    </div>
                  </Slider>
                </div>
              </div>

              <div className="container-fluid m-0 p-0 mt-5">
                <div className="row m-0 p-0">
                  <div className="col-12 text-center">
                    <p className="fs-2 fw-bolder mt-3 ">
                      Feel Family Happiness
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="mt-lg-3 border border-white">
                <div className="container mt-0 mt-lg-2">
                  <div
                    className={`row border border-white slide-in-left  ${
                      hasViewed.myElement ? "animate-slide-in" : ""
                    }`}
                    ref={myRef}
                  >
                    <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                    </div>
                  </div>
                </div>
              </div> */}

              <div className=" border border-white">
                <div className="container mt-0 ">
                  <div
                    className={`row border border-white slide-in-left  ${
                      hasViewed.myElement ? "animate-slide-in" : ""
                    }`}
                    ref={myRef}
                  >
                    <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                      <div className="card col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 mt-lg-1 mt-md-0 ">
                        <div className="hover-image-containerfb">
                          <img
                            src={Image11}
                            alt="Image11"
                            className="img-fluid m-0 p-0 family-image border border-light rounded-3 default-img"
                          />
                          <img
                            src={Image32}
                            alt="Hover Image22"
                            className="img-fluid m-0 p-0 border border-light rounded-3 hover-img"
                          />
                          <div className="glow-wrap">
                            <div className="glow"></div>
                          </div>
                        </div>
                      </div>

                      <div className="card col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-1 mt-2 mt-md-0 ms-md-2 ms-xl-2 ms-xxl-2">
                        <div className="hover-image-containerfb">
                          <img
                            src={Image27}
                            alt="Image20"
                            className="img-fluid m-0 p-0 border border-light rounded-3 default-img"
                          />
                          <img
                            src={Image31}
                            alt="Hover Image21"
                            className="img-fluid m-0 p-0 border border-light rounded-3 hover-img"
                          />
                          <div className="glow-wrap">
                            <div className="glow"></div>
                          </div>
                        </div>
                      </div>

                      <div className="card col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-1 mt-lg-1 mt-2 mt-md-0 ms-md-2 ms-xl-2 ms-xxl-2">
                        <div className="hover-image-containerfb">
                          <img
                            src={Image12}
                            alt="Image12"
                            className="img-fluid m-0 p-0 border border-light rounded-3 default-img"
                          />
                          <img
                            src={Image30}
                            alt="Hover Image29"
                            className="img-fluid m-0 p-0 border border-light rounded-3 hover-img"
                          />
                          <div className="glow-wrap">
                            <div className="glow"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container-fluid m-0 p-0 border border-white rounded mt-5">
                <div className="row  m-0 p-0 text-center">
                  <div className="col-12">
                    <p className="fs-2 fw-bolder mt-3">Cherished Baby Smiles</p>
                  </div>
                </div>
                <div
                  className={`row  mt-lg-4 bg-light m-0 p-0 border border-light shadow-sm slide-in-left ${
                    hasViewed.secondElement ? "animate-slide-in" : ""
                  }`}
                  ref={myRef2}
                >
                  <div className="col-12 col-lg-12 m-auto border border-light">
                    <Slider {...settings02}>
                      <div className="p-1">
                        <img
                          src={Image16}
                          alt="Image16"
                          className="img-fluid mt-1  border border-light rounded"
                        />
                      </div>
                      <div className="p-1">
                        <img
                          src={Image17}
                          alt="Image17"
                          className="img-fluid mt-1  border border-light rounded "
                        />
                      </div>
                      <div className="p-1">
                        <img
                          src={Image18}
                          alt="Image18"
                          className="img-fluid mt-1  border border-light rounded "
                        />
                      </div>
                      <div className="p-1">
                        <img
                          src={Image24}
                          alt="Image24"
                          className="img-fluid mt-1  border border-light rounded"
                        />
                      </div>
                      <div className="p-1">
                        <img
                          src={Image25}
                          alt="Image25"
                          className="img-fluid mt-1  border border-light rounded"
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>

              <div className="mt-5 border border-white">
                <div className="container mt-0 ">
                  <div className="row m-0 p-0 text-center">
                    <div className="col-12">
                      <p className="fs-2 fw-bolder mt-3">
                        Treasure Your Family Happiness
                      </p>
                    </div>
                  </div>

                  <div className="row border border-white mt-lg-2">
                    <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                      {/* <div className="card  col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 mt-lg-3 mt-md-0 ">
                        <div className="hover-image-containerb">
                          <img
                            src={Image8}
                            alt="Image8"
                            className="img-fluid m-0 p-0 family-image border border-light rounded-3 default-img"
                          />
                          <img
                            src={Image22}
                            alt="Hover Image22"
                            className="img-fluid m-0 p-0  border border-light rounded-3 hover-img"
                          />
                        </div>
                      </div> */}
                      <div className="card  col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-1 mt-lg-3 mt-3 mt-md-0 ms-md-2 ms-xl-2 ms-xxl-2">
                        <div className="hover-image-containerb">
                          <img
                            src={Image8}
                            alt="Image8"
                            className="img-fluid m-0 p-0  border border-light rounded-3 default-img"
                          />
                          <img
                            src={Image22}
                            alt="Hover Image22"
                            className="img-fluid m-0 p-0  border border-light rounded-3 hover-img"
                          />
                        </div>
                      </div>

                      <div className="card  col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3 mt-md-0 ms-md-2 ms-xl-2 ms-xxl-2">
                        <div className="hover-image-containerb">
                          <img
                            src={Image20}
                            alt="Image20"
                            className="img-fluid m-0 p-0  border border-light rounded-3 default-img"
                          />
                          <img
                            src={Image21}
                            alt="Hover Image21"
                            className="img-fluid m-0 p-0  border border-light rounded-3 hover-img"
                          />
                        </div>
                      </div>

                      <div className="card  col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-1 mt-lg-3 mt-3 mt-md-0 ms-md-2 ms-xl-2 ms-xxl-2">
                        <div className="hover-image-containerb">
                          <img
                            src={Image26}
                            alt="Image26"
                            className="img-fluid m-0 p-0  border border-light rounded-3 default-img"
                          />
                          <img
                            src={Image29}
                            alt="Hover Image29"
                            className="img-fluid m-0 p-0  border border-light rounded-3 hover-img"
                          />
                        </div>
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

              <div
                className="container-fluid border border-white mt-5 p-4"
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
                        <FontAwesomeIcon
                          icon={faPhone}
                          shake
                          className=" mt-3"
                        />
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
                      <p
                        className="footerText "
                        onClick={handleHomeButtonClick}
                      >
                        Home
                      </p>
                      <p
                        className="footerText "
                        onClick={handleAboutButtonClick}
                      >
                        About
                      </p>
                      <p
                        className="footerText "
                        onClick={handleWeddingButtonClick}
                      >
                        Wedding
                      </p>
                      <p
                        className="footerText"
                        onClick={handleFamilyButtonClick}
                      >
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
    </>
  );
}
