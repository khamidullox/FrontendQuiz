import data from "../data/data";
import "../css/header.css";
import HeaderMode from "./HeaderMode";

function Header({ quizName }) {
  let { quizzes } = data;
  if (quizName !== "home") {
    let findQuiz = quizzes.find((item) => {
      return item.title == quizName;
    });

    return (
      <header className="header">
        <div className="header__icon">
          <div className="header__position">
            {" "}
            <figure
              style={{ backgroundColor: `${findQuiz.color}`, opacity: "" }}
            >
              {" "}
              <img src={findQuiz.icon} alt="" />
            </figure>
          </div>

          <h5>{findQuiz.title}</h5>
        </div>
        <HeaderMode />
      </header>
    );
  } else {
    return (
      <header className="header">
        <div>
       
        </div>
        <HeaderMode />
      </header>
    );
  }
}

export default Header;
