import "/src/LiveCircle/dice.css";
import React, { useState, useEffect } from "react";

export default function Dice(props) {
  const [state, setState] = useState({
    left: Math.floor(Math.random() * 6) + 1,
    right: Math.floor(Math.random() * 6) + 1,
  });

  function handleKeydown(e) {
    if (e.code === "Space") {
      setState({
        left: Math.floor(Math.random() * 6) + 1,
        right: Math.floor(Math.random() * 6) + 1,
      });
    }
  }

  function handleLeftClick() {
    setState((prevState) => ({
      ...prevState,
      left: Math.floor(Math.random() * 6) + 1,
    }));
  }

  function handleRightClick() {
    setState((prevState) => ({
      ...prevState,
      right: Math.floor(Math.random() * 6) + 1,
    }));
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <>
      <div className="dice">
        <div className="left-dice" onClick={handleLeftClick}>
          <p>{state.left}</p>
        </div>
        <div className="right-dice" onClick={handleRightClick}>
          <p>{state.right}</p>
        </div>
      </div>
    </>
  );
}
