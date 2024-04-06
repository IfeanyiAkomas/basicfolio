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
          style={{ display: "flex", justifyContent: "center", color: "indigo" }}
          href="https://wa.me/+2347037432078"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp <FaWhatsapp color="lemongreen" size={20} />
        </a>
        <a
          href={`tel:${+2347037432078}`}
          onClick={handlePhoneLinkClick}
          style={{ color: "indigo" }}
        >
          Call on phone {+2347037432078}
        </a>
      </div>
    </div>
  );
};

export default QuickAction;
