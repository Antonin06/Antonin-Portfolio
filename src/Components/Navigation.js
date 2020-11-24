import { React, useState } from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from "react-scroll";
import pdf from '../Assets/cv.pdf';

//! Import CSS !//
import '../Assets/Css/Core/App.css';
import '../Assets/Css/Navigation/Navigation.css';

const Navigation = () => {
  const [expanded, setExpanded] = useState(false);
  
    return (

    <Navbar collapseOnSelect expanded={expanded} expand="lg" className="sticky-top p-lg-0 bg-white">
      <Container>
      <Link
        activeClass="active"
        to="home"
        offset={0}
        duration={500}
        className="blue1 letter-space-3 text-size-11 text-uppercase nav-item active"
      >
      <Nav.Link href="Accueil" className="p-0">
        <Navbar.Brand  className="blue2 letter-space-3">ANTONIN<span className="text-size-22 pink">.</span>AVON</Navbar.Brand>
      </Nav.Link>
    </Link>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
          <li className="nav-item m-0">
            <Link
                activeClass="active"
                to="home"
                className="nav-link py-4 px-4 blue1 letter-space-3 text-size-11 text-uppercase hover-nav"
                spy={true}
                offset={0}
                duration={500}
                onClick={() => setExpanded(false)}
                >
                Accueil
              </Link>
          </li>
           {/* ABOUT */}

        {/* DISPLAY XL BETWEEN 992 - 1200px */}
        <li className="nav-item m-0 d-none d-xl-block">
            <Link
                activeClass="active"
                to="about"
                className="nav-link py-4 px-4 blue1 letter-space-3 text-size-11 text-uppercase hover-nav"
                spy={true}
                offset={-64}
                duration={500}
                onClick={() => setExpanded(false)}
                >
                A Propos
            </Link>
        </li>

        {/* DISPLAY LG BETWEEN 992 - 1200px */}
        <li className="nav-item m-0 d-none d-lg-block d-xl-none">
            <Link
                activeClass="active"
                to="about"
                className="nav-link py-4 px-4 blue1 letter-space-3 text-size-11 text-uppercase hover-nav "
                spy={true}
                offset={-64}
                duration={500}
                onClick={() => setExpanded(false)}
                >
                A Propos
            </Link>
        </li>
        
      
       {/* DISPLAY MD BETWEEN 768 - 991px */}
       <li className="nav-item m-0 d-block d-lg-none">
            <Link
                activeClass="active"
                to="about"
                className="nav-link py-4 px-4 blue1 letter-space-3 text-size-11 text-uppercase hover-nav"
                spy={true}
                offset={-315}
                duration={500}
                onClick={() => setExpanded(false)}
                >
                A Propos
            </Link>
        </li>

        {/* PROJET */}

        {/* DISPLAY XL BETWEEN 992 - 1200px */}
        <li className="nav-item m-0 d-none d-xl-block">
            <Link
                activeClass="active"
                to="projets"
                className="nav-link py-4 px-4 blue1 letter-space-3 text-size-11 text-uppercase hover-nav"
                spy={true}
                offset={-64}
                duration={500}
                onClick={() => setExpanded(false)}
                >
                PROJETS
            </Link>
        </li>

        {/* DISPLAY LG BETWEEN 992 - 1200px */}
        <li className="nav-item m-0 d-none d-lg-block d-xl-none">
            <Link
                activeClass="active"
                to="projets"
                className="nav-link py-4 px-4 blue1 letter-space-3 text-size-11 text-uppercase hover-nav "
                spy={true}
                offset={-64}
                duration={500}
                onClick={() => setExpanded(false)}
                >
                PROJETS
            </Link>
        </li>
        
      
       {/* DISPLAY MD BETWEEN 768 - 991px */}
       <li className="nav-item m-0 d-block d-lg-none">
            <Link
                activeClass="active"
                to="projets"
                className="nav-link py-4 px-4 blue1 letter-space-3 text-size-11 text-uppercase hover-nav"
                spy={true}
                offset={-315}
                duration={500}
                onClick={() => setExpanded(false)}
                >
                PROJETS
            </Link>
        </li>
        
        {/* CONTACT */}

        {/* DISPLAY XL BETWEEN 992 - 1200px */}
        <li className="nav-item m-0 d-none d-xl-block">
            <Link
                activeClass="active"
                to="contact"
                className="nav-link py-4 px-4 blue1 letter-space-3 text-size-11 text-uppercase hover-nav"
                spy={true}
                offset={-64}
                duration={500}
                onClick={() => setExpanded(false)}
                >
                CONTACT
            </Link>
        </li>

        {/* DISPLAY LG BETWEEN 992 - 1200px */}
        <li className="nav-item m-0 d-none d-lg-block d-xl-none">
            <Link
                activeClass="active"
                to="contact"
                className="nav-link py-4 px-4 blue1 letter-space-3 text-size-11 text-uppercase hover-nav "
                spy={true}
                offset={-64}
                duration={500}
                onClick={() => setExpanded(false)}
                >
                CONTACT
            </Link>
        </li>
        
      
       {/* DISPLAY MD BETWEEN 768 - 991px */}
       <li className="nav-item m-0 d-block d-lg-none">
            <Link
                activeClass="active"
                to="contact"
                className="nav-link py-4 px-4 blue1 letter-space-3 text-size-11 text-uppercase hover-nav"
                spy={true}
                offset={-315}
                duration={500}
                onClick={() => setExpanded(false)}
                >
                CONTACT
            </Link>
        </li>
            
        <li className="m-0 d-none d-xl-block">
            <a href={pdf} without rel="noopener noreferrer" target="_blank" className="nav-link py-4 px-4 letter-space-3 text-size-11 text-uppercase hover-nav pink">mon cv</a>
        </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  

    );
    
}
export default Navigation;
