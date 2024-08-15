import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
// import { gsap } from "gsap";
import Image1 from "../Images/CSB04295cover.jpg";
import Image2 from "../Images/RBG09088-Enhanced-NR.jpg";
import Image02 from "../Images/CSB00249weddingcover.jpg";
import Image03 from "../Images/CSB08335.jpg";
import { useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/Wedding.css";
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
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import snow1 from "../Images/CSB07582.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "../Images/studio37Logob.webp";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Riple } from "react-loading-indicators";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import audio from "../audio/camera-shutter-6305.mp3";

export default function Wedding() {
  const [hoverDirection, setHoverDirection] = useState('');
  const audioRef = useRef(null);

  const handleMouseEnter = (e) => {
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = e.currentTarget;
    const x = e.clientX - offsetLeft;
    const y = e.clientY - offsetTop;
    const xPercent = x / clientWidth;
    const yPercent = y / clientHeight;

    if (xPercent > 0.5 && yPercent < 0.5) setHoverDirection('in-top');
    // else if (xPercent >= 0.5 && yPercent < 0.5) setHoverDirection('in-right');
    // else if (xPercent < 0.5 && yPercent >= 0.5) setHoverDirection('in-left');
    else setHoverDirection('in-bottom');
  };
  const handleMouseLeave = (e) => {
    // const { clientWidth, clientHeight, offsetLeft, offsetTop } = e.currentTarget;
    // const x = e.clientX - offsetLeft;
    // const y = e.clientY - offsetTop;
    // const xPercent = x / clientWidth;
    // const yPercent = y / clientHeight;
  
    // let direction = '';
  
    // if (xPercent < 0.5 && yPercent < 0.5) {
    //   direction = 'out-top';
    // } else if (xPercent >= 0.5 && yPercent < 0.5) {
    //   direction = 'out-right';
    // } else if (xPercent < 0.5 && yPercent >= 0.5) {
    //   direction = 'out-left';
    // } else {
    //   direction = 'out-bottom';
    // }
  
    setHoverDirection('');
  };
  // const handleMouseLeave = () => {
  //   setHoverDirection('');
  // };


  const [loading, setLoading] = useState(true);
  const [loadTime, setLoadTime] = useState(0); // State for page load time
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  const settings01 = {
    dots: false,
    fade: true,
    autoplay: true,
    arrows: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handlesocialClick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior

    const url = event.currentTarget.href; // Safely get the href attribute from the currentTarget
    setTimeout(() => {
      // window.location.href = url; // Navigate to the URL after the delay
      window.open(url, '_blank');
    }, 500); // 1000ms = 1 second
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
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
          slidesToScroll: 1,
          initialSlide: 2,
          speed: 500,
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
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2900,
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
    }, 3000); // 5 seconds

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


  return (
    <>
          <audio ref={audioRef} src={audio} type="audio/mp3" />

      <style>{styl}</style>
      <div>
        {loading ? (
          <div className="container-fluid mt-5 border border-white m-0 p-0">
            <div className="container-fluid mt-1 m-0 p-0 border border-white">
              <div className="mt-4 mt-md-4 mx-auto border border-white m-0 p-0">
                <Skeleton className="skltn border border-white m-0 p-0 " />
              </div>
            </div>

            <div className="container-fluid mt-5 m-0 p-0">
              <Skeleton count={1}></Skeleton>
            </div>

            <div className="mt-3 border border-white">
              <div className="container-fluid mt-0 mt-lg-2">
                <div className="row border border-white">
                  <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center">
                    <div className="card col-12 col-lg-6  border border-light rounded bg-light shadow-sm m-0 p-0 mt-lg-3">
                      <div>
                        <Skeleton className="skltn2 border border-white m-0 p-0 " />
                      </div>
                    </div>

                    <div className="card col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3">
                      <div>
                        <Skeleton className="skltn2 border border-white m-0 p-0 " />
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid mt-5 m-0 p-0">
              <Skeleton count={1}></Skeleton>
            </div>

            <div className="container-fluid mt-3">
              <div className="row  border border-light bg-light shadow rounded shadow m-0 p-0">
                <div className="col-12 m-0 p-0">
                  <Skeleton className="skltn3 border border-white m-0 p-0 " />
                </div>
              </div>
            </div>

            <div className="container-fluid mt-5 m-0 p-0">
              <Skeleton count={1}></Skeleton>
            </div>

            <div className="container mt-3">
              <div className="row border border-white m-0 p-0">
                <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center ">
                  <div className="card tw-skew-y-2 col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 p-1 border border-white rounded shadow-sm m-0 p-0 mt-md-0 mt-lg-3 ">
                    <div>
                    <Skeleton className="skltn4 border border-white m-0 p-0 " />
                    </div>
                  </div>

                  <div className="card tw-skew-y-1 col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4  p-1 border border-white rounded  shadow-sm m-0 p-0 ms-lg-3 mt-lg-3 mt-3 mt-md-0 ms-md-3 ms-xl-3 ms-xxl-3">
                    <div>
                    <Skeleton className="skltn4 border border-white m-0 p-0 " />
                    </div>
                  </div>

                  <div className="card tw-skew-y-2 col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded  shadow-sm m-0 p-0 ms-lg-3 mt-lg-3 mt-3 mt-md-0 ms-md-3 ms-xl-3 ms-xxl-3 p-1">
                    <div>
                    <Skeleton className="skltn4 border border-white m-0 p-0 " />

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid mt-5 m-0 p-0">
              <Skeleton count={1}></Skeleton>
            </div>
            
            <div className="container-fluid mt-3 ">
            <div className="row border border-light bg-light shadow rounded shadow mt-3 ">
                    <div className="col-12 m-auto">
                    <Skeleton className="skltn5 border border-white m-0 p-0 " />
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
                        />{" "}
                      </div>
                      <div>
                        <img
                          src={Image02}
                          alt="Image02"
                          className="img-fluid border border-light rounded slider-image"
                        />{" "}
                      </div>
                      <div>
                        <img
                          src={Image03}
                          alt="Image03"
                          className="img-fluid border border-light rounded slider-image"
                        />{" "}
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>

              <div className="container mt-3">
                <div className="row">
                  <div className="col col-12 text-center">
                    <p className="fs-2 fw-bolder mt-3">
                   
                      Enrich Wedding Beauty
                    </p>
                  </div>
                </div>
              </div>

              <div className=" border border-white">
                <div className="container-fluid mt-0 ">
                  

                  <div className="row border border-white">
                  <div className="d-flex flex-column flex-sm-column flex-md-column flex-lg-row justify-content-center">
        <div 
          className={`card col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 mt-lg-3 hover-image-container ${hoverDirection}`} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={m6}
            alt="m6 image"
            className="img-fluid m-0 p-0 p-2 border border-light rounded-3 default-img"
          />
          <img
            src={m9}
            alt="hover m9 image"
            className="img-fluid m-0 p-0 p-2 border border-light rounded-3 hover-img"
          />
        </div>
        <div 
          className={`card col-12 col-lg-6 border border-light rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3 hover-image-container ${hoverDirection}`} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={m8}
            alt="m8 image"
            className="img-fluid m-0 p-0 p-2 border border-light rounded default-img"
          />
          <img
            src={m10}
            alt="hover m10 image"
            className="img-fluid m-0 p-0 p-2 border border-light rounded hover-img"
          />
        </div>
      </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 mt-lg-5 border border-white">
                <div className="container-fluid mt-2 mt-lg-5">
                  
                  <div
                    className={`row slide-in-left  ${
                      hasViewed.myElement ? "animate-slide-in" : ""
                    }`}
                    ref={myRef}
                  >
                    <div className="col-12">
                      <p className="text-dark fw-bold fs-2">
                        Moments That Everlastingly Reveal Your Love
                      </p>
                    </div>
                  </div>
                  <div className="row  border border-light bg-light shadow rounded shadow mt-3">
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
                      <p className="text-dark fw-bold fs-2">
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

                  <div className="row border border-white ">
                    <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                      <div className="card tw-skew-y-2 col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 p-1 border border-white rounded shadow-sm m-0 p-0 mt-lg-3 mt-md-0">
                        <div
                          className="hover-image-container01 m-auto"
                          style={{ width: "97%" }}
                          
                        >
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

                      <div className="card tw-skew-y-1 col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4  p-1 border border-white rounded  shadow-sm m-0 p-0 ms-lg-3 mt-lg-3 mt-3 mt-md-0 ms-md-3 ms-xl-3 ms-xxl-3">
                        <div
                          className="hover-image-container01 m-auto"
                          style={{ width: "97%" }}
                        >
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
                        <div
                          className="hover-image-container01 m-auto"
                          style={{ width: "98%" }}
                        >
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
                      <p className="text-dark fw-bold fs-2">
                        We Bring Extra Sparkle To Your Wedding
                      </p>
                    </div>
                  </div>
                  <div
                    className={`row   bg-light border border-light rounded shadow slide-in-left mt-3  ${
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
                    <p className="h5 text-start fw-bold beat-animation">Contact Us</p>
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
                    <p className="text-start h5 mt-3 fw-bold text-md-center ms-md-3 ms-xxl-4 beat-animation" >
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