import React, {useState , useEffect}  from "react";
import "../App.css";
import Image1 from "./image3.png"
import Image2 from "./image2.png"
import QuizPage from "./QuizPage.jsx"

const Desktop = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

// Background color for LIGHT AND DARK mode
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#1e1e1e" : "#ffffff";
  }, [isDarkMode]);

// Toggling dark and light mode 
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

// Toggling start button
  const startQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <>
      <div className="root">
        <div>
        {showQuiz ? (
            <QuizPage />        //Conditional Rendering
          ) : (
            <>
            <div id="header">
              <img src= {isDarkMode ? Image2 : Image1 } alt="image" id="logo" />
              <button id="darkLight" className= {isDarkMode ? "buttonDark" : "buttonLight"} onClick={toggleDarkMode}>{isDarkMode ? "Light" : "Dark"}</button>
            </div>
            <div id="welcome">
              <p id={isDarkMode ? "pDark" : "pLight"}>WELCOME TO QUIZ MASTERS PRO</p>
              <button className= {isDarkMode ? "buttonDark" : "buttonLight"} onClick={startQuiz}>START</button>
            </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Desktop
