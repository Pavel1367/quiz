import React from "react";
import questions from "../questions";
const Game = ({ step, question, clickVariant }) => {
  const perc = Math.round((step / questions.length) * 100);
  console.log(perc);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${perc}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li key={variant} onClick={() => clickVariant(index)}>
            {variant}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Game;
