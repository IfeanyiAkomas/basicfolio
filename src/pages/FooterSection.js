import React from "react";
import {
  FaWhatsapp,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#aboutsection">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              {/* <li>
                <a href="#contact">Contact</a>
              </li> */}
            </ul>
          </div>
          <div className="footer-column">
            <h3>Let's Connect!</h3>
            <p>
              Follow me on social media to stay updated with my tech progress
              and updates.
            </p>
            <div className="social-icons">
              <a href="https://wa.me/+2347037432078">
                <FaWhatsapp />
              </a>

              <a
                href="mailto:akomastech@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
              <a href="https://www.linkedin.com/in/ifeanyiakomas">
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/IfeanyiAkomas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/IfeanyiAkomas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/ifeanyiakomas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} AI Technologies. All rights reserved. |
            Powered by AI Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
