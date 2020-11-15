import React from 'react';
import { Container, Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import Avatar from "../Assets/Images/antonin_avon.jpg"
import ReactRoundedImage from "react-rounded-image";

//! Import CSS !//
import '../Assets/Css/Core/App.css';
import '../Assets/Css/About/About.css';

const About = () => {
    return (
        <Container fluid className="bg-info pb-5 bg-blue2" id="about">
      <div className="module-header">
        <h2 className="module-title">
          PRESENTATION
        <span className="module-title span">QUI SUIS-JE ?</span>
        </h2>
        <div className="module-line"></div>
      </div>
      <Container className="mb-5 mt-5 shadow-lg bg-blue1">
          <Row className="py-5">

            <Col lg={4} className="d-flex justify-content-center">
            <ReactRoundedImage 
              className="justify-content-center"              
              image={Avatar}
              roundedColor="#16213E"
              imageWidth="225"
              imageHeight="225"
              roundedSize="12"
              hoverColor="#E94560"
              />
            </Col>

            <Col lg={8}>
              <Row>
                <Col lg={{ span: 4, offset: 0}} md={{ span: 4, offset: 4 }} sm={{ span: 4, offset: 4 }} xs={{ span: 4, offset: 4 }} >
                <h4 className="text-lg-left text-md-center text-sm-center text-center white letter-space-1">Antonin Avon</h4>  
                </Col>
              </Row>
              <Row>
                <Col lg={{ span: 8, offset: 0}} md={{ span: 8, offset: 2 }} sm={{ span: 10, offset: 1 }} xs={{ span: 12, offset: 0 }} className="d-md-inline-flex d-sm-inline-flex d-inline-flex justify-content-md-center justify-content-center align-items-sm-center align-items-center justify-content-sm-center justify-content-lg-start mt-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} size="1x" className="mr-2 pink"/>
                <div className="pink letter-space-1 text-size-14">Roanne, France</div>
                <FontAwesomeIcon icon={faBriefcase} size="1x" className="ml-5 mr-2 pink"/>
                <div className="pink letter-space-1 text-size-14">Cherche une Alternance</div>
                </Col>
              </Row>
              <Row>
                <Col xs={{ span: 12, offset: 0 }} className="mt-3 px-3 white">
                  <div className="d-block letter-space-1 text-size-14">
                    Salut ! Je m'appelle Antonin Avon, 26 ans et bientôt diplômé du titre professionnel <span className="font-weight-bold text-underline">Développeur Web et Web Mobile</span> grâce aux compétences acquises pendant ma formation de 8 mois à Simplon Roanne.<br/>
                    Passionné et fortement attiré par le Front-End, le Design et l'UI, j'aimerais continuer mes études dans cette voie pour enrichir mes compétences.<br/>
                    Je cherche activement une entreprise d'accueil qui pourrait me prendre en contrat d'apprentissage ou de professionnalisation pour décembre 2020. Je suis Mobile sur la région Auvergne-Rhône-Alpes et PACA. Contactez-moi
                  </div>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center mt-3 white">
              <h4><span class="badge badge-pill py-1 px-3 pills mt-2 ml-3 mr-2 letter-space-1 text-size-14">HTML</span></h4>
              <h4><span class="badge badge-pill py-1 px-3 pills mt-2 mr-2 letter-space-1 text-size-14">CSS</span></h4>
              <h4><span class="badge badge-pill py-1 px-3 pills mt-2 mr-2 letter-space-1 text-size-14">BOOTSTRAP</span></h4>
              <h4><span class="badge badge-pill py-1 px-3 pills mt-2 mr-2 letter-space-1 text-size-14">JS</span></h4>
              <h4><span class="badge badge-pill py-1 px-3 pills mt-2 mr-2 letter-space-1 text-size-14">REACT</span></h4>
              <h4><span class="badge badge-pill py-1 px-3 pills mt-2 mr-2 letter-space-1 text-size-14">FLUTTER</span></h4>
              <h4><span class="badge badge-pill py-1 px-3 pills mt-2 mr-2 letter-space-1 text-size-14">ADOBE XD</span></h4>
              </Row>
            </Col>
          </Row>
      </Container>
    </Container>
    )
}
export default About;