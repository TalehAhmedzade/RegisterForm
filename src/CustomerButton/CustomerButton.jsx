import React, { useEffect, useRef, useState } from "react";
import "./customerStyle.css";
const CustomerButton = ({ text, warnMessage, hint }) => {
  const[isVisible,setIsVisible] = useState(false)
  const handleButtonEnter = () => {
    hint&&setIsVisible(true)
  };
  const handleButtonLeave = () => {
    setIsVisible(false)
  };
  return (
    <div className="customer-button">
      <button
        className={warnMessage && "red"}
        onClick={() => warnMessage && console.warn(warnMessage)}
        onMouseEnter={handleButtonEnter}
        onMouseLeave={handleButtonLeave}
      >
        {text}
      </button>
      {isVisible && <p>{hint}</p>}
    </div>
  );
};
export default CustomerButton;
