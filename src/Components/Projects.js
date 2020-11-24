import {React, useEffect, useState} from 'react';
import { Container, Card, CardColumns} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import  firebase  from '../Firebase/ConfigFirebase';



//! Import CSS !//
import '../Assets/Css/Core/App.css';
import '../Assets/Css/Projects/Projects.css';

const Projects = () => {
  const [projets, setProjets]=useState([])

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      const data = await db.collection("projets").get()
      setProjets(data.docs.map(doc => doc.data()))
    }
    fetchData();
  }, [])

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
        {projets.map(projet => (
          <a href={projet.link} target="_blank" rel="noopener noreferrer" className="white">
          <Card className="bg-blue2 py-2 projetcard hovercard">
            <Card.Body>
              <Card.Title className="white text-center m-0">{projet.name}</Card.Title>
              <Card.Text className="white text-center mt-2">
              <FontAwesomeIcon icon={faGithub} size="3x" className="white"/>
              </Card.Text>
            </Card.Body>
          </Card>
          </a>
        ))}
        </CardColumns>
      </Container>

    </Container>
    )
}
export default Projects;