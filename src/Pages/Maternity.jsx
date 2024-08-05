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

export default function Maternity() {
  const [loading, setLoading] = useState(true);
  const [loadTime, setLoadTime] = useState(0); // State for page load time
  const carouselRef = useRef(null);
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  const scrollToCarousel = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 7000,
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

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    arrows: false,
    rtl: true,
    autoplaySpeed: 7000,
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);
  

  return (
    <div>
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

          <div className="container-fluid border border-white mt-4 p-1 ">
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
                            className="family-imagebutton2 align-self-center text-center m-auto"
                            style={{
                              backgroundColor: "rgb(0, 0, 0, 0.1)",
                              color: "white",
                              border: "1px solid",
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
                            className="family-imagebutton2 align-self-center text-center m-auto"
                            style={{
                              backgroundColor: "rgb(0, 0, 0, 0.1)",
                              color: "white",
                              border: "1px solid",
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
                            className="family-imagebutton2 align-self-center text-center m-auto"
                            style={{
                              backgroundColor: "rgb(0, 0, 0, 0.1)",
                              color: "white",
                              border: "1px solid",
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
              <div className="container-fluid mt-0">
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
                      <div className="hover-image-container">
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
                      <div className="hover-image-container">
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

            <div
              className="container-fluid border border-white mt-3 "
              style={{ backgroundColor: "#fffffff3" }}
            >
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
                    <a href="https://wa.me/917502584493" className="text-dark">
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
  );
}