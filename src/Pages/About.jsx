import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Camera from "../Images/team5.jpg";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";
import "../App.css";
import "../styles/About.css";
import { OrbitProgress, Riple } from "react-loading-indicators";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import { Button, CardBody } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../Images/CSB02676-Edited.jpg";
import Image2 from "../Images/CSB02922-Edit.jpg";
import Image5 from "../Images/RBG09197-Enhanced-NR-Edited.jpg";
import Image4 from "../Images/DSC03385-Edit.jpg";
import Image3 from "../Images/CSB08391-Edited.jpg";
import r1 from "../Images/review1.png";
import r2 from "../Images/r2.png";
import r3 from "../Images/r3.png";
import r4 from "../Images/r4.png";
import r5 from "../Images/r5.png";
import RainImage from "../Images/CSB09588.jpg";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import Logo from "../Images/studio37Logob.webp";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Rating } from "react-simple-star-rating";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function About() {
  const [loading, setLoading] = useState(true);
  const [loadTime, setLoadTime] = useState(0); // State for page load time

  const styl = `img, svg, video, canvas, audio, iframe, embed, object {
    display: inline;
    vertical-align: middle;
}`;
  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const getThreshold = () => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      return 0.05; // Small devices
    }
    return 0.15; // Medium and larger devices
  };
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  const [threshold, setThreshold] = useState(getThreshold());

  useEffect(() => {
    const handleResize = () => {
      setThreshold(getThreshold());
    };

    // window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResize, { passive: true });

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [hasViewed, setHasViewed] = useState({
    myElement: false,
    secondElement: false,
    thirdElement: false,
    fourthElement: false,
    fifthElement: false,
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
  console.log("myThirdElement is visible:", myThirdElementIsVisible);

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
  const imageRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    if (mySecondElementIsVisible) {
      const t1 = gsap.timeline();
      t1.from(imageRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.5,
      });
      textRefs.current.forEach((el, index) => {
        t1.from(el, {
          opacity: 0,
          y: 50,
          duration: 0.5,
        });
      });
    }
  }, [mySecondElementIsVisible]);

  const handlesocialClick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior

    const url = event.currentTarget.href; // Safely get the href attribute from the currentTarget
    setTimeout(() => {
      // window.location.href = url; // Navigate to the URL after the delay
      window.open(url, '_blank');
    }, 300); // 1000ms = 1 second
  };

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
  };
  // const settings01 = {
  //   dots: false,
  //   infinite: true,
  //   speed: 7000,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  //   autoplay: true,
  //   arrows: false,
  //   autoplaySpeed: 7000,
  //   cssEase: "linear",

  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: false,
  //       },
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  const settings01 = {
    dots: false,
    infinite: true,
    speed: 300, // Faster transition speed for manual slides
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000, // Slower speed for autoplay
    cssEase: "linear",
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          speed: 300, // Maintain the faster speed for manual slides
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          speed: 300, // Maintain the faster speed for manual slides
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 300, // Maintain the faster speed for manual slides
        },
      },
    ],
  };
  

  return (
    <div>
      {loading ? (
        <div className="container-fluid mt-5 border border-white">
          <div className="container-fluid mt-1 m-0 p-0 border border-white">
            <div className="mt-4 mt-md-4 mx-auto border border-white m-0 p-0">
              <Skeleton className="skeleton border border-white m-0 p-0 " />
            </div>
          </div>

          <div className="container-fluid mt-5">
            <Skeleton count={1}></Skeleton>
          </div>

          <div className="container mt-3">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6">
                <Skeleton className="skeletonrow2 border border-white m-0 p-0 " />
              </div>
              <div className="col-12 col-xl-6">
                <div className="border border-white m-0 p-0 mt-2">
                  <Skeleton count={12}></Skeleton>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mt-5">
            <Skeleton count={1}></Skeleton>
          </div>

          <div className="container-fluid mt-3 ">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className=" skeletonrowcol3 border border-white m-0 p-0 mt-3 mt-lg-5">
                  <Skeleton circle={true} height={50} width={50} />

                  <Skeleton count={3}></Skeleton>
                </div>
              </div>
              <div className="col-4 col-md-6 col-lg-4 d-none d-md-inline-block d-lg-inline-block">
                <div className=" skeletonrowcol3 border border-white m-0 p-0 mt-3 mt-lg-5">
                  <Skeleton circle={true} height={50} width={50} />

                  <Skeleton count={3}></Skeleton>
                </div>
              </div>
              <div className="col-4 col-lg-4 d-none d-md-none d-lg-inline-block">
                <div className=" skeletonrowcol3 border border-white m-0 p-0 mt-3 mt-lg-5">
                  <Skeleton circle={true} height={50} width={50} />

                  <Skeleton count={3}></Skeleton>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid mt-5">
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

          <div className="container-fluid border border-white mt-3 ">
            <div className="row">
              <div className="col-4 col-lg-1 text-start m-0 p-0 ">
                <Skeleton className="w-50 h-100 ms-3 mb-2 m-0 p-0 "></Skeleton>
              </div>
              <div className="col-8 col-lg-11 text-end m-0 p-0 mt-2 pe-1 d-flex justify-content-end align-items-center">
                <span className="ms-1 me-1 me-md-2 me-lg-3 brand-image m-auto ">
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
        <div className="mt-5 border border-light m-0 p-0 bg-light">
          <style>{styl}</style>

          <Container
            fluid
            className="container-fluid m-0 p-0 mt-1 border border-light"
          >
            <div className="container-fluid m-0 p-0 mt-4 border border-light">
              <Slider {...settings}>
                <div>
                  <LazyLoadImage
                    src={Image1}
                    alt="Image1"
                    className="img-fluid border  rounded-3 slider-image"
                    effect="blur"
                  />{" "}
                </div>
                <div>
                  <LazyLoadImage
                    src={Image2}
                    alt="Image2"
                    className="img-fluid border  rounded-3 slider-image"
                    effect="blur"
                  />{" "}
                </div>
                <div>
                  <LazyLoadImage
                    src={Image3}
                    alt="Image3"
                    className="img-fluid border  rounded-3 slider-image"
                    effect="blur"
                  />{" "}
                </div>
                <div>
                  <LazyLoadImage
                    src={Image4}
                    alt="Image4"
                    className="img-fluid border  rounded-3 slider-image"
                    effect="blur"
                  />{" "}
                </div>
              </Slider>
            </div>
            <div className="container mt-4 border border-light">
              <div className="row m-0 p-0">
                <div className="col col-12 text-center m-0 p-0">
                  <p className="fs-2 fw-bolder mt-3">
                    Why Pick Studio37?
                  </p>
                </div>
              </div>
            </div>
            <div className="container mt-3 p-0 card1">
              <div className="row bg-light shadow border border-light rounded m-0 p-0">
                <div className="col-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6 m-0 p-3 ">
                  <img
                    src={Camera}
                    alt="Camera"
                    className="img-fluid border border-light rounded mt-lg-4 mt-xl-4 mt-xxl-4"
                  />
                </div>

                <div
                  className={`col-12 col-xl-6 m-0 p-0 text-center text-xl-start slide-in-left ${
                    hasViewed.myElement ? "animate-slide-in" : ""
                  }`}
                  ref={myRef}
                >
                  <p className="mt-2 h4 lh-base fs-4 fw-bold text-dark text-center m-auto">
                    Our Distinctive Vision
                  </p>

                  <p className="mt-2 lh-base fs-6 text-dark">
                    At <span className="fw-bold">Studio37Wedding</span>, we
                    capture the essence of your unique story to create
                    unforgettable memories.
                  </p>

                  <ul className="bullet-list mt-3 fs-6 text-dark">
                    <li>
                      <span>
                        <span className="fw-bold">
                          Immortalizing genuine moments{" "}
                        </span>{" "}
                        that define your journey.
                      </span>
                    </li>
                    <li>
                      <span>
                        <span className="fw-bold">
                          Focusing on authentic connections{" "}
                        </span>{" "}
                        rather than posed shots.
                      </span>
                    </li>
                    <li>
                      <span>
                        Guiding you into spontaneous,{" "}
                        <span className="fw-bold">heartfelt interactions</span>.
                      </span>
                    </li>
                    <li>
                      <span>
                        Delivering images that reflect{" "}
                        <span className="fw-bold">your true self</span> and
                        personality.
                      </span>
                    </li>
                    <li>
                      <span>
                        Providing a photography experience{" "}
                        <span className="fw-bold">
                          that exceeds your expectations.
                        </span>
                      </span>
                    </li>
                  </ul>

                  <p className="mt-2 lh-base fs-6 text-dark">
                    <span>
                      Join us to transform your precious moments into{" "}
                      <span className="fw-bold">timeless works of art.</span>
                    </span>
                  </p>

                  <p className="mt-3 lh-base fs-6 text-dark">
                    <span>
                      Let’s create{" "}
                      <span className="fw-bold">stunning visuals</span> that
                      you’ll treasure forever.
                    </span>
                  </p>
                </div>
              </div>
            </div>

           

            <div className="container-fluid m-0 p-0 mt-5 ">
              <div className="row m-0 p-0">
                <div className="col-12">
                  <p className="mt-2 h5 text-dark lh-base fs-3 fw-bold">
                    Client Testimonials
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`container-fluid m-0 p-0 mt-1 pt-lg- pt-md-1 slide-in-left border border-light   ${
                hasViewed.secondElement ? "animate-slide-in" : ""
              }`}
              ref={myRef2}
            >
              <div className="row m-0 p-0 ">
                <div className="col-12  m-auto border border-light">
                  <Slider {...settings01} className="border border-light">
                    <div className="p-1 review">
                      <div className="card border border-light p-2 ">
                        <div className="w-50 m-0 p-0 m-auto border border-white ">
                          <img
                            src={r1}
                            className="img-fluid m-0 p-0 m-auto "
                            alt="r1"
                          />
                        </div>

                        <div className="card-body">
                          <h5 className="card-title">Kiruthika Kandasamy</h5>
                          <div>
                            <Rating
                              initialValue={5}
                              readonly={true} // Set to true if you don't want users to change the rating
                              size={25} // Adjust the size of the stars
                              allowFraction={true} // Allow partial star ratings
                            />
                          </div>
                        
                          <div className="mt-2">
                            <a
                              href="https://g.co/kgs/kWhi2QV"
                              style={{ textDecoration: "none" }}
                            >
                              view review
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-1 review">
                      <div className="card border border-light p-2">
                        <div className="w-50 m-0 p-0 m-auto border border-white">
                          <img
                            src={r2}
                            className="img-fluid m-0 p-0 m-auto "
                            alt=""
                          />
                        </div>
                        <div className="card-body">
                          <h5 className="card-title">aseebaa aseebaa</h5>
                          <div>
                            <Rating
                              initialValue={5}
                              readonly={true} // Set to true if you don't want users to change the rating
                              size={25} // Adjust the size of the stars
                              allowFraction={true} // Allow partial star ratings
                            />
                          </div>
                         

                          <div className="mt-2">
                            <a
                              href="https://g.co/kgs/VMCZwtf"
                              style={{ textDecoration: "none" }}
                            >
                              view review
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-1 review">
                      <div className="card border border-light p-2">
                        <div className="w-50 m-0 p-0 m-auto border border-white">
                          <img
                            src={r3}
                            className="img-fluid m-0 p-0 m-auto "
                            alt=""
                          />
                        </div>
                        <div className="card-body border border-white">
                          <h5 className="card-title">Ajith Kumar</h5>
                          <div>
                            <Rating
                              initialValue={5}
                              readonly={true} // Set to true if you don't want users to change the rating
                              size={25} // Adjust the size of the stars
                              allowFraction={true} // Allow partial star ratings
                            />
                          </div>
                    

                          <div className="mt-2">
                            <a
                              href="https://g.co/kgs/Pv7fLb5"
                              style={{ textDecoration: "none" }}
                            >
                              view review
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-1 review">
                      <div className="card border border-light p-2">
                        <div className="w-50 m-0 p-0 m-auto border border-white">
                          <img
                            src={r4}
                            className="img-fluid m-0 p-0 m-auto "
                            alt="r4"
                          />
                        </div>
                        <div className="card-body border border-white">
                          <h5 className="card-title">smitha prakash</h5>
                          <div>
                            <Rating
                              initialValue={5}
                              readonly={true} // Set to true if you don't want users to change the rating
                              size={25} // Adjust the size of the stars
                              allowFraction={true} // Allow partial star ratings
                            />
                          </div>
                        

                          <div className="mt-2">
                            <a
                              href="https://g.co/kgs/EUjfPav"
                              style={{ textDecoration: "none" }}
                            >
                              view review
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-1 review">
                      <div className="card border border-light p-2">
                        <div className="w-50 m-0 p-0 m-auto border border-white">
                          <img
                            src={r5}
                            className="img-fluid m-0 p-0 m-auto "
                            alt="r5"
                          />
                        </div>
                        <div className="card-body border border-white">
                          <h5 className="card-title">kanimozhi kanimozhi</h5>
                          <div>
                            <Rating
                              initialValue={5}
                              readonly={true} // Set to true if you don't want users to change the rating
                              size={25} // Adjust the size of the stars
                              allowFraction={true} // Allow partial star ratings
                            />
                          </div>
                        

                          <div className="mt-2">
                            <a
                              href="https://g.co/kgs/wnZTifR"
                              style={{ textDecoration: "none" }}
                            >
                              view review
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>

            <div className="border border-light">
              <div className="container mt-5">
                <div className="row">
                  <div className="col-12">
                    <p className="fw-bold fs-2">
                      Reach us
                    </p>
                  </div>
                </div>
                <div className="row m-0 p-0">
                  <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                    <div
                      className={`card m-0 p-0 p-1 col col-12 col-md-5 col-lg-5 border border-2 border-light slide-in-left ${
                        hasViewed.fourthElement ? "animate-slide-in" : ""
                      }`}
                      ref={FourthRef}
                    >
                     
                      <img src={Logo} alt="Logo" className="img-fluid" />
                      <CardBody>
                        <p
                          className="text-decoration-underline fs-3 fw-bold "
                        >
                          Contact
                        </p>
                        <p>
                          <span>
                            <FontAwesomeIcon icon={faPhone} className="me-2" />
                          </span>
                          <span className="fw-bold">
                            7502584493 / 7200889433
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
                    <span className="ms-1 me-1 me-md-2 me-lg-3 brand-image m-auto logodiv">
                      <a
                        href="https://wa.me/917502584493"
                        className="text-dark "
                        onClick={handlesocialClick}

                      >
                        <FontAwesomeIcon
                          icon={faWhatsapp}
                          size="xl"
                          className="p-1 social-image  Whatslogo"
                          onClick={handlesocialClick}

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

                    <span className="ms-1 me-md-2 me-lg-3 brand-image logodiv ">
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
          </Container>
        </div>
      )}
    </div>
  );
}
