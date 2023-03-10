import React, { useState } from "react";
import "./index.scss";

import questions from "./questions";
import Result from "./components/Result";
import Game from "./components/Game";





function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0)
  const question = questions[step];

  const clickVariant = (index) => {
    console.log(step, index);
    setStep(step+1)
    if(index === question.correct){
      setCorrect(correct+1)
    }
  };

  return (
    <div className="App">
      {step !== questions.length ? (
        <Game step={step} question={question} clickVariant={clickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
