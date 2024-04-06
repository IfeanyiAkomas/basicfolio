import { useMediaQuery } from "@material-ui/core";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Quote = ({ quote }) => {
  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // Adjust the breakpoint as needed

  return (
    <div className="website">
      <div className="site-container" style={{ marginTop: "10px" }}>
        <FaQuoteLeft
          size={40}
          color="indigo"
          style={{ alignSelf: "flex-start", marginBottom: "10px" }}
        />
        <div>
          <h2 style={{ fontSize: isSmallScreen ? 16 : 20,  }}>{quote}</h2>
        </div>
      </div>
    </div>
  );
};

export default Quote;
