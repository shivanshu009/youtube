import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Footer from '../includes/Footer';

const Contact = () => {
  return (
    <Container className="container c mt-5">
      <Row>
        <Col md={6}>
          <h2>Contact Us</h2>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 1234 Street Name, City, State, 12345</p>
          <p><FontAwesomeIcon icon={faPhone} /> (123) 456-7890</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> email@example.com</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
          </div>
        </Col>
        <Col md={6}>
          <h2>Send Us a Message</h2>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
      <Footer/>
    </Container>
  );
};

export default Contact;
