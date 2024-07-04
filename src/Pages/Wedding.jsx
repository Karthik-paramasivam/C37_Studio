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
import Image2 from "../Images/CSB01782.jpg";
import "../App.css";

export default function Wedding() {
    const imageRef = useRef(null);

    useEffect(() => {
        const image = imageRef.current;

        if (image.complete) {
            // Image is already loaded
            gsap.from(image, {
                autoAlpha: 0,
                y: 50,
                duration: 0.5,
            });
        } else {
            // Wait for image to load
            image.onload = () => {
                gsap.from(image, {
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.5,
                });
            };
        }
    }, []);

    return (
        <Container fluid>
            <div className="container-fluid m-0 p-0">
                <div className="row">
                    <div className="col col-12 m-0 p-0">
                        <img
                            ref={imageRef}
                            src={Image1}
                            alt="Image1"
                            className="img-fluid"
                        />
                    </div>
                </div>
            </div>

            <div className=""></div>
        </Container>
    );
}
