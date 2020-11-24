import { Container, Col, Row} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
    <Container fluid className="p-0 m-0 sticky-bottom bg-blue1">
      <Container>

      <Row className="p-0 m-0">
        <Col className="d-flex pt-5 pb-4 justify-content-center">
        <a href="https://www.facebook.com/antonin.avon.7/" target="_blank" rel="noopener noreferrer" className="white"><FontAwesomeIcon icon={faFacebookF} size="2x" className="mx-4"/></a>
        <a href="https://www.linkedin.com/in/antonin-avon/" target="_blank" rel="noopener noreferrer" className="white"><FontAwesomeIcon icon={faLinkedinIn} size="2x" className="mx-4"/></a>
        <a href="https://www.instagram.com/anto_nova06/" target="_blank" rel="noopener noreferrer" className="white"><FontAwesomeIcon icon={faInstagram} size="2x" className="mx-4"/></a>
        <a href="https://github.com/Antonin06" target="_blank" rel="noopener noreferrer" className="white"><FontAwesomeIcon icon={faGithub} size="2x" className="mx-4"/></a>
        </Col>
      </Row>
      <p className="text-center text-white m-0 pt-3 pb-4 letter-space-1 text-size-14">2020 &copy; Made with ❤️ by Antonin Avon</p>
      </Container>
      
    </Container>
    )
}
export default Footer;