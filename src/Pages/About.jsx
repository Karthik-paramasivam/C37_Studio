import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Camera from "../Images/Camera.jpg";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect, useState } from "react";
import "../App.css";

export default function About() {
  
    
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
  return (
    <Container fluid className="container-fluid pt-5 mt-5 border border-danger">
      <div className="container mt-5">
        <div className="row">
          <div className="col col-12 text-center">
            <p className="fs-2 fw-bolder mt-3">
              <span className="border border-left border-dark rounded-start border-3 me-1 fs-2"></span>
              Our Team
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row bg-light shadow border border-light rounded ">
          <div className="col col-12 col-lg-4 m-0 p-0 border border-danger" >
            <img
              src={Camera}
              alt="Camera"
              className="img-fluid " style={{width:"85%"}}
            />
          </div>
          {/* <div className="col col-12 col-lg-7 ">
            <p className="mt-2 h5 text-dark lh-base fs-3 fw-bold">
              Our Signature Approach
            </p>
            <p className="mt-2 lh-base fs-6 text-dark">
              Nothing gives us more joy than capturing someone else’s story and
              creating something timeless out of it.
            </p>
            <p className="mt-2 lh-base fs-6 text-dark">
              We want to capture images that bring to life your story. We want
              to direct you into moments where you have a chance to connect, and
              not just poses, where you are smiling at the camera, and not
              connecting with each other MOMENTS, NOT POSES.
            </p>
            <p>
              Let’s create something that speaks to who you
              are. Trust us--Everyone feels awkward in front of the camera... 
            </p>
            <p>
              It's
              our job to make sure you never have to wonder: "What do we do with
              our hands?" We are here to guide you into shared moments and not
              snap a pic of you posing.
            </p>
            <p>
              Inspired and fascinated by connection, our passion is
              storytelling, and we want to help tell the story of your life and
              love!.
              </p> <p>
                we will take the time to learn your journey, so we can
              create images which speak to who you are--Images which are curated
              moments, meant to showcase your pure, beautiful, quirky, authentic
              self. Let's capture your individual story, in visual form.
            </p>
          </div> */}
          {/* <div className="col col-12 col-lg-7">
  <p className="mt-2 h5 text-dark lh-base fs-3 fw-bold">
    Our Signature Approach
  </p>
  <p className="mt-2 lh-base fs-6 text-dark">
    Nothing gives us more joy than capturing someone else’s story and
    creating something timeless out of it.
  </p>
  <p className="mt-2 lh-base fs-6 text-dark">
    We want to capture images that bring to life your story. We want to direct
    you into moments where you have a chance to connect, and not just poses,
    where you are smiling at the camera, and not connecting with each other
    MOMENTS, NOT POSES.
  </p>
  <p className="mt-2 lh-base fs-6 text-dark">
    Let’s create something that speaks to who you are. Trust us--Everyone feels
    awkward in front of the camera... It's our job to make sure you never have
    to wonder: "What do we do with our hands?" We are here to guide you into
    shared moments and not snap a pic of you posing.
  </p>
  <p className="mt-2 lh-base fs-6 text-dark">
    Inspired and fascinated by connection, our passion is storytelling, and we
    want to help tell the story of your life and love! We will take the time
    to learn your journey, so we can create images which speak to who you
    are--Images which are curated moments, meant to showcase your pure,
    beautiful, quirky, authentic self. Let's capture your individual story, in
    visual form.
  </p>
</div> */}
<div className={`col col-12 col-lg-8 m-0 p-3 slide-in-left border border-primary  ${
                  myElementIsVisible ? "animate-slide-in" : ""
                }`}
                ref={myRef} >
  <p className="mt-2 h5 text-dark lh-base fs-3 fw-bold">
    Our Signature Approach
  </p>
  <p className="mt-2 lh-base fs-6 text-dark">
    Nothing gives us more joy than capturing someone else’s story and creating
    something timeless out of it.
  </p>
  <p className="mt-2 lh-base fs-6 text-dark">
    We want to capture images that bring to life your story. We want to direct
    you into moments where you have a chance to connect, and not just poses,
    where you are smiling at the camera, and not connecting with each other.
    MOMENTS, NOT POSES.
  </p>
  <p className="mt-2 lh-base fs-6 text-dark">
    Let’s create something that speaks to who you are. Trust us--Everyone feels
    awkward in front of the camera... It's our job to make sure you never have
    to wonder: "What do we do with our hands?" We are here to guide you into
    shared moments and not snap a pic of you posing.
  </p>
  <p className="mt-2 lh-base fs-6 text-dark ">
    Inspired and fascinated by connection, our passion is storytelling, and we
    want to help tell the story of your life and love!
  </p>
  <p className="mt-2 lh-base fs-6 text-dark">
    We will take the time to learn your journey, so we can create images which
    speak to who you are--Images which are curated moments, meant to showcase
    your pure, beautiful, quirky, authentic self. Let's capture your individual
    story, in visual form.
  </p>
</div>


        </div>
      </div>
    </Container>
  );
}
