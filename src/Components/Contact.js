import { Container, Col, Row, Form, Alert} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';

//! Import CSS !//
import '../Assets/Css/Core/App.css';
import '../Assets/Css/Contact/Contact.css';

const Contact = () => {
  

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('Gmail', 'template_g85tepx', e.target, 'user_wtTYyOEuraUmsvmyrqoSs')
      .then((result) => {
          console.log(result.text);
          document.querySelector('.form-message').innerHTML =
            "Votre Message est bien envoyé. Merci !"
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  
    return (
    <Container fluid className="bg-blue2 p-0 pb-5" id="contact">
      <Container>
      <div className="module-header">
        <h2 className="module-title">
          N'HESITEZ PAS A ME CONTACTER
        <span className="module-title span">CONTACT</span>
        </h2>
        <div className="module-line"></div>
      </div>
      <Container className="pt-3 pb-5">
          <Row>
            <Col lg={{span: 6, offset : 3}}>
              <Form onSubmit={sendEmail}>
                <Form.Group className=" mb-4">
                  <Form.Control type="text" placeholder="Titre" name="title" required="required" className="text-size-14 letter-space-1"/>{}
                </Form.Group>
                <Form.Group className="mt-3 mb-4">
                  <Form.Control type="name" placeholder="Nom" name="user_name" required="required" className="text-size-14 letter-space-1"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1" className="mb-4">
                  <Form.Control type="email" placeholder="Adresse e-mail" name="user_email" required="required" className="text-size-14 letter-space-1"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-4">
                  <Form.Control as="textarea" rows={5} placeholder="Votre Message" name="message" required="required" className="text-size-14 letter-space-1"/>
                </Form.Group>
                <button type="submit" className="w-100 py-2 rounded form-button letter-space-1 text-size-14">Me Contacter</button>
                <Alert className="form-message text-center m-0 p-0 pt-1"></Alert>
              </Form>
            </Col>
          </Row>
      </Container>
      </Container>
      {/* <Container fluid className="bg-blue1 child">
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
        
      </Container> */}
    </Container>
    )
}
export default Contact;