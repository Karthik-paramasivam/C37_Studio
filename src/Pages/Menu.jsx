import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../Images/Logo.jpg'; // Import the logo image
import 'bootstrap/dist/css/bootstrap.min.css';


function MenuBar() {
  return (
    
    <div className='container-fluid'>
    <Navbar collapseOnSelect expand="lg" className="bg-dark" fixed='top'>
      <Container className='p-0  ps-1 pe-1 m-0'>
        <Navbar.Brand href="#home">
        <img src={Logo} alt="Logo" className='img-fluid' style={{height:"65px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='fw-bold text-white'>Home</Nav.Link>
            <Nav.Link className='fw-bold text-white'>About</Nav.Link>
            <Nav.Link className='fw-bold text-white'>Wedding Photography</Nav.Link>
            <Nav.Link className='fw-bold text-white'>Family Photography</Nav.Link>
            <Nav.Link className='fw-bold text-white'>Baby Photography</Nav.Link>



            {/* <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Wedding
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    </div>
  );
}

export default MenuBar;