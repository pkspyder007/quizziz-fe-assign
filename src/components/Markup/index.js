import React, { useContext } from "react";
import questions from "../../questions";
import Question from "./Question";
import {store} from "../../store"
import "../../styles/markup.css";

function Markup() {
  const { state } = useContext(store);

  return (
    <div id="markup_container" style={state}>
      <header className="flex">
        <div className="logo">Header Text</div>
        <div>
          <button className="primary">Login</button>
          <button className="secondary">Sign up</button>
        </div>
      </header>
      <section className="about_quiz">
        <div className="">
          <div className="info flex">
            <h1>Algebra II quiz</h1>
            <small>10 questions</small>
          </div>
          <div className="flex justify-start">
            <div className="pill">Maths</div>
            <div className="pill">Algebra 2</div>
          </div>
        </div>
        <div className="flex">
          <p className=" flex quiz_author ">
            <img
              src="https://ui-avatars.com/api/?name=John+moe"
              alt="John Doe"
            />
            <span>created by Johm Mclarne</span>
          </p>
          <button className="primary">Play Quiz</button>
        </div>
      </section>
      <main className="questions_container">
        {questions.map((ques, i) => (
          <Question id={`${i}${ques.correctAnswerIdx}`} {...ques} />
        ))}
      </main>
    </div>
  );
}

export default Markup;
