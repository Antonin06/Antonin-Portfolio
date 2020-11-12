import React from 'react';
import { Container, Card, CardColumns} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


//! Import CSS !//
import '../Assets/Css/Core/App.css';
import '../Assets/Css/Projects/Projects.css';

const Projects = () => {
    return (
    <Container fluid className="bg-blue1 pb-5" id="projets">
      <div className="module-header">
        <h2 className="module-title">
          PROJETS
        <span className="module-title span">PORTFOLIO</span>
        </h2>
        <div className="module-line"></div>
      </div>
      <Container className="pt-3 pb-3">
        <CardColumns>
        <a href="https://github.com/Antonin06/Flutter_MapBox_PopUpMaker_UserLocation" target="_blank" rel="noopener noreferrer" className="white">
          <Card className="bg-blue2 py-2 projetcard hovercard">
            <Card.Body>
              <Card.Title className="white text-center m-0">Flutter Mapbox</Card.Title>
              <Card.Text className="white text-center mt-2">
              <FontAwesomeIcon icon={faGithub} size="3x" className="white"/>
              </Card.Text>
            </Card.Body>
          </Card>
          </a>
          <a href="https://github.com/Antonin06/react-firebase-shop" target="_blank" rel="noopener noreferrer" className="white">
          <Card className="bg-blue2 py-2 projetcard hovercard">
            <Card.Body>
              <Card.Title className="white text-center">E-Shop Firebase React</Card.Title>
              <Card.Text className="white text-center">
              <FontAwesomeIcon icon={faGithub} size="3x" className="white"/>
              </Card.Text>
            </Card.Body>            
          </Card>
          </a>
          <a href="https://github.com/Antonin06/Weather-App-React" target="_blank" rel="noopener noreferrer" className="white">
          <Card className="bg-blue2 py-2 projetcard hovercard">
            <Card.Body>
              <Card.Title className="white text-center">Weather App</Card.Title>
              <Card.Text className="white text-center">
              <FontAwesomeIcon icon={faGithub} size="3x" className="white"/>
              </Card.Text>
            </Card.Body>            
          </Card>
          </a>
          <a href="https://github.com/Antonin06/Instagram-binome" target="_blank" rel="noopener noreferrer" className="white">
          <Card className="bg-blue2 py-2 projetcard hovercard">
            <Card.Body>
              <Card.Title className="white text-center m-0">Instagram Clone</Card.Title>
              <Card.Text className="white text-center mt-2">
              <FontAwesomeIcon icon={faGithub} size="3x" className="white"/>
              </Card.Text>
            </Card.Body>
          </Card>
          </a>
          <a href="https://github.com/Shivalita/ComparOperator" target="_blank" rel="noopener noreferrer" className="white">
          <Card className="bg-blue2 py-2 projetcard hovercard">
            <Card.Body>
              <Card.Title className="white text-center">Comparateur Agence Voyage</Card.Title>
              <Card.Text className="white text-center">
              <FontAwesomeIcon icon={faGithub} size="3x" className="white"/>
              </Card.Text>
            </Card.Body>            
          </Card>
          </a>
          <a href="https://github.com/Antonin06/React-Bootstrap-Convert" target="_blank" rel="noopener noreferrer" className="white">
            <Card className="bg-blue2 py-2 projetcard hovercard">
            <Card.Body>
              <Card.Title className="white text-center">Convertisseur</Card.Title>
              <Card.Text className="white text-center">
              <FontAwesomeIcon icon={faGithub} size="3x" className="white"/>
              </Card.Text>
            </Card.Body>            
          </Card>
          </a>
        </CardColumns>
      </Container>

    </Container>
    )
}
export default Projects;