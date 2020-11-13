import { Container, Col, Row, Form, Alert} from 'react-bootstrap';
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
    <Container fluid className="bg-blue2 pb-5" id="contact">
      <div className="module-header">
        <h2 className="module-title">
          N'HESITEZ PAS A ME CONTACTER
        <span className="module-title span">CONTACT</span>
        </h2>
        <div className="module-line"></div>
      </div>
      <Container className="pt-3 pb-3">
          <Row>
            <Col lg={{span: 6, offset : 3}}>
              <Form onSubmit={sendEmail}>
                <Form.Group>
                  <Form.Control type="name" placeholder="Nom" name="user_name" required="required" className="text-size-14 letter-space-1"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Control type="email" placeholder="Adresse e-mail" name="user_email" required="required" className="text-size-14 letter-space-1"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows={3} placeholder="Votre Message" name="message" required="required" className="text-size-14 letter-space-1"/>
                </Form.Group>
                <button type="submit" className="w-100 py-2 rounded form-button letter-space-1 text-size-14">Me Contacter</button>
                <Alert className="form-message text-center m-0 p-0 pt-1"></Alert>
              </Form>
            </Col>
          </Row>
      </Container>
    </Container>
    )
}
export default Contact;