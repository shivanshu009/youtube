import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Header.css';


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container c">
        <div className="row">
          {/* Company Information */}
          <div className="col-md-3 mb-3">
            <h5>Company</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-md-3 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About</a></li>
              <li><a href="/services" className="text-white">Services</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled d-flex">
              <li className="mr-3">
                <a href="https://facebook.com" className="text-white">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="mr-3">
                <a href="https://twitter.com" className="text-white">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="mr-3">
                <a href="https://instagram.com" className="text-white">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="mr-3">
                <a href="https://linkedin.com" className="text-white">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-2 mb-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                123 Main St, Anytown, USA
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +1 (123) 456-7890
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
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
