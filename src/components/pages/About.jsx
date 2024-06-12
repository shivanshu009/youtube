import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../includes/Footer';

const About = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={12} className="text-center mb-4">
          <h1>About Us</h1>
          <p>Welcome to our YouTube Music Channel! Discover more about our journey, our team, and what drives us to bring you the best in music entertainment.</p>
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <h2>Our Story</h2>
          <p>Founded in [Year], our music channel started with a simple mission: to share the love of music with the world. Over the years, we've grown into a vibrant community of music lovers and creators, bringing you the latest hits, timeless classics, and hidden gems from around the globe.</p>
          <p>We believe that music is a universal language that connects people, transcending boundaries and bringing joy to everyone's life. Our channel is dedicated to curating a diverse range of music, ensuring there's something for every listener.</p>
        </Col>
        <Col md={6}>
          <Image src="https://via.placeholder.com/500x300" fluid />
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <Image src="https://via.placeholder.com/500x300" fluid />
        </Col>
        <Col md={6}>
          <h2>Our Team</h2>
          <p>Our team is a group of passionate music enthusiasts, each bringing their unique expertise and love for music to the table. From sound engineers and video editors to content curators and social media managers, we work tirelessly to create and share high-quality music content with you.</p>
          <p>Meet the people who make it all happen:</p>
          <ul>
            <li><strong>John Doe</strong> - Founder & CEO</li>
            <li><strong>Jane Smith</strong> - Head of Content</li>
            <li><strong>Emily Johnson</strong> - Lead Sound Engineer</li>
            <li><strong>Michael Brown</strong> - Video Editor</li>
            <li><strong>Sarah Davis</strong> - Social Media Manager</li>
          </ul>
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <h2>Our Vision</h2>
          <p>Our vision is to become the go-to destination for music lovers worldwide. We aim to create a platform where you can discover new artists, enjoy live performances, and connect with other music enthusiasts. By continuously evolving and embracing new technologies, we strive to enhance your music experience and keep you engaged with fresh and exciting content.</p>
        </Col>
        <Col md={6}>
          <Image src="https://via.placeholder.com/500x300" fluid />
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <Image src="https://via.placeholder.com/500x300" fluid />
        </Col>
        <Col md={6}>
          <h2>Our Content</h2>
          <p>On our channel, you'll find a wide variety of music content, including:</p>
          <ul>
            <li>Latest music videos</li>
            <li>Live performances and concerts</li>
            <li>Exclusive interviews with artists</li>
            <li>Behind-the-scenes footage</li>
            <li>Music reviews and recommendations</li>
            <li>Interactive playlists</li>
          </ul>
          <p>We also love to feature up-and-coming artists, giving them a platform to showcase their talent and reach a broader audience.</p>
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <h2>Join Our Community</h2>
          <p>We invite you to join our growing community of music lovers! Subscribe to our channel, follow us on social media, and stay updated with our latest content. Your support and feedback are invaluable to us, and we look forward to sharing our musical journey with you.</p>
        </Col>
        <Col md={6}>
          <Image src="https://via.placeholder.com/500x300" fluid />
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <Image src="https://via.placeholder.com/500x300" fluid />
        </Col>
        <Col md={6}>
          <h2>Contact Us</h2>
          <p>Have any questions, suggestions, or just want to say hello? We'd love to hear from you! Reach out to us through our <a href="/contact">contact page</a> and we'll get back to you as soon as possible.</p>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default About;
