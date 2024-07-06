// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import video1 from "../Videos/wed.mp4";
// import "../App.css";
// import { Container } from "react-bootstrap";
// import Image1 from "../Images/CSB04295.jpg"

// export default function Wedding(){
//     return(
//         // <div className="container-fluid">
//         //     <div className="row justify-content-center">
//         //         <div className="col col-12">
//         //             <video className="video-responsive" autoPlay loop muted>
//         //                 <source src={video1} type="video/mp4" />
//         //                 Your browser does not support the video tag.
//         //             </video>
//         //         </div>
//         //     </div>
//         // </div>
//         <Container fluid>
//             <div className="container-fluid m-0 p-0">
//                 <div className="row">
//                     <div className="col col-12 m-0 p-0">
//                         <img src={Image1} alt="Image1" className="img-fluid" />
//                     </div>
//                 </div>
//             </div>
//         </Container>
//     );
// }

import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import Image1 from "../Images/CSB04295.jpg";
import Image2 from "../Images/RBG09088-Enhanced-NR.jpg";
import "../App.css";
import Slider from "react-slick";
import Image3 from "../Images/CSB07597.jpg";
import Image4 from "../Images/CSB03753.jpg";
import Image5 from "../Images/CSB03653.jpg";
import Image6 from "../Images/CSB08037.jpg";
import m1 from "../Images/m1.jpg";
import m2 from "../Images/m2.jpg";
import m3 from "../Images/m3.jpg";
import m4 from "../Images/m4.jpg";
import m5 from "../Images/m5.jpg";
import m6 from "../Images/CSB02630.jpg";
import m7 from "../Images/RBG09209-Enhanced-NR-1-Edit.jpg";
// import m8 from "../Images/CSB02630.jpg";
import m8 from "../Images/Marriagephoto4.jpg";

import snow1 from "../Images/CSB07582.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "../Images/studio37Logob.png";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

export default function Wedding() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    rtl: true,
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

  const { ref: myRef, inView: myElementIsVisible } = useInView({
    threshold,
  });
  console.log("Element is visible:", myElementIsVisible);

  const { ref: myRef2, inView: mySecondElementIsVisible } = useInView({
    threshold,
  });
  console.log("SecondElement is visible:", mySecondElementIsVisible);
  
  const { ref: myRef3, inView: myThirdElementIsVisible } = useInView({
    threshold,
  });
  console.log("ThirdElement is visible:", myThirdElementIsVisible);

  const { ref: myRef4, inView: myFourthElementIsVisible } = useInView({
    threshold,
  });
  console.log("myFourthElement is visible:", myFourthElementIsVisible);

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
      <Container fluid className="container-fluid m-0 p-0">
     
        <div className="container-fluid ">
          <div className="row slideleft">
            <div className="col col-12 m-0 p-0">
              <img src={Image1} alt="Image1" className="img-fluid" />
            </div>
          </div>
        </div>

        <div className="container mt-5">
        <div className="row">
          <div className="col col-12 text-center">
            <p className="fs-2 fw-bolder mt-3">
              <span className="border border-left border-dark rounded-start border-3 me-1 fs-2"></span>
              Wedding Shots
            </p>
          </div>
        </div>
      </div>

        <div className="mt-lg-5 border border-white">
          <div className="container-fluid mt-0 mt-lg-5">
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
              <div className="card col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 mt-lg-3">
                <img src={m6} alt="Snow image" className="img-fluid m-0 p-0 p-2 family-image"/>
              </div>
              <div className="card col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3">
                <img
                  src={m8}
                  alt="Main image"
                  className="img-fluid m-0 p-0 p-2 family-image"
                />
              </div>
              </div>
            </div>
          </div>
        </div>
       

        <div className="mt-5 mt-lg-5 border border-white">
          <div className="container-fluid mt-2 mt-lg-5">
            {/* <div className={`container-fluid bg-white mt-5 slide-in-left  ${
              myElementIsVisible ? "animate-slide-in" : ""
            }`}
            ref={myRef}> */}

            {/* <div className="row"> */}
            <div
              className={`row slide-in-left  ${
                myElementIsVisible ? "animate-slide-in" : ""
              }`}
              ref={myRef}
            >
              <div className="col-12">
                <p
                  className="text-dark fw-bold fs-2"
                  style={{ fontFamily: "Arial" }}
                >
                  Moments That Everlastingly Reveal Your Love
                </p>
              </div>
            </div>
            <div className="row m-0 p-0 border border-light bg-light shadow rounded shadow">
              <div className="col-12">
                <Slider {...settings}>
                  <div className="p-1">
                    <img src={Image3} alt="Image3" className="img-fluid mt-1" />
                  </div>
                  <div className="p-1">
                    <img src={Image4} alt="Image4" className="img-fluid mt-1" />
                  </div>
                  <div className="p-1">
                    <img src={Image5} alt="Image5" className="img-fluid mt-1" />
                  </div>
                  <div className="p-1">
                    <img src={Image6} alt="Image6" className="img-fluid mt-1" />
                  </div>
                  <div className="p-1">
                    <img src={Image2} alt="Image2" className="img-fluid mt-1" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 mt-lg-5 border border-white">
          <div className="container-fluid mt-3 mt-lg-5">
            <div className="row">
              <div className="col-12">
                <p
                  className="text-dark fw-bold fs-2"
                  style={{ fontFamily: "Arial" }}
                >
                  Enrich Your Story with <span className={`slide-in-left  ${
                myFourthElementIsVisible ? "animate-slide-in" : ""
              }`}
              ref={myRef4}> Magic</span>
                  </p>{" "}
              </div>
              
            </div>

            <div className="row border border-white">
            <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center">
              <div className="card col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 mt-3">
                <img src={m7} alt="Snow image" className="img-fluid m-0 p-0 p-2 family-image"/>
              </div>
              <div className="card col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-3">
                <img
                  src={snow1}
                  alt="Main image"
                  className="img-fluid m-0 p-0 p-2 family-image"
                />
              </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 border border-white">
          <div className="container-fluid border border-white  mt-5 ">
            {/* <div className="row m-0 p-0"> */}
            <div className="row m-0 p-0">
              <div className="col-12 ">
                <p
                  className="text-dark fw-bold fs-2"
                  style={{ fontFamily: "Arial" }}
                >
                  We Bring Extra Sparkle To Your Wedding
                </p>
              </div>
            </div>
            <div
              className={`row m-0 p-0 bg-light border border-light rounded shadow slide-in-left  ${
                mySecondElementIsVisible ? "animate-slide-in" : ""
              }`}
              ref={myRef2}
            >
              <div className="col-12">
                <Slider {...settings2}>
                  <div className="p-1">
                    <img src={m1} alt="Image3" className="img-fluid mt-1" />
                  </div>
                  <div className="p-1">
                    <img src={m2} alt="Image4" className="img-fluid mt-1" />
                  </div>
                  <div className="p-1">
                    <img src={m3} alt="Image5" className="img-fluid mt-1" />
                  </div>
                  <div className="p-1">
                    <img src={m4} alt="Image6" className="img-fluid mt-1" />
                  </div>
                  <div className="p-1">
                    <img src={m5} alt="Image2" className="img-fluid mt-1" />
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid border border-light mt-5 bg-light ">
          {/* <div className="row"> */}
          <div
            className={`row slide-in-left ${
              myThirdElementIsVisible ? "animate-slide-in" : ""
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
              {/* <span className="border border-primary">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="mt-2"/>

              </span> */}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
