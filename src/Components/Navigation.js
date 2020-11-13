import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-scroll";
import pdf from "../Assets/cv.pdf";

//! Import CSS !//
import '../Assets/Css/Core/App.css';
import '../Assets/Css/Navigation/Navigation.css';


const Navigation = () => {
    return (
        <Navbar expand="lg" className="sticky-top bg-white py-lg-0">
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-auto custom-toggler"/>
      <Container>
        <Navbar.Brand  className="d-none d-lg-block blue2 letter-space-3">ANTONIN<span className="text-size-22 pink">.</span>AVON</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center white">
            <Nav className="">
            <Nav.Link className="p-0 nav-item active">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="nav-link py-4 px-3 blue1 letter-space-3 text-size-11 text-uppercase hover-nav"
                >
                  Accueil
                </Link>
            </Nav.Link>
            <Nav.Link className="p-0 nav-item active">
              <Link 
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-49}
                duration={500}
                className="nav-link py-4 px-3 blue1 letter-space-3 text-size-11 text-uppercase hover-nav"
              >
                A Propos
              </Link>
            </Nav.Link>
            <Nav.Link className="p-0 nav-item active hover-nav">
                <Link
                  activeClass="active"
                  to="projets"
                  spy={true}
                  smooth={true}
                  offset={-45}
                  duration={500}
                  className="nav-link py-4 px-3 blue1 letter-space-3 text-size-11 text-uppercase hover-nav"
                >
                  Projets
                </Link>
              </Nav.Link>
            <Nav.Link className="p-0 nav-item active hover-nav">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="nav-link py-4 px-3 blue1 letter-space-3 text-size-11 text-uppercase "
                >
                  Contact
                </Link>
            </Nav.Link>
            {/* <Nav.Link className="p-0  nav-item active hover-nav">
                <Link
                  href={pdf}
                  
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="nav-link py-4 px-3 blue1 letter-space-3 text-size-11 text-uppercase "
                >
                  Contact
                </Link>
            </Nav.Link> */}
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
}
export default Navigation;