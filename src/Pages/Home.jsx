// import React from "react";
// import Slider from "react-slick";
// import Carousel from "react-bootstrap/Carousel";
// import Logo from "../Images/Logo.jpg";
// import Marriagephoto1 from "../Images/RBG09197-Enhanced-NR-Edit.jpg";
// import Marriagephoto2 from "../Images/CSB02676.jpg";
// import Babyphoto from "../Images/CSB00717.jpg";
// import Marriagephoto3 from "../Images/CSB04295.jpg";
// import Marriagephoto4 from "../Images/Marriagephoto4.jpg";
// import Marriagephoto6 from "../Images/Marriagephoto6.jpg";
// import Marriagephoto02 from "../Images/Marriagephoto2.jpg";
// import Marriagephoto7 from "../Images/CSB08046.jpg";
// import Marriagephoto8 from "../Images/RBG09890-Enhanced-NR.jpg";
// import Marriagephoto9 from "../Images/16CSB01666.jpg";
// import Family1 from "../Images/CSB09196.jpg";
// import Family2 from "../Images/CSB05130.jpg";
// import Family3 from "../Images/RBG09768.jpg";
// import Card from "react-bootstrap/Card";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/esm/Container";
// import "../App.css";

import React from "react";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Logo from "../Images/Logo.jpg";
import myLogo from "../Images/myLogo.jpg";

import vcard from "../Images/vcard.jpg";
import Marriagephoto1 from "../Images/RBG09197-Enhanced-NR-Edit.jpg";
import Marriagephoto2 from "../Images/CSB02676.jpg";
import Babyphoto from "../Images/CSB00717.jpg";
import Marriagephoto3 from "../Images/CSB04295.jpg";
import Marriagephoto4 from "../Images/Marriagephoto4.jpg";
import Marriagephoto6 from "../Images/Marriagephoto6.jpg";
import Marriagephoto02 from "../Images/Marriagephoto2.jpg";
import Marriagephoto7 from "../Images/CSB08046.jpg";
import Marriagephoto8 from "../Images/RBG09890-Enhanced-NR.jpg";
import Marriagephoto9 from "../Images/16CSB01666.jpg";
import Family1 from "../Images/CSB09196.jpg";
import Family2 from "../Images/CSB05130.jpg";
import Family3 from "../Images/RBG09768.jpg";
import Baby1 from "../Images/BabyPhoto1.jpg";
import Baby3 from "../Images/CSB09148.jpg";
import Card from "react-bootstrap/Card";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import "../App.css";
import { Button, CardBody } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Image1 from "../Images/CSB02676-Edited.jpg";
import Image2 from "../Images/CSB02922-Edit.jpg";
import Image5 from "../Images/RBG09197-Enhanced-NR-Edited.jpg";
import Image4 from "../Images/DSC03385-Edit.jpg";
import Image3 from "../Images/CSB08391-Edited.jpg";
import Meternity1 from "../Images/meta01.jpg";
import Wedding from "../Images/wedding.jpg";
import Wedding1 from "../Images/wedding01.jpg";

export default function CarouselFade() {
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "5px",
  //   slidesToShow: 3,
  //   speed: 500,
  //   autoplay: true, // Enable autoplay
  //   autoplaySpeed: 2000,
  // };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "5px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
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

  const { ref: secondRef, inView: secondElementIsVisible } = useInView({
    threshold,
  });

  console.log("secondElementIsVisible is visible:", secondElementIsVisible);

  const { ref: ThirdRef, inView: ThirdElementIsVisible } = useInView({
    threshold,
  });

  console.log("ThirdElementIsVisible is visible:", ThirdElementIsVisible);

  const { ref: FourthRef, inView: FourthElementIsVisible } = useInView({
    threshold,
  });

  console.log("FourthElementIsVisible is visible:", FourthElementIsVisible);

  const { ref: FifthRef, inView: FifthElementIsVisible } = useInView({
    threshold,
  });

  console.log("FifthElementIsVisible is visible:", FifthElementIsVisible);

  //   // const { ref: myRef, inView: myElementIsVisible,} = useInView({
  //   //   threshold: 0.2, // Trigger animation when 50% of the element is in view
  //   // });
  //   // console.log("Element is visible:", myElementIsVisible);

  //   //  const { ref: secondRef, inView: secondElementIsVisible, } = useInView({
  //   //   threshold: 0.5, // Trigger animation when 50% of the element is in view
  //   // });
  //   // console.log("secondElementIsVisible is visible:", secondElementIsVisible);

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
      <style>{styl}</style>
      <Container fluid className="container-fluid m-0 p-0">
        <Carousel fade data-bs-theme="light" interval={3000} indicators={false}>
          <Carousel.Item>
            <LazyLoadImage
              src={Image1}
              alt="Image1"
              className="img-fluid"
              style={{ width: "100%", height: "20%" }}
              effect="blur"
            />
          </Carousel.Item>
          <Carousel.Item>
            <LazyLoadImage
              src={Image2}
              alt="Image2"
              className="img-fluid"
              style={{ width: "100%" }}
              effect="blur"
            />
          </Carousel.Item>
          <Carousel.Item>
            <LazyLoadImage
              src={Image3}
              alt="Image3"
              className="img-fluid"
              style={{ width: "100%" }}
              effect="blur"
            />
          </Carousel.Item>

          <Carousel.Item>
            <LazyLoadImage
              src={Image4}
              alt="Image4"
              className="img-fluid"
              style={{ width: "100%" }}
              effect="blur"
            />
          </Carousel.Item>
        </Carousel>

        <div className="container-fluid justify-content-center align-items-center mt-2 ">
          <div className="row">
            <div className="col-12 text-center">
              <p className="fs-2 fw-bolder mt-3">
                <span className="border border-left border-dark rounded-start border-3 me-1 fs-2"></span>
                Home
              </p>
              <p
                className="text-dark fw-bold fs-2"
                style={{ fontFamily: "Arial" }}
              >
                STUDIO37WEDDING
              </p>
            </div>
            <div className="row container m-0 p-0">
              <div className="col-12 col-md-12 col-lg-4 mt-0 p-0">
                <p>
                  <img
                    src={Logo}
                    alt="Logo"
                    className="img-fluid ms-0"
                    style={{ width: "100%" }}
                  />
                </p>
              </div>
              {/* <div className="card col-11 col-md-11 col-lg-7 mt-0 bg-dark ms-3 "> */}
              <div
                className={`card col-11 col-md-11 col-lg-7 mt-0 bg-light ms-3 ms-md-4 shadow slide-in-left border border-light ${
                  myElementIsVisible ? "animate-slide-in" : ""
                }`}
                ref={myRef}
              >
                <p className="mt-2 h4 text-dark lh-base fs-3 fw-bold">
                  Did we just become best friends?
                </p>
                <p className="mt-2 lh-base fs-5 text-dark text">
                  Once we start working together, I’ll learn how I can best
                  tailor your individual needs through listening to your love
                  story.
                </p>
                <p className="lh-base fs-5 text-dark text">
                  I’ll be consistently communicating with you until our day
                  together to make sure all is going to plan, and offer my
                  assistance whenever necessary.
                </p>
                <p className="lh-base fs-5 text-dark text">
                  My aim is to make sure you never feel lost or stressed
                  throughout this process - wedding planning can be a blast, and
                  I’m here to help! If you’re still feeling lost about your
                  plans - don’t fret! I can help you navigate all of that. Let's
                  Talk!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-12 ">
              <p className="fw-bold fs-2" style={{ fontFamily: "Arial" }}>
                Capturing Your Love Story
              </p>
              {/* <p className="text-center m-0 p-0">At STUDIO 37, we believe that your wedding day is a unique story waiting to be told. With a focus on authentic moments and genuine emotions, we aim to capture the essence of your love and the joy of your celebration. From the smallest details to the grandest gestures, every image is a piece of your story, beautifully preserved. Let's create timeless memories together, ensuring that you feel relaxed and natural in front of the camera, so your true connection shines through.</p> */}
            </div>
          </div>
          <div className="row">
            {/* <div className="col-12 col-md-4">
            <img
            src={Marriagephoto4}
            alt="Marriagephoto4"
            className="img-fluid"
          />
            </div>
            <div className="col-12 col-md-4">
            <img
            src={Marriagephoto7}
            alt="Marriagephoto7"
            className="img-fluid"
          />
            </div>
            <div className="col-12 col-md-4 ">
            <img
            src={Marriagephoto02}
            alt="Marriagephoto2"
            className="img-fluid"
          />
            </div> */}
            {/* <div className="col-9 col-md-11 col-lg-11 ms-5 ms-md-4 m-0 p-0 border border-2 border-dark rounded ms-lg-5 ms-md-3 bg-light"> */}

            <div
              className={`col-9 col-md-11 col-lg-11 ms-5 ms-md-4 m-0 p-0 border border-2 border-light rounded ms-lg-5 ms-md-3 bg-light shadow slide-in-left ${
                ThirdElementIsVisible ? "animate-slide-in" : ""
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
                    className="img-fluid p-md-3 p-1"
                  />
                </div>
                <div>
                  <img
                    src={Marriagephoto8}
                    alt="Marriagephoto8"
                    className="img-fluid p-md-3 p-1"
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

        {/* <div className="container mt-5 "> */}
        {/* <div className="container mt-5 "> */}

        {/* <div
          className={`container-fluid bg-light border border-light shadow-sm mt-5 slide-in-left  ${
            secondElementIsVisible ? "animate-slide-in" : ""
          }`}
          ref={secondRef}
        > */}
           <div className="container-fluid mt-5 bg-light shadow-sm">
          {/* <div className="row text-center"> */}
          <div
          className={`row slide-in-left  ${
            secondElementIsVisible ? "animate-slide-in" : ""
          }`}
          ref={secondRef}
        >
            <div className="col-12 col-md-12 mt-2 text-center">
              <p className="fw-bold fs-2 text-center" style={{ fontFamily: "Arial" }}>
              Experience our photographic excellence              </p>
            </div>
          </div>

          <div className="row">
            <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
              <div className="card shadow-sm border border-light col-11 col-md-4 col-lg-4 ms-1 mt-2">
                <img
                  src={Family1}
                  alt="Familyphoto"
                  className="img-fluid  p-2 family-image"
                  style={{ width: "100%" }}
                />
                <div className=" text-center ms-2 p-1">
                  <Button variant="light" className="family-imagebutton">
                    {" "}
                    <span>Explore More</span>
                    {/* <span className="ms-2">
                      <FontAwesomeIcon icon={faCircleArrowRight} />
                    </span> */}
                  </Button>
                </div>
              </div>
              <div className="ms-1 card shadow-sm border border-light col-11 col-md-4 col-lg-4 ms-1 mt-2">
                <img
                  src={Wedding}
                  alt="Wedding Photo"
                  className="img-fluid p-2 family-image"
                  style={{ width: "100%" }}
                />
                <div className=" text-center ms-2 p-1">
                  <Button variant="light" className="family-imagebutton">
                    {" "}
                    <span>Explore More</span>
                    {/* <span className="ms-2">
                      <FontAwesomeIcon icon={faCircleArrowRight} />
                    </span> */}
                  </Button>
                </div>
              </div>
              <div className="ms-1 card shadow-sm border border-light col-11 col-md-4 col-lg-4 ms-1 mt-2">
                <img
                  src={Meternity1}
                  alt="Maternity Photo"
                  className="img-fluid family-image p-2"
                  style={{ width: "100%" }}
                />
                <div className=" text-center ms-2 p-1">
                  <Button variant="light" className="family-imagebutton">
                    {" "}
                    <span>Explore More</span>
                    {/* <span className="ms-2">
                      <FontAwesomeIcon icon={faCircleArrowRight} />
                    </span> */}
                  </Button>
                </div>
              </div>
            </div>
            {/* <div className="col-11 col-md-11 col-lg-11 col-xl-11 mt-0 ms-3 bg-dark card border border-dark mt-1  fst-italic">
              <p className="mt-2 h4 lh-lg fs-5 text-white">
                <b>Celebrating Every Memory</b>
              </p>
              <p className="mt-2 h4 lh-lg fs-5 text-white">
                Family is everything, and capturing the special moments you
                share is my passion.
              </p>
              <p className="mt-2 h4 lh-lg fs-5 text-white">
                Whether it's a family reunion, a day at the park, or a cozy
                session at home, I aim to create images that reflect the love,
                joy, and connection within your family.
              </p>
              <p className="mt-2 h4 lh-lg fs-5 text-white">
                Every family is unique, and I tailor each session to fit your
                specific needs and preferences.
              </p>
            </div> */}
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <p className="fw-bold fs-2" style={{ fontFamily: "Arial" }}>
                Reach us
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className={`card m-0 p-0 p-1 col col-12 col-md-5 col-lg-5 border border-2 border-light slide-in-left ${
                FourthElementIsVisible ? "animate-slide-in" : ""
              }`}
              ref={FourthRef}
            >
              {/* <div className="card m-0 p-0 col col-12 col-md-5 col-lg-5 border border-2 border-light"> */}
              <img src={Logo} alt="Logo" className="img-fluid" />
              <CardBody>
                <p className="text-decoration-underline fs-3 fw-bold " style={{ fontFamily: "Arial" }}>Contact</p>
                <p>
                  <span>
                <FontAwesomeIcon icon={faPhone} className="me-2"/>
                </span>
                <span className="fw-bold">
               7200889433 / 7502584493
               </span>
               </p>
               
              

              </CardBody>

            </div>

            <div
              className={`card shadow-sm m-0 p-0 p-1 ms-lg-3 ms-md-3 col col-12 col-md-6 col-lg-6 mt-2 mt-lg-0 mt-md-0 mt-xl-0 mt-xxl-0 border border-2 border-light slide-in-left ${
                FourthElementIsVisible ? "animate-slide-in" : ""
              }`}
              ref={FourthRef}
            >
              {/* <div className="card m-0 p-0 ms-lg-3 ms-md-3 col col-12 col-md-6 col-lg-6 mt-2 mt-lg-0 mt-md-0 mt-xl-0 mt-xxl-0 border border-2 border-light"> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15666.130655490444!2d76.9913408!3d10.9986043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85722a5eb8683%3A0xf444aae1ff2689e5!2sSTUDIO37wedding!5e0!3m2!1sen!2sin!4v1719825723479!5m2!1sen!2sin"
                className="w-100 h-100"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="container-fluid border border-light mt-3 bg-light ">
          {/* <div className="row"> */}
          <div
              className={`row slide-in-left ${
                FifthElementIsVisible ? "animate-slide-in" : ""
              }`}
              ref={FifthRef}
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
                <a
                  href="https://x.com/studio37wedding"
                  className="text-dark "
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    
                    className="mt-3"
                  />
                </a>
              </span>
              <span className="me-md-2 me-lg-3 ">
                <a
                  href="https://www.instagram.com/studio37wedding/"
                  className="text-dark "
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    
                    className="mt-3"
                  />
                </a>
              </span>
              <span className="ms-1 me-md-2 me-lg-3 brand-image">
                <a
                  href="https://www.facebook.com/studio37wedding"
                  className="text-dark "
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    
                    className="mt-3 "
                  />
                </a>
              </span>

              <span className="ms-1 me-md-2 me-lg-3 brand-image">
                <a
                  href="https://www.youtube.com/results?search_query=studio37wedding"
                  className="text-dark "
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    
                    className="mt-3 "
                  />
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

// import React from "react";
// import Slider from "react-slick";
// import Carousel from "react-bootstrap/Carousel";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import Logo from "../Images/Logo.jpg";
// import Marriagephoto1 from "../Images/RBG09197-Enhanced-NR-Edit.jpg";
// import Marriagephoto2 from "../Images/CSB02676.jpg";
// import Babyphoto from "../Images/CSB00717.jpg";
// import Marriagephoto3 from "../Images/CSB04295.jpg";
// import Marriagephoto4 from "../Images/Marriagephoto4.jpg";
// import Marriagephoto6 from "../Images/Marriagephoto6.jpg";
// import Marriagephoto02 from "../Images/Marriagephoto2.jpg";
// import Marriagephoto7 from "../Images/CSB08046.jpg";
// import Marriagephoto8 from "../Images/RBG09890-Enhanced-NR.jpg";
// import Marriagephoto9 from "../Images/16CSB01666.jpg";
// import Family1 from "../Images/CSB09196.jpg";
// import Family2 from "../Images/CSB05130.jpg";
// import Family3 from "../Images/RBG09768.jpg";
// import Card from 'react-bootstrap/Card';
// import { useInView } from "react-intersection-observer";
// import { useRef, useEffect, useState } from "react";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/esm/Container";
// import "../App.css";

// export default function CarouselFade() {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "5px",
//     slidesToShow: 3,
//     speed: 500,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots:false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]

//   };

//   const getThreshold = () => {
//     if (window.matchMedia('(max-width: 767px)').matches) {
//       return 0.2; // Small devices
//     }
//     return 0.35; // Medium and larger devices
//   };

//   const [threshold, setThreshold] = useState(getThreshold());

//   useEffect(() => {
//     const handleResize = () => {
//       setThreshold(getThreshold());
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const { ref: myRef, inView: myElementIsVisible } = useInView({
//     threshold,
//   });
//     console.log("Element is visible:", myElementIsVisible);

//   const { ref: secondRef, inView: secondElementIsVisible } = useInView({
//     threshold,
//   });

//     console.log("secondElementIsVisible is visible:", secondElementIsVisible);

//   // const { ref: myRef, inView: myElementIsVisible,} = useInView({
//   //   threshold: 0.2, // Trigger animation when 50% of the element is in view
//   // });
//   // console.log("Element is visible:", myElementIsVisible);

//   //  const { ref: secondRef, inView: secondElementIsVisible, } = useInView({
//   //   threshold: 0.5, // Trigger animation when 50% of the element is in view
//   // });
//   // console.log("secondElementIsVisible is visible:", secondElementIsVisible);

//   // const { ref:myRef , inView :myElementIsVisible} = useInView({
//   //   threshold: 0.5,
//   // });

//   const styl=`.slick-prev:before, .slick-next:before {
//     font-family: 'slick';
//     font-size: 20px;
//     line-height: 1;
//     opacity: .75;
//     color: black;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
// }
//     .slick-slide img {
//       transition: transform 0.5s ease-in-out;
//     }

//     .slick-slide.slick-center img {
//         transform: scale(1.1);

//     }
//     .navbar-toggler {
//     padding: var(--bs-navbar-toggler-padding-y) var(--bs-navbar-toggler-padding-x);
//     font-size: var(--bs-navbar-toggler-font-size);
//     line-height: 1;
//     color: var(--bs-navbar-color);
//     background-color: #fff;
//     border: var(--bs-border-width) solid var(--bs-navbar-toggler-border-color);
//     border-radius: var(--bs-navbar-toggler-border-radius);
//     transition: var(--bs-navbar-toggler-transition);
// }

// `
//   return (
//     <>
//       <style>{styl}</style>
//       <Container fluid className="container-fluid m-0 p-0 pt-4">
//         <Carousel fade data-bs-theme="light" interval={3000} className="mt-5">
//           <Carousel.Item>
//             <LazyLoadImage
//               src={Marriagephoto3}
//               alt="Marriagephoto3"
//               className="img-fluid"
//               style={{ width: "100%", height: "20%" }}
//               effect="blur"
//             />
//           </Carousel.Item>
//           <Carousel.Item>
//             <LazyLoadImage
//               src={Marriagephoto1}
//               alt="Marriagephoto1"
//               className="img-fluid"
//               style={{ width: "100%" }}
//               effect="blur"
//             />
//           </Carousel.Item>
//           <Carousel.Item>
//             <LazyLoadImage
//               src={Babyphoto}
//               alt="Babyphoto"
//               className="img-fluid"
//               style={{ width: "100%" }}
//               effect="blur"
//             />
//           </Carousel.Item>
//           <Carousel.Item>
//             <LazyLoadImage
//               src={Marriagephoto2}
//               alt="Marriagephoto2"
//               className="img-fluid"
//               style={{ width: "100%" }}
//               effect="blur"
//             />
//           </Carousel.Item>
//         </Carousel>

//         <div className="container-fluid justify-content-center align-items-center mt-2">
//         <div className={`row slide-in-left ${myElementIsVisible ? 'animate-slide-in' : ''}`} ref={myRef}>
//             <div className="col-12 text-center">
//               <p className="fs-2 fw-bolder mt-3">
//                 <span className="border border-left border-dark rounded-start border-3 me-1"></span>
//                 Home
//               </p>
//               <p className="text-dark fw-bold fs-2" style={{ fontFamily: "Arial" }}>
//                 Welcome To <span className="text-danger">S</span>TUDIO 37
//               </p>
//             </div>
//             <div className="row container m-0 p-0 fst-italic">
//               <div className="col-12 col-md-12 col-lg-4 mt-0 p-0">
//                 <p>
//                   <LazyLoadImage
//                     src={Logo}
//                     alt="Logo"
//                     className="img-fluid ms-0"
//                     style={{ width: "100%" }}
//                     effect="blur"
//                   />
//                 </p>
//               </div>
//               <div className="col-11 col-md-11 col-lg-7 mt-0 bg-white border border-2 border-dark rounded ms-3 ">
//                 <p className="mt-2 h4  lh-lg fs-5 text-danger">
//                   Did we just become best friends?
//                 </p>
//                 <p className="mt-2 h4  lh-lg fs-5 text-dark">
//                   Once we start working together, I’ll learn how I can best tailor your individual needs through listening to your love story.
//                 </p>
//                 <p className="mt-2 h4  lh-lg fs-5 text-dark">
//                   I’ll be consistently communicating with you until our day together to make sure all is going to plan, and offer my assistance whenever necessary.
//                 </p>
//                 <p className="mt-2 h4  lh-lg fs-5 text-dark">
//                   My aim is to make sure you never feel lost or stressed throughout this process - wedding planning can be a blast, and I’m here to help! If you’re still feeling lost about your plans - don’t fret! I can help you navigate all of that. Let's Talk!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container mt-5">
//           <div className="row">
//             <div className="col-12 col-md-12 ">
//               <p className="h1">Capturing Your Love Story</p>
//             </div>
//           </div>
//           <div className="row border border-primary">
//             <div className="col-9 col-md-12 ms-5 ms-md-3 ms-lg-1 m-0 p-0">
//               <Slider {...settings}>
//                 <div>
//                   <LazyLoadImage
//                     src={Marriagephoto4}
//                     alt="Marriagephoto4"
//                     className="img-fluid p-md-3 p-lg-1 p-1"
//                     effect="blur"
//                   />
//                 </div>
//                 <div>
//                   <LazyLoadImage
//                     src={Marriagephoto7}
//                     alt="Marriagephoto7"
//                     className="img-fluid p-md-3 p-1"
//                     effect="blur"
//                   />
//                 </div>
//                 <div>
//                   <LazyLoadImage
//                     src={Marriagephoto02}
//                     alt="Marriagephoto2"
//                     className="img-fluid p-md-3 p-1"
//                     effect="blur"
//                   />
//                 </div>
//                 <div>
//                   <LazyLoadImage
//                     src={Marriagephoto8}
//                     alt="Marriagephoto8"
//                     className="img-fluid p-md-3 p-1"
//                     effect="blur"
//                   />
//                 </div>
//                 <div>
//                   <LazyLoadImage
//                     src={Marriagephoto9}
//                     alt="Marriagephoto9"
//                     className="img-fluid p-md-3 p-1"
//                     effect="blur"
//                   />
//                 </div>
//               </Slider>
//             </div>
//           </div>
//         </div>

//         <div className="container-fluid mt-5 m-0 p-0 ms-1">
//           <div className="row border border-danger m-0 p-0">
//             <div className="col-12 col-md-12 col-lg-11">
//               <p className="h1">Reflect Your Family's Heart</p>
//             </div>
//           </div>
//           <div className="row border border-primary">
//             <div className="col-10 col-md-11 col-lg-6 ms-3 ms-lg-1 m-0 p-0" style={{ display: "flex" }}>
//               <div>
//                 <LazyLoadImage
//                   src={Family1}
//                   alt="Familyphoto1"
//                   className="img-fluid mt-1 family-image"
//                   style={{ width: "95%" }}
//                   effect="blur"
//                 />
//               </div>
//               <div>
//                 <LazyLoadImage
//                   src={Family2}
//                   alt="Familyphoto2"
//                   className="img-fluid p-1 ms-1 family-image"
//                   style={{ width: "95%" }}
//                   effect="blur"
//                 />
//               </div>
//               <div className="ms-2">
//                 <LazyLoadImage
//                   src={Family3}
//                   alt="Familyphoto1"
//                   className="img-fluid family-image"
//                   effect="blur"
//                 />
//               </div>
//             </div>
//             <div className={`col-9 col-md-11 col-lg-5 mt-0 ms-3 bg-dark card border border-dark mt-1 slide-in-left fst-italic ${secondElementIsVisible ? 'animate-slide-in' : ''}`} ref={secondRef}>

//             {/* <div className="col-11 col-md-5 mt-0 ms-3 bg-dark card border border-dark mt-1 slide-in-left fst-italic"> */}
//               <p className="mt-2 h4 lh-lg fs-5 text-white">
//                 <b>Celebrating Every Memory</b>
//               </p>
//               <p className="mt-2 h4 lh-lg fs-5 text-white">
//                 Family is everything, and capturing the special moments you share is my passion.
//               </p>
//               <p className="mt-2 h4 lh-lg fs-5 text-white">
//                 Whether it's a family reunion, a day at the park, or a cozy session at home, I aim to create images that reflect the love, joy, and connection within your family.
//               </p>
//               <p className="mt-2 h4 lh-lg fs-5 text-white">
//                 Every family is unique, and I tailor each session to fit your specific needs and preferences.
//               </p>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }
