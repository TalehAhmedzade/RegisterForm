import React from "react";
import "./wine.css";
import Click from "../Event/Click";
const Wine = ({ title, description, rating }) => {
  return (
    <>
      <div className="winecard">
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{rating}</p>
        <Click name = 'Taleh'/>
      </div>
    </>
  );
};

export default Wine;