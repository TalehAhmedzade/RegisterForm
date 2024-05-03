import React, { useState } from "react";
import Form from "./Form";
import "./styles.css";
const CreditCardApp = () => {
  const [state, setState] = useState({
    cards: [
      { number: "7653 7553 5693 9862", balance: 100 },
      { number: "7453 9736 0763 3474", balance: 400 },
      { number: "9577 7543 9379 9784", balance: 800 },
    ],
  });

  const handleCloseCard = (idx) => {
    // YOUR CODE HERE 1
    console.log(idx);
    const clone = state.cards.filter((item, index) => index !== idx);
    setState({ cards: clone });
  };
  const handleOpenCard = (card) => {
    let isnewCard = true;
    // YOUR CODE HERE 2
    state.cards.forEach((cardState) => {
      console.log(cardState.name == card.name);
      if (
        cardState.number == card.number &&
        cardState.balance == card.balance
      ) {
        // console.log(cardState == card)
        isnewCard = false;
      }
    });
    isnewCard
      ? setState({ cards: [card, ...state.cards] })
      : alert(
          `bele kart artiq movcuddur ve ya kart nomresi duzgun daxil edilmeyib`
        );
    // let cards = state.cards.filter((item, index) => item != card);
    console.log(state.cards, "state");
  };
  return (
    <div className="app">
      <Form handleOpenCard={handleOpenCard} />
      {state.cards.map(({ number, balance }, idx) => (
        <div key={number} className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">
              Карта <br />
              {number}
            </h5>
            <div className="card-text">
              <ul className="list-group">
                <li className="list-group-item">Баланс: {balance}</li>
                <hr />
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleCloseCard(idx)}
                >
                  Закрыть карту
                </button>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CreditCardApp;
