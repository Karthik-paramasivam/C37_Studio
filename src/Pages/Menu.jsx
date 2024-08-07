import React, { useRef, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../Images/studio37Logob.webp";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function MenuBar() {
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = useState(false); // State to manage navbar collapse
  const [hideNavbar, setHideNavbar] = useState(false);
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

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick); // Added touchstart for mobile devices
    document.addEventListener("focusin", handleOutsideClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick); // Clean up touchstart event listener
      document.removeEventListener("focusin", handleOutsideClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styl = `
  .dropdown-item.active, .dropdown-item:active {
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
  .dropdown-menu {
    position: static;
    background-color: #f8f9fa;
    border: 0px solid rgb(0, 0, 0, 0.1);
  }
  .dropdown-item.active, .dropdown-item:active {
    transform: scale(1.0);
    font-weight: bold;
    background-color: rgb(0, 0, 0, 0.1)!important;
    color: black !important;
    border-left: 5px solid black;
    border-radius: 3px;
  }
  .navbar.custom-navbar {
    transition: transform 0.3s ease-in-out;
  }
  .navbar.custom-navbar.hidden {
    transform: translateY(-100%);
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
          className={`shadow-sm m-0 p-0 border border-light custom-navbar ${hideNavbar ? 'hidden' : ''}`}
          fixed="top"
          expanded={expanded}
          style={{ backgroundColor: "#fffffff3" }}
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
                  className="m-0 m-auto text-center"
                >
                  ✕
                </span>
              ) : (
                <FontAwesomeIcon icon={faBars} size="1x" />
              )}{" "}
            </Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav" className="slideright custom-navbar-collapse">
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
