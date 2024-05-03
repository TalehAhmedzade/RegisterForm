import React, { useState } from "react";

export default function CliendCard(props) {
  const { name, phone, card } = props;
  const allTrue = name && phone && card;

  const style = {
    width: "18rem",
    background: allTrue ? "gray" : card ? "white" : "yellow"
  };
  return (
    <div className="card" style={style}>
      <div className="card-body">
        <h5 className="card-title">Имя клиента: {name ? name : "Anonim"}</h5>
        {phone && (
          <h6 className="card-subtitle mb-2 text-muted">Телефон: {phone}</h6>
        )}
        <p className="card-text">
          Номер карты: {card ? card : "Card is not spesifed"}
        </p>
      </div>
    </div>
  );
}