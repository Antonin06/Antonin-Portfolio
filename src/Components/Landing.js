import React from 'react';
import { Container, Nav} from 'react-bootstrap';
import { Link } from "react-scroll";
import ParticleAnimation from 'react-particle-animation';
import Typical from 'react-typical';

//! Import CSS !//
import '../Assets/Css/Core/App.css';
import '../Assets/Css/Landing/Landing.css';



const Landing = () => {
    return (
    <Container fluid className=" p-0 vh-100" id="home">
      <ParticleAnimation 
        interactive={false}
        numParticles={300}
        background={{ r: 22, g: 33, b: 62, a: 1 }}
        particleSpeed={0.3}
        particleRadius={0.5}
        lineWidth={0.3}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <Container fluid className="intro">
        <h5 className="text-left text-white letter-space-3">Hello<span className="pink ml-1">,</span></h5>
        <h1 className="text-left text-white letter-space-3 text-uppercase">Je suis Antonin Avon<span className="pink ml-1">,</span></h1>
        <h5 className="text-left text-white letter-space-3">
          <Typical
          steps={[
          1500,
          'Je suis développeur Web Junior specialisé Front-End ', 1500,
          // "Passionné par le Front-End 💻", 1500,
          "Passionné par le Design 🎨", 1500,
          "Passionné par la Photographie 📸", 1500,
          "J'aime le travail en équipe 👥", 1500,
          "J'aime aussi être autonome 👤", 1500,
          "Je recherche une entreprise d'accueil pour une alternance", 3000,
          ]}
          start
          loop={Infinity}
          />
        </h5>                  
      </Container>
      <Container>
      <Nav.Link className="mr-2 nav-item active">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-49}
          duration={500}
          className="nav-link"
        >
          <div class="box">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
        </Nav.Link>

      </Container>
    </Container>
    )
}
export default Landing;