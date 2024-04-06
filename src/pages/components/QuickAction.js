import React from "react";
import { FaWhatsapp } from "react-icons/fa";


const QuickAction = () => {
  const handlePhoneLinkClick = () => {
    window.location.href = `tel:${+2347037432078}`;
  };

  return (
    <div className="website">
      <div className="site-container">
        <h2>Contact me urgently</h2>
        <a
          style={{ display: "flex", justifyContent: "center", color: "indigo", textDecoration: 'none', padding: "10px", border: "1px solid", borderRadius: "10px" }}
          href="https://wa.me/+2347037432078"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp <FaWhatsapp color="lemongreen" size={20} />
        </a>
        <a
          href={`tel:${+2347037432078}`}
          onClick={handlePhoneLinkClick}
          style={{ color: "indigo", textDecoration: 'none', padding: "10px", margin: "5px", border: "1px solid", borderRadius: "10px" }}
        >
          Call me {+2347037432078}
        </a>
      </div>
    </div>
  );
};

export default QuickAction;
