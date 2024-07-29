import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Camera from "../Images/team5.jpg";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";
import "../App.css";
import { Riple } from "react-loading-indicators";
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
import Logo from "../Images/studio37Logob.png";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { Rating } from "react-simple-star-rating";

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
    }, 2000); // 5 seconds

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
  const settings01 = {
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
  return (
    <div>
      {loading ? (
        <div className="loader-test">
          <div className="loader-container">
            <Riple color="#35b4d9" size="large" text="" textColor="" />
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
                    {/* <span className="border border-left border-dark rounded-start border-3 me-1 fs-2"></span> */}
                    Why Pick Studio37?
                  </p>
                </div>
              </div>
            </div>
            <div className="container mt-3">
              <div className="row bg-light shadow border border-light rounded team-image">
                <div className="col col-12 col-lg-4 col-xl-6 m-0 p-1 mt-lg-2">
                  <img
                    src={Camera}
                    alt="Camera"
                    className="img-fluid border border-light rounded mt-lg-4"
                  />
                </div>

                <div
                  className={`col col-12 col-lg-8 col-xl-6 m-0 p-3 slide-in-left ${
                    hasViewed.myElement ? "animate-slide-in" : ""
                  }`}
                  ref={myRef}
                >
                  <p className="mt-2 h4 lh-base fs-3 fw-bold text-dark">
                    Our Distinctive Vision
                  </p>

                  <p className="mt-2 lh-base fs-5 text-dark">
                    At <span className="fw-bold">Studio37Wedding</span>, we capture the essence of your unique
                    story to create unforgettable memories.
                  </p>

                  <ul className="mt-3 text-dark" style={{fontSize:"18px"}}>
                    <li className="pb-2">
                      <span className="fw-bold">Immortalizing genuine moments </span> that define your journey.
                    </li>
                    <li  className="pb-2">
                    <span className="fw-bold">Focusing on authentic connections </span> rather than posed shots.
                    </li>
                    <li  className="pb-2">
                      Guiding you into spontaneous, <span className="fw-bold">heartfelt interactions</span>.
                    </li>
                    <li  className="pb-2">
                      Delivering images that reflect <span className="fw-bold">your true self</span> and
                      personality.
                    </li>
                    <li  className="pb-2">
                      Providing a photography experience <span className="fw-bold"> that exceeds your
                      expectations.</span>
                    </li>
                  </ul>

                  <p className="mt-2 lh-base fs-5 text-dark">
                    Join us to transform your precious moments into <span className="fw-bold">timeless works of art.</span> Let’s create <span className="fw-bold">stunning visuals</span> that you’ll
                    treasure forever.
                  </p>
                </div>
              </div>
            </div>

            {/* <div className={`container mt-5 pt-lg-5 pt-md-5 slide-in-left   ${
              hasViewed.secondElement ? "animate-slide-in" : ""
            }`}
            ref={myRef2}
      >
        <div className="row bg-light shadow border border-light rounded ">
          <div className="col col-12 col-lg-8 col-xl-8 m-0 p-3">
            <p className="mt-2 h5 text-dark lh-base fs-3 fw-bold" ref={(el) => textRefs.current[0] = el}>
            Our shots showcase our workmanship
            </p>

            <p className="mt-2 lh-base fs-6 text-dark" ref={(el) => textRefs.current[1] = el}>
              This evocative photograph, captured by Studio37 Photography, showcases the intimate bond between a couple, enveloped in a moment of tender connection. The gentle embrace they share is highlighted by the soft, ethereal lighting that surrounds them, creating an atmosphere of warmth and affection.
            </p>
            <p className="mt-2 lh-base fs-6 text-dark" ref={(el) => textRefs.current[2] = el}>
              The image is masterfully composed, with three warm, ambient light bulbs hanging above, casting a cozy, intimate glow that enhances the romantic feel of the scene. The light creates a beautiful halo effect, drawing the viewer's eye to the couple's faces, where genuine emotions are clearly visible. The bokeh effect in the background adds a touch of magic to the photograph, symbolizing the dreamy quality of their love.
            </p>
            <p className="mt-2 lh-base fs-6 text-dark" ref={(el) => textRefs.current[3] = el}>
              Studio37Wedding excels in creating such serene environments where couples can express their true selves. This picture is a testament to our commitment to capturing authentic moments. The couple's expressions and body language tell a story of love and connection, which is the essence we strive to encapsulate in every shot.
            </p>
            <p className="mt-2 lh-base fs-6 text-dark" ref={(el) => textRefs.current[4] = el}>
              The thoughtful use of lighting and composition in this photograph demonstrates our dedication to creating works of art. At Studio37Wedding, we believe that each image should not only be a visual delight but also evoke emotions and memories that last a lifetime.
            </p>
            <p className="mt-2 lh-base fs-6 text-dark" ref={(el) => textRefs.current[5] = el}>
              At Studio37Wedding Photography, we are dedicated to turning fleeting moments into timeless treasures. This photograph is more than just an image, it is a cherished memory captured with care and precision. We invite you to experience our unique approach to photography, where every moment is transformed into a beautiful story, immortalized through our lens.
            </p>
          </div>
          <div className="col col-12 col-lg-4 col-xl-4 m-0 p-1 mt-lg-2" ref={imageRef}>
            <img
              src={RainImage}
              alt="RainImage"
              className="img-fluid border border-light rounded"
              style={{ width: "85%" }}
            />
          </div>
        </div>
      </div> */}

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
                          <p className="card-text mt-1">
                            One of the best photographer (Saravana Bharathi) I
                            have ever met.
                          </p>
                          <div>
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
                          <p className="card-text mt-1">
                            Excellent work, Excellent delivery of album. You
                            created wonderful moments.{" "}
                          </p>

                          <div>
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
                          <p className="card-text mt-1">
                            Good experience, polite and friendly!
                          </p>
                          <p className="text-white m-0 p-0">.</p>

                          <div>
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
                          <p className="card-text mt-1">
                            They are the easiest team to work with.{" "}
                          </p>
                          <p className="text-white m-0 p-0">.</p>

                          <div>
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
                          <p className="card-text mt-1">Excellent Services</p>
                          <p className="text-white m-0 p-0">.</p>

                          <div>
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

            <div className="border border-light mt-5">
              <div className="container mt-5">
                <div className="row">
                  <div className="col-12">
                    <p className="fw-bold fs-2" style={{ fontFamily: "Arial" }}>
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
                      {/* <div className="card m-0 p-0 col col-12 col-md-5 col-lg-5 border border-2 border-light"> */}
                      <img src={Logo} alt="Logo" className="img-fluid" />
                      <CardBody>
                        <p
                          className="text-decoration-underline fs-3 fw-bold "
                          style={{ fontFamily: "Arial" }}
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
                      {/* <div className="card m-0 p-0 ms-lg-3 ms-md-3 col col-12 col-md-6 col-lg-6 mt-2 mt-lg-0 mt-md-0 mt-xl-0 mt-xxl-0 border border-2 border-light"> */}
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