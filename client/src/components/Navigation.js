import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
    <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="https://threed-calculator.onrender.com/">3D-calc</Navbar.Brand>          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="https://threed-calculator.onrender.com/about">About</Nav.Link>
              <Nav.Link href="https://threed-calculator.onrender.com/contacts">Contacts</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navigation;