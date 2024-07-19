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
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "../Images/studio37Logob.png";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { Riple } from "react-loading-indicators";
import "../App.css";


export default function Family() {
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

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings1 = {
    asNavFor: nav2,
    ref: (slider) => (sliderRef1 = slider),
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
    asNavFor: nav1,
    ref: (slider) => (sliderRef2 = slider),
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

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 7000,
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
          }, 2000); // 5 seconds
  
          return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   // Function to measure page load time and set timeout
  //   const handlePageLoad = () => {
  //     const loadTime = performance.now();
  //     console.log(`Page loaded in ${loadTime} ms`);

  //     // Adding a buffer of 500ms to the measured load time
  //     const buffer = 100;
  //     setTimeout(() => {
  //       console.log("This runs after the page load time plus buffer");

  //       setLoading(false); // Stop loading spinner
  //     }, loadTime + buffer);
  //   };

  //   // Attach event listener to the window's load event
  //   window.addEventListener("load", handlePageLoad);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("load", handlePageLoad);
  //     setLoading(false);
  //   };
  // }, []);
  return (
    <>
      <style>{styl}</style>
      <div>
        {loading ? (
          <div className="loader-test">
            <div className="loader-container">
              <Riple color="#35b4d9" size="large" text="" textColor="" />
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
                  {/* <Slider
              asNavFor={nav2}
              ref={(slider) => (sliderRef1 = slider)}
              slidesToShow={2}
              swipeToSlide={true}
              focusOnSelect={true}
              //   autoplay={true}
              //   autoplaySpeed={3500}
            > */}
                  <Slider {...settings1}>
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
                  {/* <Slider
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              slidesToShow={4}
              swipeToSlide={true}
              focusOnSelect={true}
              // autoplay={true}
              // autoplaySpeed={3000}
            > */}
                  <Slider {...settings3}>
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
                  {/* <div className="row">
              <div className="col-12"></div>
            </div> */}
                </div>
              </div>

              <div className="mt-lg-3 border border-white">
                <div className="container mt-0 mt-lg-2">
                  {/* <div className="row border border-white"> */}
                  <div
                    className={`row border border-white slide-in-left  ${
                      hasViewed.myElement ? "animate-slide-in" : ""
                    }`}
                    ref={myRef}
                  >
                    <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                      {/* <div className="card slideleft col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 mt-lg-3 mt-md-0 ms-md-2">
                  <img
                    src={Image11}
                    alt="Image11"
                    className="img-fluid m-0 p-0  family-image border border-light rounded-3"
                  />
                </div> */}

                      {/* <div className="card col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3 mt-md-0 ms-md-2">
                  <img
                    src={Image27}
                    alt="Image27"
                    className="img-fluid m-0 p-0  family-image border border-light rounded-3"
                  />
                </div> */}

                      {/* <div className="card col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3 mt-md-0 ms-md-2">
                  <img
                    src={Image12}
                    alt="Image12"
                    className="img-fluid m-0 p-0  family-image border border-light rounded-3"
                  />
                </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border border-white">
                <div className="container mt-0 ">
                  {/* <div className="row border border-white mt-lg-2"> */}
                  <div
                    className={`row border border-white slide-in-left  ${
                      hasViewed.myElement ? "animate-slide-in" : ""
                    }`}
                    ref={myRef}
                  >
                    <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                      <div className="card  col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 mt-lg-1 mt-md-0 ">
                        <div className="hover-image-container">
                          <img
                            src={Image11}
                            alt="Image11"
                            className="img-fluid m-0 p-0 family-image border border-light rounded-3 default-img"
                          />
                          <img
                            src={Image32}
                            alt="Hover Image22"
                            className="img-fluid m-0 p-0  border border-light rounded-3 hover-img"
                          />
                        </div>
                      </div>

                      <div className="card col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-1 mt-2 mt-md-0 ms-md-2 ms-xl-2 ms-xxl-2">
                        <div className="hover-image-container">
                          <img
                            src={Image27}
                            alt="Image20"
                            className="img-fluid m-0 p-0  border border-light rounded-3 default-img"
                          />
                          <img
                            src={Image31}
                            alt="Hover Image21"
                            className="img-fluid m-0 p-0  border border-light rounded-3 hover-img"
                          />
                        </div>
                      </div>

                      <div className="card col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-1 mt-lg-1 mt-2 mt-md-0 ms-md-2 ms-xl-2 ms-xxl-2">
                        <div className="hover-image-container">
                          <img
                            src={Image12}
                            alt="Image12"
                            className="img-fluid m-0 p-0  border border-light rounded-3 default-img"
                          />
                          <img
                            src={Image30}
                            alt="Hover Image29"
                            className="img-fluid m-0 p-0  border border-light rounded-3 hover-img"
                          />
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
                {/* <div className="row m-0 p-0 mt-lg-2 bg-light m-0 p-0 border border-light shadow-sm"> */}
                <div
                  className={`row  mt-lg-4 bg-light m-0 p-0 border border-light shadow-sm slide-in-left ${
                    hasViewed.secondElement ? "animate-slide-in" : ""
                  }`}
                  ref={myRef2}
                >
                  <div className="col-12 col-lg-12 m-auto border border-light">
                    <Slider {...settings2}>
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
                      {/* <div className="p-1">
                  <img
                    src={Image25}
                    alt="Image25"
                    className="img-fluid mt-1  border border-light rounded"
                  />
                </div> */}
                      {/* <div className="p-1">
                  <img
                    src={Image25}
                    alt="Image25"
                    className="img-fluid mt-1  border border-light rounded"
                  />
                </div> */}
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

                  {/* <div className="row border border-white mt-lg-2">
              <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center">
                <div className="card slideleft col-12 col-lg-6 border border-white rounded bg-light shadow-sm m-0 p-0 mt-lg-3">
                  <img
                    src={Image20}
                    alt="Image11"
                    className="img-fluid m-0 p-0  family-image border border-light rounded-3"
                  />
                </div>
                <div className="card col-12 col-lg-6 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3">
                  <img
                    src={Image21}
                    alt="Image12"
                    className="img-fluid m-0 p-0  family-image border border-light rounded-3"
                  />
                </div>
              </div>
            </div> */}

                  <div className="row border border-white mt-lg-2">
                    <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                      <div className="card  col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 mt-lg-3 mt-md-0 ">
                        <div className="hover-image-container">
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
                      </div>

                      <div className="card col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3 mt-md-0 ms-md-2 ms-xl-2 ms-xxl-2">
                        <div className="hover-image-container">
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

                      <div className="card col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-1 mt-lg-3 mt-3 mt-md-0 ms-md-2 ms-xl-2 ms-xxl-2">
                        <div className="hover-image-container">
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
              <div className="container-fluid border border-light mt-3 bg-light">
                <div
                  className={`row slide-in-left ${
                    hasViewed.thirdElement ? "animate-slide-in" : ""
                  }`}
                  ref={myRef3}
                >
                  <div className="col-4 col-lg-1 text-start m-0 p-0">
                    <img
                      src={Logo}
                      width={100}
                      alt="Logo"
                      className="img-fluid logo-image"
                      onClick={handleLogoClick}
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
