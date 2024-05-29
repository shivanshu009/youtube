import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faVideo, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Contact.css';
import Footer from '../includes/Footer';


const About = () => {
  return (
    <Container className="container c mt-5">
      <Row className="mb-5">
        <Col>
          <h1>About Us</h1>
          <p>
            Welcome to our Music Channel! We are dedicated to bringing you the best music content on YouTube. From the latest hits to timeless classics, we cover it all. Our team of music enthusiasts works tirelessly to create and curate the best playlists, music videos, and live performances for our audience.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faMusic} /> Our Music</Card.Title>
              <Card.Text>
                Discover a wide variety of genres and artists. Our channel features everything from pop and rock to jazz and classical music. We update our playlists regularly to keep you entertained.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faVideo} /> Music Videos</Card.Title>
              <Card.Text>
                Enjoy high-quality music videos and exclusive live performances. We bring you behind-the-scenes footage and special interviews with your favorite artists.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title><FontAwesomeIcon icon={faUsers} /> Meet the Team</Card.Title>
              <Card.Text>
                Our team is made up of passionate music lovers, talented producers, and creative directors. Get to know the people behind the channel and learn more about what drives us.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <h2>Follow Us</h2>
          <p>
            Stay connected with us through our social media channels. Follow us on YouTube, Facebook, Twitter, and Instagram for the latest updates and exclusive content.
          </p>
          <div className="social-icons">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <FontAwesomeIcon icon={faFacebookF} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </Col>
      </Row>
      <Footer/>
    </Container>

  );
};

export default About;
