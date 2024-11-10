import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"; 

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">DINOPOLIS</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/trending">TRENDING</Nav.Link>
            <Nav.Link as={Link} to="/superhero">SUPERHERO</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
