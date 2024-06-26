import React from "react";

import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import Logo from "../Images/Logo.jpg";
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




import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import "../App.css";

export default function CarouselFade() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
  };
  const styl=`.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
}`
  return (<>
    <style>{styl}</style>
    <Container fluid className="container-fluid m-0 p-0">
      <Carousel fade data-bs-theme="light" interval={3000}>
        <Carousel.Item>
          <img
            src={Marriagephoto3}
            alt="Marriagephoto3"
            className="img-fluid"
            style={{ width: "100%", height: "20%" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Marriagephoto1}
            alt="Marriagephoto1"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Babyphoto}
            alt="Babyphoto"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={Marriagephoto2}
            alt="Marriagephoto2"
            className="img-fluid"
            style={{ width: "100%" }}
          />
        </Carousel.Item>
      </Carousel>

      <div className="container-fluid justify-content-center align-items-center mt-2 slide-in-left">
        <div className="row ">
          <div className="col-12 text-center">
            <p className="fs-2 fw-bolder mt-3">
              <span class="border border-left border-dark rounded-start border-3 me-1"></span>
              Home
            </p>
            <p
              className="text-dark fw-bold fs-2"
              style={{ fontFamily: "Arial" }}
            >
              Welcome To <span className="text-danger">S</span>TUDIO 37
            </p>
          </div>
          <div className="row container m-0 p-0 fst-italic">
            <div className="col-12 col-md-4 mt-0 p-0">
              <p>
                <img
                  src={Logo}
                  alt="Logo"
                  className="img-fluid ms-0"
                  style={{ width: "100%" }}
                />
              </p>
            </div>
            <div className="col-12 col-md-8 mt-0 bg-light">
              <p className="mt-2 h4  lh-lg fs-5 text-danger">
                Did we just become best friends?
              </p>
              <p className="mt-2 h4  lh-lg fs-5 text-dark">
                Once we start working together, I’ll learn how I can best tailor
                your individual needs through listening to your love story.{" "}
              </p>
              <p className="mt-2 h4  lh-lg fs-5 text-dark">
                I’ll be consistently communicating with you until our day
                together to make sure all is going to plan, and offer my
                assistance whenever necessary.
              </p>
              <p className="mt-2 h4  lh-lg fs-5 text-dark">
                My aim is to make sure you never feel lost or stressed
                throughout this process - wedding planning can be a blast, and
                I’m here to help! If you’re still feeling lost about your plans
                - don’t fret! I can help you navigate all of that. Let's Talk!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-12 ">
            <p className="h1">Capturing Your Love Story</p>
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
            <div className="col-11 col-md-12 ms-3">
           <Slider {...settings}>
            <div>
              <img src={Marriagephoto4} alt="Marriagephoto4" className="img-fluid" />
            </div>
            <div>
              <img src={Marriagephoto7} alt="Marriagephoto7" className="img-fluid" />
            </div>
            <div>
              <img src={Marriagephoto02} alt="Marriagephoto2" className="img-fluid" />
            </div>
            <div>
              <img src={Marriagephoto8} alt="Marriagephoto8" className="img-fluid" />
            </div>
            <div>
              <img src={Marriagephoto9} alt="Marriagephoto9" className="img-fluid" />
            </div>
          </Slider>
        </div>
        </div>
      </div>
    </Container>
    </>
  );
}
