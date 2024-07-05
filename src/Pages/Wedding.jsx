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


import { useInView } from "react-intersection-observer";
import {  useState } from "react";

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
        speed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        rtl: true,
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
      console.log("Element is visible:", mySecondElementIsVisible);
    
      const styl = `.slick-prev:before, .slick-next:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: black;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}`

    return (
        <>            <style>{styl}</style>

        <Container fluid>
            <div className="container-fluid m-0 p-0">
                <div className="row">
                    <div className="col col-12 m-0 p-0">
                        <img
                            src={Image1}
                            alt="Image1"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>

            <div className="container-fluid border border-light rounded shadow-white bg-light mt-5 ">
                <div className="row m-0 p-0">
                    <div
                className={`col-12  slide-in-left${
                  myElementIsVisible ? "animate-slide-in" : ""
                }`}
                ref={myRef}
              >
                    <Slider {...settings}>
                <div className="p-1">
                  <img
                    src={Image3}
                    alt="Image3"
                    className="img-fluid mt-1"
                  />
                </div>
                <div className="p-1">
                  <img
                    src={Image4}
                    alt="Image4"
                    className="img-fluid mt-1"
                  />
                </div>
                <div className="p-1">
                  <img
                    src={Image5}
                    alt="Image5"
                    className="img-fluid mt-1"
                  />
                </div>
                <div className="p-1">
                  <img
                    src={Image6}
                    alt="Image6"
                    className="img-fluid mt-1"
                  />
                </div>
                <div className="p-1">
                  <img
                    src={Image2}
                    alt="Image2"
                    className="img-fluid mt-1"
                  />
                </div>
          
              </Slider>
                    </div>
                </div>
            </div>

            <div className="container-fluid border border-light rounded shadow-white bg-light mt-5 ">
                {/* <div className="row m-0 p-0"> */}
                    <div
                className={`row m-0 p-0  slide-in-left${
                  mySecondElementIsVisible ? "animate-slide-in" : ""
                }`}
                ref={myRef2}
              >
                <div className="col-12">
                    <Slider {...settings2}>
                <div className="p-1">
                  <img
                    src={m1}
                    alt="Image3"
                    className="img-fluid mt-1"
                  />
                </div>
                <div className="p-1">
                  <img
                    src={m2}
                    alt="Image4"
                    className="img-fluid mt-1"
                  />
                </div>
                <div className="p-1">
                  <img
                    src={m3}
                    alt="Image5"
                    className="img-fluid mt-1"
                  />
                </div>
                <div className="p-1">
                  <img
                    src={m4}
                    alt="Image6"
                    className="img-fluid mt-1"
                  />
                </div>
                <div className="p-1">
                  <img
                    src={m5}
                    alt="Image2"
                    className="img-fluid mt-1"
                  />
                </div>
          
              </Slider>
                    </div>
                </div>
            </div>
        </Container>
        </>
    );
}
