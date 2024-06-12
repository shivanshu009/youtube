import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '60px 0' , marginTop: '25px'}}>
      <div className="container">
        <div className="row">
          {/* Company Information */}
          <div className="col-md-3 mb-3" style={{ marginBottom: '30px' }}>
            <h5>Company</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-md-3 mb-3" style={{ marginBottom: '30px' }}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled" style={{ listStyleType: 'none' }}>
              <li><a href="/" className="text-white" style={{ textDecoration: 'none' }}>Home</a></li>
              <li><a href="/about" className="text-white" style={{ textDecoration: 'none' }}>About</a></li>
              <li><a href="/services" className="text-white" style={{ textDecoration: 'none' }}>Services</a></li>
              <li><a href="/contact" className="text-white" style={{ textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-3" style={{ marginBottom: '30px' }}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li style={{ marginRight: '10px' }}>
                <a href="https://facebook.com" className="text-white">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li style={{ marginRight: '10px' }}>
                <a href="https://twitter.com" className="text-white">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li style={{ marginRight: '10px' }}>
                <a href="https://instagram.com" className="text-white">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li style={{ marginRight: '10px' }}>
                <a href="https://linkedin.com" className="text-white">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-2 mb-3" style={{ marginBottom: '30px' }}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '5px' }} />
                123 Main St, Anytown, USA
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
                +1 (123) 456-7890
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
                info@example.com
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
