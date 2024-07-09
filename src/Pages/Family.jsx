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
import Image9 from "../Images/CSB00717.jpg";
import Image10 from "../Images/BabyPhoto1.jpg";
import Image11 from "../Images/CSB07726.jpg";
import Image12 from "../Images/CSB05130.jpg";
import Image13 from "../Images/CSB03249.jpg";
import Image14 from "../Images/CSB07372.jpg";
import Image15 from "../Images/Babyphoto2.jpg";
import Image16 from "../Images/CSB02502.jpg";
import Image17 from "../Images/CSB09696-Edit.jpg";
import Image18 from "../Images/nithiyababy.jpg";
import Image20 from "../Images/CSB07372.jpg";
import Image21 from "../Images/CSB07442.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "../Images/studio37Logob.png";
import { useInView } from "react-intersection-observer";



export default function Family() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    rtl: true,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
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
    }
  });
  console.log("Element is visible:", myElementIsVisible);

  const { ref: myRef2, inView: mySecondElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.secondElement) {
        setHasViewed((prev) => ({ ...prev, secondElement: true }));
      }
    }
  });
  console.log("SecondElement is visible:", mySecondElementIsVisible);
  
  const { ref: myRef3, inView: myThirdElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.thirdElement) {
        setHasViewed((prev) => ({ ...prev, thirdElement: true }));
      }
    }
  });
  console.log("ThirdElement is visible:", myThirdElementIsVisible);

  const { ref: myRef4, inView: myFourthElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.fourthElement) {
        setHasViewed((prev) => ({ ...prev, fourthElement: true }));
      }
    }
  });
  console.log("myFourthElement is visible:", myFourthElementIsVisible);

  const { ref: myRef5, inView: myFifthElementIsVisible } = useInView({
    threshold,
    triggerOnce: true,
    onChange: (inView) => {
      if (inView && !hasViewed.fifthElement) {
        setHasViewed((prev) => ({ ...prev, fifthElement: true }));
      }
    }
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
  return (
    <>
      <style>{styl}</style>
      <Container
        fluid
        className="container-fluid m-0 p-0 mt-4 border border-white"
      >
        <div className="container-fluid ">
          <div className="container-fluid  mt-5 border border-white ">
            <Slider
              asNavFor={nav2}
              ref={(slider) => (sliderRef1 = slider)}
              //   autoplay={true}
              //   autoplaySpeed={3500}
            >
              <div>
                <img
                  src={Image1}
                  alt="Image1"
                  className="img-fluid ms-0 border border-light rounded"
                  style={{ width: "100%" }}
                />{" "}
              </div>
              <div>
                <img
                  src={Image2}
                  alt="Image2"
                  className="img-fluid ms-0 border border-light rounded"
                  style={{ width: "100%" }}
                />
              </div>
              <div>
                <img
                  src={Image3}
                  alt="Image3"
                  className="img-fluid ms-0 border border-light rounded"
                  style={{ width: "100%" }}
                />
              </div>

              <div>
                <img
                  src={Image9}
                  alt="Image9"
                  className="img-fluid ms-0 border border-light rounded"
                  style={{ width: "100%" }}
                />
              </div>
            </Slider>
            <Slider
              asNavFor={nav1}
              ref={(slider) => (sliderRef2 = slider)}
              slidesToShow={2}
              swipeToSlide={true}
              focusOnSelect={true}
              // autoplay={true}
              // autoplaySpeed={3000}
            >
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
                  src={Image8}
                  alt="Image8"
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
                  src={Image10}
                  alt="Image10"
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
              <p className="fs-2 fw-bolder mt-3 ">Family & Baby Portraits</p>
            </div>
            {/* <div className="row">
              <div className="col-12"></div>
            </div> */}
          </div>
        </div>

        <div className="mt-lg-3 border border-white">
          <div className="container-fluid mt-0 mt-lg-2">
            {/* <div className="row border border-white"> */}
            <div
              className={`row border border-white slide-in-left  ${
                hasViewed.myElement ? "animate-slide-in" : ""
              }`}
              ref={myRef}
            >
              <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center">
                <div className="card slideleft col-12 col-lg-6 border border-white rounded bg-light shadow-sm m-0 p-0 mt-lg-3">
                  <img
                    src={Image11}
                    alt="Image11"
                    className="img-fluid m-0 p-0  family-image border border-light rounded-3"
                  />
                </div>
                <div className="card col-12 col-lg-6 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3">
                  <img
                    src={Image12}
                    alt="Image12"
                    className="img-fluid m-0 p-0  family-image border border-light rounded-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid m-0 p-0 border border-white rounded mt-5">
      
          <div className="row m-0 p-0 text-center">
            <div className="col-12">
              <p className="fs-2 fw-bolder mt-3">Cherished Baby Smiles</p>
            </div>
          </div>
          {/* <div className="row m-0 p-0 mt-lg-2 bg-light m-0 p-0 border border-light shadow-sm"> */}
          <div
            className={`row m-0 p-0 mt-lg-2 bg-light m-0 p-0 border border-light shadow-sm slide-in-left ${
              hasViewed.secondElement ? "animate-slide-in" : ""
            }`}
            ref={myRef2}
          >
            <div className="col-12">
              <Slider {...settings2}>
                <div className="p-1">
                  <img
                    src={Image16}
                    alt="Image14"
                    className="img-fluid mt-1  border border-light rounded"
                  />
                </div>
                <div className="p-1">
                  <img
                    src={Image17}
                    alt="Image13"
                    className="img-fluid mt-1  border border-light rounded"
                  />
                </div>
                <div className="p-1">
                  <img
                    src={Image18}
                    alt="Image15"
                    className="img-fluid mt-1  border border-light rounded"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="mt-lg-3 border border-white">
          <div className="container-fluid mt-0 mt-lg-2">
          <div className="row m-0 p-0 text-center">
            <div className="col-12">
              <p className="fs-2 fw-bolder mt-3">Treasure Your Family Happiness</p>
            </div>
          </div>
            <div className="row border border-white mt-lg-2">
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
            </div>
          </div>
        </div>
        <div className="container-fluid border border-light mt-3 bg-light ">
          {/* <div className="row"> */}
          <div
            className={`row slide-in-left ${
              hasViewed.thirdElement ? "animate-slide-in" : ""
            }`}
            ref={myRef3}
          >
            <div className="col col-4 col-lg-1 text-start m-0 p-0 ">
              <img
                src={Logo}
                alt="Logo"
                className="img-fluid ms-2"
                style={{ height: "45px" }}
              />
            </div>
            <div className="col col-8 col-lg-11 text-end m-0 p-0 pe-1  ">
              <span className="ms-1 me-1 me-md-2 me-lg-3 brand-image">
                <a href="https://x.com/studio37wedding" className="text-dark ">
                  <FontAwesomeIcon icon={faXTwitter} className="mt-3" />
                </a>
              </span>
              <span className="me-md-2 me-lg-3 ">
                <a
                  href="https://www.instagram.com/studio37wedding/"
                  className="text-dark "
                >
                  <FontAwesomeIcon icon={faInstagram} className="mt-3" />
                </a>
              </span>
              <span className="ms-1 me-md-2 me-lg-3 brand-image">
                <a
                  href="https://www.facebook.com/studio37wedding"
                  className="text-dark "
                >
                  <FontAwesomeIcon icon={faFacebook} className="mt-3 " />
                </a>
              </span>

              <span className="ms-1 me-md-2 me-lg-3 brand-image">
                <a
                  href="https://www.youtube.com/results?search_query=studio37wedding"
                  className="text-dark "
                >
                  <FontAwesomeIcon icon={faYoutube} className="mt-3 " />
                </a>
              </span>
              
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
