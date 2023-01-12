import React from 'react'
import questions from "../questions";
const Result = ({correct}) => {
    const refresh = () =>{
        window.location.reload()
    }
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} из {questions.length}</h2>
      <button onClick={refresh}>Попробовать снова</button>
    </div>
  );
}

export default Result
