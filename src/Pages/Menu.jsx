// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Logo from '../Images/Logo.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../App.css";

// function MenuBar() {
//   return (

//     <Container fluid className='slideleft'>
//     <Navbar collapseOnSelect expand="lg" className="bg-light" fixed='top'>
//       <Container className='ps-md-1 pe-md-1'>
//         <Navbar.Brand href="#home">
//         <img src={Logo} alt="Logo" className='img-fluid' style={{height:"45px"}} />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link className='fw-bold text-dark'>Home</Nav.Link>
//             <Nav.Link className='fw-bold text-dark'>About</Nav.Link>
//             {/* <Nav.Link className='fw-bold text-dark'>Wedding Photography</Nav.Link>
//             <Nav.Link className='fw-bold text-dark'>Family Photography</Nav.Link>
//             <Nav.Link className='fw-bold text-dark'>Baby Photography</Nav.Link> */}

//             <NavDropdown title="Services" id="collapsible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">
//               Wedding
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Family & Baby Portraits
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Maternity</NavDropdown.Item>
//               {/* <NavDropdown.Divider /> */}
//               {/* <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item> */}
//             </NavDropdown>

//           </Nav>
//           {/* <Nav>
//             <Nav.Link href="#deets">More deets</Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">
//               Dank memes
//             </Nav.Link>
//           </Nav> */}
//         </Navbar.Collapse>
//       </Container>

//     </Navbar>
//     </Container>
//   );
// }

// export default MenuBar;

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Logo from '../Images/Logo.jpg';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "../App.css";

// function MenuBar() {
// //   const styl = `.navbar-nav .dropdown-menu {
// //     position: static;
// //     background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
// // }`

//   return (
//     <>
//     {/* <style>{styl}</style> */}

//     <Container fluid className='slideleft'>
//     <Navbar collapseOnSelect expand="lg" className="bg-light" fixed='top'>
//       <Container className='ps-md-1 pe-md-1'>
//         <Navbar.Brand href="#home">
//         <img src={Logo} alt="Logo" className='img-fluid' style={{height:"45px"}} />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav" className='border border-primary'>
//           <Nav className="ms-auto me-lg-5 pe-lg-5 border border-danger">
//             <Nav.Link className='fw-bold text-dark'>Home</Nav.Link>
//             <Nav.Link className='fw-bold text-dark'>Our Team</Nav.Link>
//             {/* <Nav.Link className='fw-bold text-dark'>Wedding Photography</Nav.Link>
//             <Nav.Link className='fw-bold text-dark'>Family Photography</Nav.Link>
//             <Nav.Link className='fw-bold text-dark'>Baby Photography</Nav.Link> */}

//             <NavDropdown title="Services" id="collapsible-nav-dropdown" className='fw-bold ' >

//               <NavDropdown.Item href="#action/3.1"  className='text-center text-xl-left p-1'>
//               Wedding
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2"  className='text-center p-2'>
//                 Family & Baby Portraits
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3"  className='text-center p-1'>Maternity</NavDropdown.Item>
//               {/* <NavDropdown.Divider /> */}
//               {/* <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item> */}
//             </NavDropdown>

//           </Nav>
//           {/* <Nav>
//             <Nav.Link href="#deets"></Nav.Link>
//             <Nav.Link eventKey={2} href="#memes">

//             </Nav.Link>
//           </Nav> */}
//         </Navbar.Collapse>
//       </Container>

//     </Navbar>
//     </Container>
//     </>
//   );
// }

// export default MenuBar;

// import React, { useRef, useEffect, useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Logo from "../Images/studio37Logob.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";
// import { NavLink } from "react-router-dom";

// function MenuBar() {
//   const [show, setShow] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleToggle = (nextShow) => {
//     setShow(nextShow);
//   };

//   useEffect(() => {
//     // Function to handle click and focus outside of the dropdown
//     const handleOutsideClick = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShow(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     document.addEventListener("focusin", handleOutsideClick);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       document.removeEventListener("focusin", handleOutsideClick);
//     };
//   }, []);

//   const styl = `.dropdown-item.active, .dropdown-item:active {
//     color: black;
//     text-decoration: none;
//     background-color: white;
// }
//     `;

//   return (
//     <>
//       <style>{styl}</style>
//       <Container fluid>
//         <Navbar collapseOnSelect expand="lg" className="bg-light shadow-sm" fixed="top">
//           <Container className="ps-md-1 pe-md-1">
//             <Navbar.Brand className="slideleft">
//               <img
//                 src={Logo}
//                 alt="Logo"
//                 className="img-fluid"
//                 style={{ height: "45px" }}
//               />
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav" className="slideright">
//               <Nav className="ms-auto me-lg-5 pe-lg-5">
//                 <Nav.Link as={NavLink} to="/" className="fw-bold text-dark">
//                   Home
//                 </Nav.Link>
//                 <Nav.Link
//                   as={NavLink}
//                   to="/ourteam"
//                   className="fw-bold text-dark"
//                 >
//                   Our Team
//                 </Nav.Link>
//                 <NavDropdown
//                   title="Gallery"
//                   id="collapsible-nav-dropdown"
//                   className="fw-bold text-dark"
//                   show={show}
//                   onMouseEnter={() => handleToggle(true)}
//                   onMouseLeave={() => handleToggle(false)}
//                   ref={dropdownRef}
//                   onToggle={(isOpen) => setShow(isOpen)}
//                 >
//                   <NavDropdown.Item
//                     as={NavLink}
//                     to="/gallery/wedding"
//                     className="text-center text-xl-left p-1"
//                   >
//                     Wedding
//                   </NavDropdown.Item>
//                   <NavDropdown.Item
//                     href="#action/3.2"
//                     className="text-center p-2"
//                   >
//                     Family & Baby Portraits
//                   </NavDropdown.Item>
//                   <NavDropdown.Item
//                     href="#action/3.3"
//                     className="text-center p-1"
//                   >
//                     Maternity
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </Container>
//     </>
//   );
// }

// export default MenuBar;

// import React, { useRef, useEffect, useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Logo from "../Images/studio37Logob.png";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";
// import { NavLink } from "react-router-dom";

// function MenuBar() {
//   const [show, setShow] = useState(false);
//   const [expanded, setExpanded] = useState(false); // State to manage navbar collapse
//   const dropdownRef = useRef(null);
//   const navbarRef = useRef(null);

//   const handleToggle = (nextShow) => {
//     setShow(nextShow);
//   };

//   const handleNavbarToggle = () => {
//     setExpanded(!expanded);
//   };

//   useEffect(() => {
//     // Function to handle click and focus outside of the dropdown and navbar
//     const handleOutsideClick = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setShow(false);
//       }
//       if (navbarRef.current && !navbarRef.current.contains(event.target)) {
//         setExpanded(false);
//       }
//     };

//     document.addEventListener("mousedown", handleOutsideClick);
//     document.addEventListener("touchstart", handleOutsideClick); // Added touchstart for mobile devices
//     document.addEventListener("focusin", handleOutsideClick);

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//       document.removeEventListener("touchstart", handleOutsideClick); // Clean up touchstart event listener
//       document.removeEventListener("focusin", handleOutsideClick);
//     };
//   }, []);

//   const styl = `.dropdown-item.active, .dropdown-item:active {
//     color: black;
//     text-decoration: none;
//     background-color: white;
//   }
//     .navbar-toggler:focus {
//     text-decoration: none;
//     border: 2px solid;
//     outline: 0;
// } `;

//   return (
//     <>
//       <style>{styl}</style>
//       <Container fluid className="m-0 p-0">
//         <Navbar
//           ref={navbarRef}
//           collapseOnSelect
//           expand="lg"
//           className="bg-light shadow-sm m-0 p-0"
//           fixed="top"
//           expanded={expanded}
//         >
//           <Container className="ps-md-1 pe-md-1">
//             <Navbar.Brand className="slideleft">
//               <img
//                 src={Logo}
//                 width={100}

//                 alt="Logo"
//                 className="img-fluid border border-danger"

//               />
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavbarToggle} />
//             <Navbar.Collapse id="responsive-navbar-nav" className="slideright">
//               <Nav className="ms-auto me-lg-5 pe-lg-5">
//                 <Nav.Link as={NavLink} to="/" className="fw-bold text-dark">
//                   Home
//                 </Nav.Link>
//                 <Nav.Link
//                   as={NavLink}
//                   to="/ourteam"
//                   className="fw-bold text-dark"
//                 >
//                   Our Team
//                 </Nav.Link>
//                 <NavDropdown
//                   title="Gallery"
//                   id="collapsible-nav-dropdown"
//                   className="fw-bold text-dark"
//                   show={show}
//                   onMouseEnter={() => handleToggle(true)}
//                   onMouseLeave={() => handleToggle(false)}
//                   ref={dropdownRef}
//                   onToggle={(isOpen) => setShow(isOpen)}
//                 >
//                   <NavDropdown.Item
//                     as={NavLink}
//                     to="/gallery/wedding"
//                     className="text-center text-xl-left p-1"
//                   >
//                     Wedding
//                   </NavDropdown.Item>
//                   <NavDropdown.Item
//                     as={NavLink}
//                     to="/gallery/family&baby"

//                     className="text-center p-2"
//                   >
//                     Family & Baby Portraits
//                   </NavDropdown.Item>
//                   <NavDropdown.Item
//                     href="#action/3.3"
//                     className="text-center p-1"
//                   >
//                     Maternity
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
//       </Container>
//     </>
//   );
// }

// export default MenuBar;

import React, { useRef, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Images/studio37Logob.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";


function MenuBar() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false); // State to manage navbar collapse
  const dropdownRef = useRef(null);
  const navbarRef = useRef(null);
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo(0, 0); // Scroll to top of the page

  };

  const handleToggle = (nextShow) => {
    setShow(nextShow);
  };

  const handleNavbarToggle = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    // Function to handle click and focus outside of the dropdown and navbar
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick); // Added touchstart for mobile devices
    document.addEventListener("focusin", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick); // Clean up touchstart event listener
      document.removeEventListener("focusin", handleOutsideClick);
    };
  }, []);
  // const iconStyle = {
  //   fontSize: "", // Adjust this value to change the size of the "X"
  // };

  const styl = `.dropdown-item.active, .dropdown-item:active {
    color: black;
    text-decoration: none;
    background-color: white;
  }
    .navbar-toggler:focus {
    text-decoration: none;
    border: 2px solid !important;
    outline: 0;
    box-shadow: none !important;
}
  .navbar-nav .dropdown-menu {
    position: static;
    background-color: #f8f9fa;
    border: 2px solid rgb(0, 0, 0, 0.1);
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;

}  
  .dropdown-item.active, .dropdown-item:active {
   transform: scale(1.0);
  font-weight: bold;
   background-color: rgb(0, 0, 0, 0.1)!important;
  color: black !important;
  border-left: 5px solid black;
  border-radius: 3px;
}
`;

  return (
    <>
      <style>{styl}</style>
      <Container fluid className="m-0 p-0">
        <Navbar
          ref={navbarRef}
          collapseOnSelect
          expand="lg"
          className="bg-light shadow-sm m-0 p-0"
          fixed="top"
          expanded={expanded}
        >
          <Container className="ps-md-1 pe-md-1">
            <Navbar.Brand className="slideleft">
              <img
                src={Logo}
                width={100}
                alt="Logo"
                className="img-fluid logo-image"
                onClick={handleLogoClick}
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={handleNavbarToggle}
            >
              {expanded ? (
                <span
                  style={{ padding: "0.7px", fontWeight: "bold" }}
                  className="m-0 m-auto text-center "
                >
                  ✕
                </span>
              ) : (
                <FontAwesomeIcon icon={faBars} size="1x" />
              )}{" "}
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" className="slideright">
              <Nav className="ms-auto me-lg-5 pe-lg-5">
                <Nav.Link as={NavLink} to="/" className="fw-bold text-dark">
                  Home
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/ourteam"
                  className="fw-bold text-dark"
                >
                  Our Team
                </Nav.Link>
                <NavDropdown
                  title="Gallery"
                  id="collapsible-nav-dropdown"
                  className="fw-bold text-dark"
                  style={{ color: "black !important" }}
                  show={show}
                  onMouseEnter={() => handleToggle(true)}
                  onMouseLeave={() => handleToggle(false)}
                  ref={dropdownRef}
                  onToggle={(isOpen) => setShow(isOpen)}
                >
                  <NavDropdown.Item
                    as={NavLink}
                    to="/gallery/wedding"
                    className="text-center text-xl-left p-1"
                  >
                    Wedding
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/gallery/family&baby"
                    className="text-center p-2"
                  >
                    Family & Baby Portraits
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/gallery/maternity"
                    className="text-center p-1"
                  >
                    Maternity
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </>
  );
}

export default MenuBar;
