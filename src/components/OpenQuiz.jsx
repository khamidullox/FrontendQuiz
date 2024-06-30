import React from "react";
import data from "../data/data";
function OpenQuiz() {
  let { quizzes } = data;
  return (
    <>
      {" "}
      <div className="main__open__title">
        <h3>Welcome to the</h3>
        <h2>Frontend Quiz!</h2>
        <h6>Pick a subject to get started.</h6>
      </div>
      <ul className="main__open__quiz-list">
        {quizzes.map((quiz) => {
          return (
            <button
              onClick={() => {
                setQuiz("CSS");
              }}
              className="main__open__quiz__btn"
            >
              <figure style={{ backgroundColor: `${quiz.color}`, opacity: "" }}>
                <img src={quiz.icon} alt="" />
              </figure>
              <h5>{quiz.title}</h5>
            </button>
          );
        })}
      </ul>
    </>
  );
}

export default OpenQuiz;
