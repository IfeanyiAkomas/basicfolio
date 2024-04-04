import React from 'react';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a href="https://wa.me/+2347037432078" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="mailto:akomastech@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://www.instagram.com/ifeanyiakomas" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/IfeanyiAkomas" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://github.com/IfeanyiAkomas" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default ContactSection;
