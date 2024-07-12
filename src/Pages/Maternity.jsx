import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import "../App.css";
import ma1 from "../Images/CSB01325.jpg";
import ma2 from "../Images/CSB06762.jpg";

export default function Maternity(){
    return(
        <div className="mt-5 border border-white m-0 p-0">

        <div className="mt-1 border border-white m-0 p-0">
            <Container fluid className="mt-4 container-fluid m-0 p-0 border border-danger "
              style={{ backgroundImage: `url(${ma1})` }}>
             <div className="container-fluid mt-4 background-container " style={{backgroundImage: `url(${ma1})`}}>
                    <div className="row">
                        <div className="col-12 ">
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-4 content-container" style={{backgroundColor:"rgb(174,146,126,0.8)"}}>
                <div className="row m-0 p-0">
            <div className="col-12 text-center">
              <p className="fs-2 fw-bolder mt-3 text-white ">Maternity</p>
            </div>
            </div>

                    <div className="row">
                        <div className="col-12 col-lg-4">
                            
                            <img src={ma2} alt="ma2" className="img-fluid"/>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
        </div>
    )
}

// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/esm/Container";
// import "../App.css";
// import ma1 from "../Images/CSB01325.jpg";
// import ma2 from "../Images/CSB06762.jpg";

// export default function Maternity() {
//     return (
//         <div className="mt-5 border border-white m-0 p-0">
//             <div className="background-container" style={{ backgroundImage: `url(${ma1})` }}>
//                 <Container fluid className="container-fluid content-container">
//                     <div className="row">
//                         <div className="col-12 ">
//                             <h1>Maternity</h1>
//                             <p>Capture the beauty and essence of your pregnancy with our professional maternity photography services. Our goal is to create timeless, elegant portraits that celebrate this special time in your life. We provide a relaxed and comfortable environment to ensure you feel your best during the photo session.</p>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//             <Container fluid className="container-fluid mt-4 border border-white content-container" style={{ zIndex: 1, backgroundColor: "rgba(174,146,126,0.8)" }}>
//                 <div className="row m-0 p-0">
//                     <div className="col-12 text-center">
//                         <p className="fs-2 fw-bolder mt-3 text-white ">Maternity</p>
//                     </div>
//                 </div>
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-12 col-md-4">
//                             <img src={ma2} alt="Maternity Photo" className="img-fluid" />
//                         </div>
//                         <div className="col-12 col-md-8">
//                             <h2>Our Services</h2>
//                             <ul>
//                                 <li>Personalized Sessions: Tailored to your unique style and preferences, whether you prefer a natural outdoor setting or a cozy indoor shoot.</li>
//                                 <li>Professional Guidance: Expert advice on poses, outfits, and locations to ensure you look and feel stunning.</li>
//                                 <li>High-Quality Images: Beautifully edited high-resolution images that you can cherish forever.</li>
//                                 <li>Family Involvement: Options to include your partner and older children in the session to capture the whole family’s joy.</li>
//                             </ul>
//                             <h2>The Experience</h2>
//                             <p>We believe in creating a serene and enjoyable experience for our clients. From the moment you book your session to the final delivery of your images, we are dedicated to providing exceptional service and capturing the beauty of your journey into motherhood.</p>
//                             <h2>Why Choose Us?</h2>
//                             <p>With a passion for photography and a commitment to excellence, we aim to create images that tell your unique story. Our attention to detail and personalized approach ensure that your maternity photos will be a treasured keepsake for years to come.</p>
//                         </div>
//                     </div>
//                 </div>
//             </Container>
//         </div>
//     );
// }

// import React, { useState, useEffect, useRef } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/esm/Container";
// import "../App.css";
// import ma1 from "../Images/CSB01325.jpg";
// import ma2 from "../Images/CSB06762.jpg";

// export default function Maternity() {
//   return (
//     <div className="mt-5 border border-white m-0 p-0">
//         <Container
//           fluid
//           className="mt-1 container-fluid m-0 p-0 border border-danger"
//         >
//           <div className="container-fluid mt-4">
//             <div className="row">
//               <div className="col-12 ">

//               </div>
//             </div>
//           </div>

//           <div
//             className="container-fluid mt-4 content-container"
//             style={{ backgroundColor: "rgb(174,146,126,0.8)" }}
//           >
//             <div className="row m-0 p-0">
//               <div className="col-12 text-center">
//                 <p className="fs-2 fw-bolder mt-3 text-white ">Maternity</p>
//               </div>
//             </div>

//             <div className="row">
//               <div className="col-4">
//                 <img src={ma2} alt="ma2" className="img-fluid" />
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>
    
//   );
// }
