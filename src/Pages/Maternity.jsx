// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/esm/Container";
// import "../App.css";
// import ma1 from "../Images/CSB01325.jpg";
// import ma2 from "../Images/CSB06762.jpg";
// import ma3 from "../Images/CSB06786.jpg";
// import { Button, CardBody } from "react-bootstrap";

// export default function Maternity(){
//     return(
//         <div className="mt-5 border border-white m-0 p-0">
//         <Container
//           fluid
//           className="container-fluid m-0 p-0 mt-1 border border-danger"
//         >
//           <div className="container-fluid  mt-4 border border-primary">
//             <div className="row slideleft">
//               <div className="col col-12 m-0 p-0">
//                 <img
//                   src={ma1}
//                   alt="Image1"
//                   className="img-fluid border border-light rounded"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="container  mt-4 border border-primary">
//             <div className="row ">
//               <div className="col col-12 m-0 p-0">
//               <p className="fs-2 fw-bolder mt-3">
//               Celebrate Your Baby Bump Memories</p>
//               </div>
//                 <div className="row">
//                 <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
//                 <div className="card slideleft col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 mt-lg-3 mt-md-0 ms-md-2">

//                   <div className="hover-image-container main">
//         <img
//           src={ma2}
//           alt="Image23"
//           className="img-fluid m-0 p-0 family-image border border-light rounded-3 default-img"
//         />
//         <div className="over">
//         <img
//           src={ma3}
//           alt="Hover Image22"
//           className="img-fluid m-0 p-0  border border-light rounded-3 hover-img"
//         />
//          <Button  className="family-imagebutton align-self-center text-center m-auto" style={{backgroundColor:"rgb(0, 0, 0, 0.1)", color:"white", border:"1px solid"}}>

//                     <span>Explore More</span>

//                   </Button>
//         </div>
//       </div>
//                 </div>

//                 <div className="card col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3 mt-md-0 ms-md-2">
//                   <img
//                     src={ma2}
//                     alt="Image2"
//                     className="img-fluid m-0 p-0  family-image border border-light rounded-3"
//                   />
//                 </div>
//                 <div className="card col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3 mt-md-0 ms-md-2">
//                   <img
//                     src={ma2}
//                     alt="Image2"
//                     className="img-fluid m-0 p-0  family-image border border-light rounded-3"
//                   />
//                 </div>

//               </div>
//                 </div>
//             </div>
//           </div>
//           </Container>
//           </div>
//     )
// }

import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import "../App.css";
import Slider from "react-slick";
import ma1 from "../Images/CSB03719.jpg";
import ma01 from "../Images/CSB01325.jpg";
import ma2 from "../Images/CSB06762.jpg";
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
import ma15 from "../Images/CSB06467.jpg";
import ma16 from "../Images/CSB06743.jpg";
import ma17 from "../Images/CSB07047.jpg";
import { Button } from "react-bootstrap";

export default function Maternity() {
    const carouselRef = useRef(null);

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
  return (
    <div className="mt-5 border border-white m-0 p-0">
      <Container
        fluid
        className="container-fluid m-0 p-0 mt-1 border border-danger"
      >
        <div className="container-fluid mt-4 border border-primary">
          <div className="row slideleft">
            <div className="col col-12 m-0 p-0">
              <img
                src={ma1}
                alt="Image1"
                className="img-fluid border border-light rounded"
              />
            </div>
          </div>
        </div>

        <div className="container mt-4 border border-primary">
          <div className="row">
            <div className="col col-12 m-0 p-0">
              <p className="fs-2 fw-bolder mt-3">
                Celebrate Your Baby Bump Memories
              </p>
            </div>
            <div className="row">
              <div className="d-flex flex-column flex-sm-column flex-md-row flex-lg-row justify-content-center">
                <div className="card  col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 mt-lg-3 mt-md-0 ms-md-2">
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
                        }}  onClick={scrollToCarousel}
                      >
                        <span>Discover more</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="card col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3 mt-md-0 ms-md-2">
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
                        }} onClick={scrollToCarousel}
                      >
                        <span>Discover more</span>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="card col-12 col-lg-4 col-md-4 col-xl-4 col-xxl-4 border border-white rounded bg-light shadow-sm m-0 p-0 ms-lg-2 mt-lg-3 mt-3 mt-md-0 ms-md-2">
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
                        }} onClick={scrollToCarousel}
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

        <div className="container mt-3">
            <div className="row">
              <div className="col col-12 text-center">
                <p className="fs-2 fw-bolder mt-3">
                  {/* <span className="border border-left border-dark rounded-start border-3 me-1 fs-2"></span> */}
                  Wedding
                </p>
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
            <div className="container-fluid mt-2 mt-lg-5">
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
                        src={ma12}
                        alt="Image3"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div>
                    <div className="p-1" style={{ width: "93%" }}>
                      <img
                        src={ma16}
                        alt="Image4"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div>
                    <div className="p-1" style={{ width: "93%" }}>
                      <img
                        src={ma11}
                        alt="Image5"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div>
                    <div className="p-1" style={{ width: "93%" }}>
                      <img
                        src={ma15}
                        alt="Image5"
                        className="img-fluid mt-1 border border-light rounded"
                      />
                    </div>
                    <div className="p-1" style={{ width: "93%" }}>
                      <img
                        src={ma17}
                        alt="Image5"
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

      </Container>
    </div>
  );
}
