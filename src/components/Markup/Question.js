import React from "react";

function Question({ questionText, answers, correctAnswerIdx }) {
  return (
    <div>
      <p className="question_text">{questionText}</p>
      <div className="answer_group">
        {answers.map((ans, i) => (
          <button
            key={i}
            className={`answer ${i === correctAnswerIdx ? "correct" : ""}`}
          >
            {ans}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
