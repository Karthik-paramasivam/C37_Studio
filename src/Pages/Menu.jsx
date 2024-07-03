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

import React, { useRef, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Images/studio37Logob.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";
import { NavLink } from 'react-router-dom';


function MenuBar() {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = (nextShow) => {
    setShow(nextShow);
  };

  useEffect(() => {
    // Function to handle click and focus outside of the dropdown
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('focusin', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('focusin', handleOutsideClick);
    };
  }, []);

  return (
    <>
      <Container fluid>
        <Navbar collapseOnSelect expand="lg" className="bg-light" fixed='top'>
          <Container className='ps-md-1 pe-md-1'>
            <Navbar.Brand  className='slideleft'>
              <img src={Logo} alt="Logo" className='img-fluid' style={{ height: "45px" }} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className='slideright'>
              <Nav className="ms-auto me-lg-5 pe-lg-5">
                <Nav.Link as={NavLink} to="/"  className='fw-bold text-dark'>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/ourteam" className='fw-bold text-dark'>Our Team</Nav.Link>
                <NavDropdown
                  title="Gallery"
                  id="collapsible-nav-dropdown"
                  className='fw-bold text-dark'
                  show={show}
                  onMouseEnter={() => handleToggle(true)}
                  onMouseLeave={() => handleToggle(false)}
                  ref={dropdownRef}
                  onToggle={(isOpen) => setShow(isOpen)}
                >
                  <NavDropdown.Item href="#action/3.1" className='text-center text-xl-left p-1'>
                    Wedding
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className='text-center p-2'>
                    Family & Baby Portraits
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" className='text-center p-1'>Maternity</NavDropdown.Item>
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
