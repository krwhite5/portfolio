import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home">Katherine White</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item href="#AboutMe">About Me</NavDropdown.Item>
              <NavDropdown.Item href="#Projects">
                Projects
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#Contact">
                Contact
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;