import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Quote = ({ quote }) => {
  return (
    <div className="website">
      <div className="site-container" style={{ marginTop: "50px" }}>
        <FaQuoteLeft
          size={40}
          color="indigo"
          style={{ alignSelf: "flex-start" }}
        />
        <div>
          <h2 style={{ fontFamily: "monospace" }}>{quote}</h2>
        </div>
      </div>
    </div>
  );
};

export default Quote;
