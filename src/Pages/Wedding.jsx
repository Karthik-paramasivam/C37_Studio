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
import Image1 from "../Images/CSB04295cover.jpg";
import Image2 from "../Images/RBG09088-Enhanced-NR.jpg";
import Image02 from "../Images/CSB00249weddingcover.jpg";
import Image03 from "../Images/CSB08335.jpg";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Slider from "react-slick";
import Image3 from "../Images/CSB07597.jpg";
import Image4 from "../Images/CSB03753.jpg";
import Image5 from "../Images/postoutdoor24.jpg";
import Image6 from "../Images/CSB08037.jpg";
import m1 from "../Images/m1.jpg";
import m2 from "../Images/m2.jpg";
import m3 from "../Images/m11.jpg";
import m4 from "../Images/m4.jpg";
import m5 from "../Images/m5.jpg";
import m6 from "../Images/CSB02630.jpg";
import m7 from "../Images/RBG09209-Enhanced-NR-1-Edit.jpg";
// import m8 from "../Images/CSB02630.jpg";
import m8 from "../Images/Marriagephoto4.jpg";
import m9 from "../Images/CSB02676-Edited.jpg";
import m10 from "../Images/13CSB01369.jpg";
import m11 from "../Images/RBG09798-Enhanced-NR-Edit.jpg";
import m12 from "../Images/CSB09470-2.jpg";
import m13 from "../Images/CSB09475-1.jpg";
import m14 from "../Images/CSB07550.jpg";
import {faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
import { Riple } from 'react-loading-indicators';


export default function Wedding() {
  const [loading, setLoading] = useState(true);
  const [loadTime, setLoadTime] = useState(0); // State for page load time
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0); // Scroll to top of the page

  };
  const settings01 = {
    dots: false,
    fade:true,
    autoplay:true,
    arrows:false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 4,
    slidesToScroll: 4,
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
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
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
      <div>{loading ? (
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
          <div className="container-fluid mt-4">
            <div className="row ">
              <div className="col col-12 m-0 p-0 ">
              <Slider {...settings01}>
        <div>
        <img
                  src={Image1}
                  alt="Image1"
                  className="img-fluid border border-light rounded slider-image"
                />        </div>
        <div>
        <img
                  src={Image02}
                  alt="Image02"
                  className="img-fluid border border-light rounded slider-image"
                />        </div>
        <div>
        <img
                  src={Image03}
                  alt="Image03"
                  className="img-fluid border border-light rounded slider-image"
                />        </div>
      </Slider>
               
              </div>
            </div>
          </div>

          <div className="container mt-3">
            <div className="row">
              <div className="col col-12 text-center">
                <p className="fs-2 fw-bolder mt-3">
                  {/* <span className="border border-left border-dark rounded-start border-3 me-1 fs-2"></span> */}
                  Enrich Wedding Beauty</p>
              </div>
            </div>
          </div>

          <div className="mt-lg-3 border border-white">
            <div className="container-fluid mt-0 mt-lg-2">
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

                  <div className="card col-12 col-lg-6  border border-light rounded bg-light shadow-sm m-0 p-0 mt-lg-3">
                    <div className="hover-image-container">
                      <img
                        src={m6}
                        alt="m6 image"
                        className="img-fluid m-0 p-0 p-2 border border-light rounded-3 default-img"
                      />
                      <img
                        src={m9}
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
                    <div className="hover-image-container ">
                      <img
                        src={m8}
                        alt="m8 image"
                        className="img-fluid m-0 p-0 p-2  border border-light rounded default-img"
                      />
                      <img
                        src={m10}
                        alt="hover m10 image"
                        className="img-fluid m-0 p-0 p-2  border border-light rounded hover-img"
                      />
                    </div>
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
                  hasViewed.myElement ? "animate-slide-in" : ""
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
              <div className="row  border border-light bg-light shadow rounded shadow">
                <div className="col-12 col-lg-12 m-auto">
                  <Slider {...settings}>
                    <div className="p-1" style={{ width: "93%" }}>
                      <img
                        src={Image3}
                        alt="Image3"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div>
                    <div className="p-1" style={{ width: "93%" }}>
                      <img
                        src={Image4}
                        alt="Image4"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div>
                    <div className="p-1" style={{ width: "93%" }}>
                      <img
                        src={Image5}
                        alt="Image5"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div>
                    <div className="p-1" style={{ width: "93%" }}>
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
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 mt-lg-5 border border-white">
            <div className="container mt-3 mt-lg-5">
              <div className="row">
                <div className="col-12">
                  <p
                    className="text-dark fw-bold fs-2"
                    style={{ fontFamily: "Arial" }}
                  >
                    Enrich Your Story with{" "}
                    <span
                      className={`slide-in-left  ${
                        hasViewed.fourthElement ? "animate-slide-in" : ""
                      }`}
                      ref={myRef4}
                    >
                      Magic
                    </span>
                  </p>
                </div>
              </div>

              <div className="row border border-white">
                <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                  {/* <div className="card col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 mt-lg-3">
                    <img
                      src={m7}
                      alt="Snow image"
                      className="img-fluid m-0 p-0 p-2 family-image border border-light rounded"
                    />
                  </div> */}

                  <div className="card tw-skew-y-2 col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 p-1 border border-white rounded shadow-sm m-0 p-0 mt-lg-3 mt-md-0">
                    <div className="hover-image-container m-auto"  style={{width:"97%"}}>
                      <img
                        src={m7}
                        alt="m7 image"
                        className="img-fluid m-0 p-0  rounded-3 default-img "
                      />
                      <img
                        src={m11}
                        alt="hover m11 image"
                        className="img-fluid m-0 p-0   rounded-3 hover-img"
                      />
                    </div>
                  </div>

                  {/* <div className="card col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-3">
                    <img
                      src={snow1}
                      alt="Main image"
                      className="img-fluid m-0 p-0 p-2 family-image border border-light rounded"
                    />
                  </div> */}

                  <div className="card tw-skew-y-1 col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4  p-1 border border-white rounded  shadow-sm m-0 p-0 ms-lg-3 mt-lg-3 mt-3 mt-md-0 ms-md-3 ms-xl-3 ms-xxl-3">
                    <div className="hover-image-container m-auto"  style={{width:"97%"}} >
                      <img
                        src={snow1}
                        alt="snow1 image"
                        className="img-fluid m-0 p-0 border border-light rounded-3 default-img"
                      />
                      <img
                        src={m14}
                        alt="hover Image3 image"
                        className="img-fluid m-0 p-0  border border-light rounded-3 hover-img"
                      />
                    </div>
                  </div>

                  <div className="card tw-skew-y-2 col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded  shadow-sm m-0 p-0 ms-lg-3 mt-lg-3 mt-3 mt-md-0 ms-md-3 ms-xl-3 ms-xxl-3 p-1">
                    <div className="hover-image-container m-auto"  style={{width:"98%"}}>
                      <img
                        src={m13}
                        alt="m13 image"
                        className="img-fluid m-0 p-0  border border-light rounded-3 default-img"
                      />
                      <img
                        src={m12}
                        alt="hover m12 image"
                        className="img-fluid m-0 p-0 border border-light rounded-3 hover-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="mt-5 mt-lg-5 border border-white">
            <div className="container-fluid border border-white  mt-3 mt-lg-5">
              {/* <div className="row m-0 p-0"> */}
              <div className="row">
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
                className={`row   bg-light border border-light rounded shadow slide-in-left  ${
                  hasViewed.secondElement ? "animate-slide-in" : ""
                }`}
                ref={myRef2}
              >
                <div className="col-12 m-0 p-0">
                  <Slider {...settings2}>
                    <div className="p-1">
                      <img
                        src={m1}
                        alt="Image3"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div>
                    <div className="p-1">
                      <img
                        src={m2}
                        alt="Image4"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div>
                    <div className="p-1">
                      <img
                        src={m3}
                        alt="Image5"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div>
                    <div className="p-1">
                      <img
                        src={m4}
                        alt="Image6"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div>
                    <div className="p-1">
                      <img
                        src={m5}
                        alt="Image2"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid border border-white mt-3" style={{ backgroundColor: "#fffffff3" }}>
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
      </div>)}
      </div>
    </>
  );
}
