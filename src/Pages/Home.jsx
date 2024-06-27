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
// import Card from 'react-bootstrap/Card';



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
//     autoplay: true, // Enable autoplay
//     autoplaySpeed: 2000,  
//   };

  
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

  
// }`
//   return (<>
//     <style>{styl}</style>
//     <Container fluid className="container-fluid m-0 p-0">
//       <Carousel fade data-bs-theme="light" interval={3000}>
//         <Carousel.Item>
//           <img
//             src={Marriagephoto3}
//             alt="Marriagephoto3"
//             className="img-fluid"
//             style={{ width: "100%", height: "20%" }}
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             src={Marriagephoto1}
//             alt="Marriagephoto1"
//             className="img-fluid"
//             style={{ width: "100%" }}
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             src={Babyphoto}
//             alt="Babyphoto"
//             className="img-fluid"
//             style={{ width: "100%" }}
//           />
//         </Carousel.Item>

//         <Carousel.Item>
//           <img
//             src={Marriagephoto2}
//             alt="Marriagephoto2"
//             className="img-fluid"
//             style={{ width: "100%" }}
//           />
//         </Carousel.Item>
//       </Carousel>

//       <div className="container-fluid justify-content-center align-items-center mt-2 slide-in-left">
//         <div className="row ">
//           <div className="col-12 text-center">
//             <p className="fs-2 fw-bolder mt-3">
//               <span class="border border-left border-dark rounded-start border-3 me-1"></span>
//               Home
//             </p>
//             <p
//               className="text-dark fw-bold fs-2"
//               style={{ fontFamily: "Arial" }}
//             >
//               Welcome To <span className="text-danger">S</span>TUDIO 37
//             </p>
//           </div>
//           <div className="row container m-0 p-0 fst-italic">
//             <div className="col-12 col-md-4 mt-0 p-0">
//               <p>
//                 <img
//                   src={Logo}
//                   alt="Logo"
//                   className="img-fluid ms-0"
//                   style={{ width: "100%" }}
//                 />
//               </p>
//             </div>
//             <div className="col-11 col-md-7 mt-0 bg-white border border-2 border-dark rounded ms-3 ">
//               <p className="mt-2 h4  lh-lg fs-5 text-danger">
//                 Did we just become best friends?
//               </p>
//               <p className="mt-2 h4  lh-lg fs-5 text-dark">
//                 Once we start working together, I’ll learn how I can best tailor
//                 your individual needs through listening to your love story.{" "}
//               </p>
//               <p className="mt-2 h4  lh-lg fs-5 text-dark">
//                 I’ll be consistently communicating with you until our day
//                 together to make sure all is going to plan, and offer my
//                 assistance whenever necessary.
//               </p>
//               <p className="mt-2 h4  lh-lg fs-5 text-dark">
//                 My aim is to make sure you never feel lost or stressed
//                 throughout this process - wedding planning can be a blast, and
//                 I’m here to help! If you’re still feeling lost about your plans
//                 - don’t fret! I can help you navigate all of that. Let's Talk!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-12 col-md-12 ">
//             <p className="h1">Capturing Your Love Story</p>
//             {/* <p className="text-center m-0 p-0">At STUDIO 37, we believe that your wedding day is a unique story waiting to be told. With a focus on authentic moments and genuine emotions, we aim to capture the essence of your love and the joy of your celebration. From the smallest details to the grandest gestures, every image is a piece of your story, beautifully preserved. Let's create timeless memories together, ensuring that you feel relaxed and natural in front of the camera, so your true connection shines through.</p> */}
//           </div>
//         </div>
//         <div className="row">
//           {/* <div className="col-12 col-md-4">
//             <img
//             src={Marriagephoto4}
//             alt="Marriagephoto4"
//             className="img-fluid"
//           />
//             </div>
//             <div className="col-12 col-md-4">
//             <img
//             src={Marriagephoto7}
//             alt="Marriagephoto7"
//             className="img-fluid"
//           />
//             </div>
//             <div className="col-12 col-md-4 ">
//             <img
//             src={Marriagephoto02}
//             alt="Marriagephoto2"
//             className="img-fluid"
//           />
//             </div> */}
//             <div className="col-9 col-md-11 ms-5 ms-md-5  m-0 p-0">
//            <Slider {...settings}>
//             <div >
//               <img src={Marriagephoto4} alt="Marriagephoto4" className="img-fluid p-md-3 p-1" />
//             </div>
//             <div>
//               <img src={Marriagephoto7} alt="Marriagephoto7" className="img-fluid p-md-3 p-1" />
//             </div>
//             <div>
//               <img src={Marriagephoto02} alt="Marriagephoto2" className="img-fluid p-md-3 p-1"  />
//             </div>
//             <div>
//               <img src={Marriagephoto8} alt="Marriagephoto8" className="img-fluid p-md-3 p-1" />
//             </div>
//             <div>
//               <img src={Marriagephoto9} alt="Marriagephoto9" className="img-fluid p-md-3 p-1"/>
//             </div>
//           </Slider>
//         </div>
//         </div>
//       </div>

//       <div className="container-fluid mt-5 ">
//   <div className="row">
//           <div className="col-12 col-md-12 ">
//             <p className="h1">Reflect Your Family's Heart</p>
//           </div>
//       </div>
//       <div className="row">
//       <div className="col-11 col-md-6 ms-3 m-0 p-0 border border-primary" style={{display:"flex"}}>
//             <div >
//               <img src={Family1} alt="Familyphoto1" className="img-fluid mt-1 family-image" style={{width:"95%",}} />
       
//             </div>
//             <div >
//               <img src={Family2} alt="Familyphoto2" className="img-fluid p-1 ms-1 family-image" style={{width:"95%"}} />
//             </div>
//             <div className="ms-2">
//               <img src={Family3} alt="Familyphoto1" className="img-fluid family-image"  />
//             </div>
            
//         </div>
//         <div className="col-11 col-md-5 mt-0 ms-3 bg-dark card border border-dark mt-1 slide-in-left fst-italic">
//               <p className="mt-2 h4 lh-lg fs-5 text-white">
//                 <b>
//               Celebrating Every Memory
//               </b>
//               </p>
//               <p className="mt-2 h4 lh-lg fs-5 text-white">
//               Family is everything, and capturing the special moments you share is my passion.
//               </p>
//               <p className="mt-2 h4 lh-lg fs-5 text-white">
//               Whether it's a family reunion, a day at the park, or a cozy session at home, I aim to create images that reflect the love, joy, and connection within your family.
//               </p>
//               <p className="mt-2 h4 lh-lg fs-5 text-white">
//               Every family is unique, and I tailor each session to fit your specific needs and preferences. 
//               </p>
//             </div>
//       </div>
//       </div>
//     </Container>
//     </>
//   );
// }

import React from "react";
import Slider from "react-slick";
import Carousel from "react-bootstrap/Carousel";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
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
import Family1 from "../Images/CSB09196.jpg";
import Family2 from "../Images/CSB05130.jpg";
import Family3 from "../Images/RBG09768.jpg";
import Card from 'react-bootstrap/Card';

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
    centerPadding: "5px",
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,  
    dots:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

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
}
    
`
  return (
    <>
      <style>{styl}</style>
      <Container fluid className="container-fluid m-0 p-0 pt-4">
        <Carousel fade data-bs-theme="light" interval={3000} className="mt-5">
          <Carousel.Item>
            <LazyLoadImage
              src={Marriagephoto3}
              alt="Marriagephoto3"
              className="img-fluid"
              style={{ width: "100%", height: "20%" }}
              effect="blur"
            />
          </Carousel.Item>
          <Carousel.Item>
            <LazyLoadImage
              src={Marriagephoto1}
              alt="Marriagephoto1"
              className="img-fluid"
              style={{ width: "100%" }}
              effect="blur"
            />
          </Carousel.Item>
          <Carousel.Item>
            <LazyLoadImage
              src={Babyphoto}
              alt="Babyphoto"
              className="img-fluid"
              style={{ width: "100%" }}
              effect="blur"
            />
          </Carousel.Item>
          <Carousel.Item>
            <LazyLoadImage
              src={Marriagephoto2}
              alt="Marriagephoto2"
              className="img-fluid"
              style={{ width: "100%" }}
              effect="blur"
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
              <p className="text-dark fw-bold fs-2" style={{ fontFamily: "Arial" }}>
                Welcome To <span className="text-danger">S</span>TUDIO 37
              </p>
            </div>
            <div className="row container m-0 p-0 fst-italic">
              <div className="col-12 col-md-4 mt-0 p-0">
                <p>
                  <LazyLoadImage
                    src={Logo}
                    alt="Logo"
                    className="img-fluid ms-0"
                    style={{ width: "100%" }}
                    effect="blur"
                  />
                </p>
              </div>
              <div className="col-11 col-md-7 mt-0 bg-white border border-2 border-dark rounded ms-3 ">
                <p className="mt-2 h4  lh-lg fs-5 text-danger">
                  Did we just become best friends?
                </p>
                <p className="mt-2 h4  lh-lg fs-5 text-dark">
                  Once we start working together, I’ll learn how I can best tailor your individual needs through listening to your love story.
                </p>
                <p className="mt-2 h4  lh-lg fs-5 text-dark">
                  I’ll be consistently communicating with you until our day together to make sure all is going to plan, and offer my assistance whenever necessary.
                </p>
                <p className="mt-2 h4  lh-lg fs-5 text-dark">
                  My aim is to make sure you never feel lost or stressed throughout this process - wedding planning can be a blast, and I’m here to help! If you’re still feeling lost about your plans - don’t fret! I can help you navigate all of that. Let's Talk!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-12 ">
              <p className="h1">Capturing Your Love Story</p>
            </div>
          </div>
          <div className="row">
            <div className="col-9 col-md-12 ms-5 ms-md-3 m-0 p-0">
              <Slider {...settings}>
                <div>
                  <LazyLoadImage
                    src={Marriagephoto4}
                    alt="Marriagephoto4"
                    className="img-fluid p-md-3 p-1"
                    effect="blur"
                  />
                </div>
                <div>
                  <LazyLoadImage
                    src={Marriagephoto7}
                    alt="Marriagephoto7"
                    className="img-fluid p-md-3 p-1"
                    effect="blur"
                  />
                </div>
                <div>
                  <LazyLoadImage
                    src={Marriagephoto02}
                    alt="Marriagephoto2"
                    className="img-fluid p-md-3 p-1"
                    effect="blur"
                  />
                </div>
                <div>
                  <LazyLoadImage
                    src={Marriagephoto8}
                    alt="Marriagephoto8"
                    className="img-fluid p-md-3 p-1"
                    effect="blur"
                  />
                </div>
                <div>
                  <LazyLoadImage
                    src={Marriagephoto9}
                    alt="Marriagephoto9"
                    className="img-fluid p-md-3 p-1"
                    effect="blur"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="container-fluid mt-5 ">
          <div className="row">
            <div className="col-12 col-md-12 ">
              <p className="h1">Reflect Your Family's Heart</p>
            </div>
          </div>
          <div className="row">
            <div className="col-11 col-md-6 ms-3 m-0 p-0" style={{ display: "flex" }}>
              <div>
                <LazyLoadImage
                  src={Family1}
                  alt="Familyphoto1"
                  className="img-fluid mt-1 family-image"
                  style={{ width: "95%" }}
                  effect="blur"
                />
              </div>
              <div>
                <LazyLoadImage
                  src={Family2}
                  alt="Familyphoto2"
                  className="img-fluid p-1 ms-1 family-image"
                  style={{ width: "95%" }}
                  effect="blur"
                />
              </div>
              <div className="ms-2">
                <LazyLoadImage
                  src={Family3}
                  alt="Familyphoto1"
                  className="img-fluid family-image"
                  effect="blur"
                />
              </div>
            </div>
            <div className="col-11 col-md-5 mt-0 ms-3 bg-dark card border border-dark mt-1 slide-in-left fst-italic">
              <p className="mt-2 h4 lh-lg fs-5 text-white">
                <b>Celebrating Every Memory</b>
              </p>
              <p className="mt-2 h4 lh-lg fs-5 text-white">
                Family is everything, and capturing the special moments you share is my passion.
              </p>
              <p className="mt-2 h4 lh-lg fs-5 text-white">
                Whether it's a family reunion, a day at the park, or a cozy session at home, I aim to create images that reflect the love, joy, and connection within your family.
              </p>
              <p className="mt-2 h4 lh-lg fs-5 text-white">
                Every family is unique, and I tailor each session to fit your specific needs and preferences.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

