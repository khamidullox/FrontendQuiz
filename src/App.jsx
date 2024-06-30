import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import data from "./data/data";
import "./css/open.css";
import "./css/quizOptions.css";
function App() {
  let { quizzes } = data;
  // useState
  let [quiz, setQuiz] = useState("home");
  let [pageQuest, setPageQuest] = useState(0);
  let optionAnwers = ["A", "B", "C", "D"];
  let [answer, setAnswer] = useState(null);
  let [addClass, setAddClass] = useState(null);
  let [next, setNext] = useState(true);
  let [findBtn, setFingBtn] = useState(null);
  let [correctAnsver, setCorrectAnsver] = useState("");
  let [counterAnswer, setCounterAnswer] = useState(0);
  let [error, setError] = useState(null);

  let findQuiz = quizzes.find((item) => {
    return item.title == quiz;
  });

  return (
    <>
      <Header quizName={quiz} />
      <main className="main">
        {quiz == "home" && (
          <>
            {" "}
            <div className="main__open__title">
              <h3>Welcome to the</h3>
              <h2>Frontend Quiz!</h2>
              <h6>Pick a subject to get started.</h6>
            </div>
            <ul className="main__open__quiz-list">
              {quizzes.map((quiz, id) => {
                return (
                  <button
                    key={id}
                    onClick={() => {
                      setQuiz(quiz.title);
                    }}
                    className="main__open__quiz__btn"
                  >
                    <figure
                      style={{ backgroundColor: `${quiz.color}`, opacity: "" }}
                    >
                      <img src={quiz.icon} alt="" />
                    </figure>
                    <h5>{quiz.title}</h5>
                  </button>
                );
              })}
            </ul>
          </>
        )}
        {quizzes.map((item, id) => {
          return (
            <>
              <Fragment key={id}>
                {item.title == quiz &&
                  item.questions.map((item, id) => {
                    return (
                      id == pageQuest && (
                        <>
                          <div key={id} className="main__open__title">
                            <h6>Question {id + 1} of 10</h6>
                            <h4>{item.question}</h4>
                          </div>
                          <div className="main__quiz__options main__open__quiz-list">
                            {item.options.map((option, id) => {
                              return (
                                <button
                                  onClick={() => {
                                    setAnswer(option);
                                    setFingBtn(id);
                                    setCorrectAnsver(item.answer);
                                  }}
                                  className={`main__open__quiz__btn ${
                                    id == findBtn ? addClass : ""
                                  } ${
                                    !next && option == correctAnsver
                                      ? "main__option__rigth__asw"
                                      : ""
                                  }`}
                                  key={id}
                                >
                                  <span className="main__option__answer">
                                    {optionAnwers[id]}
                                  </span>{" "}
                                  <h5>{option}</h5>
                                </button>
                              );
                            })}
                            {next ? (
                              <button
                                onClick={() => {
                                  if (answer) {
                                    if (item.answer == answer) {
                                      setAddClass("main__option__rigth__asw");
                                      setCounterAnswer(counterAnswer + 1);
                                      setNext(false);
                                      setAnswer(null);
                                      setError(null);
                                    } else {
                                      setAddClass("main__option__no__asw");
                                      setNext(false);
                                      setAnswer(null);
                                      setError(null);
                                    }
                                  } else {
                                    setError(true);
                                  }
                                }}
                                className="main__answer__submit"
                              >
                                <h5 className="">Submit Answer</h5>
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  setPageQuest(pageQuest + 1);
                                  setAddClass("");
                                  setNext(true);
                                }}
                                className="main__answer__submit"
                              >
                                <h5>Next Question</h5>
                              </button>
                            )}
                            {error && (
                              <p className="main__quiz__error">
                                Please select an answer
                              </p>
                            )}
                          </div>
                        </>
                      )
                    );
                  })}
              </Fragment>
            </>
          );
        })}
        {pageQuest == 10 && (
          <>
            <div className="main__open__title">
              <h3>Quiz completed</h3>
              <h2>You scored...</h2>
            </div>
            <div className="main__quiz__options main__open__quiz-list">
              <div className="main__finish__counter__title">
                <div className="main__finish__counter">
                  <figure
                    style={{
                      backgroundColor: `${findQuiz.color}`,
                      opacity: "",
                    }}
                  >
                    <img src={findQuiz.icon} alt="" />
                  </figure>
                  <h5>{findQuiz.title}</h5>
                </div>
                <h1>{counterAnswer}</h1>
                <p className="main__finish__out">out of 10</p>
              </div>
              <button
                onClick={() => {
                  setPageQuest(0);
                  setQuiz("home");
                  setCounterAnswer(0);
                }}
                className="main__answer__submit"
              >
                <h5>Again home</h5>
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;

// Itemdi ichida id olib unga tepadat useState ochib , va pasta iddi useState tenglab otkazib unga plus qilib ketish
