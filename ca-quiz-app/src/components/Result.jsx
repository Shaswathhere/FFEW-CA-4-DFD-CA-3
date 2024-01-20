import React, {useState , useEffect}  from "react";
import "../App.css";
import Image1 from "./image3.png"
import Image2 from "./image2.png"
import questions from "../questions";
import QuizPage from "./QuizPage.jsx"

const Desktop = ({score}) => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [restart, setRestart] = useState(false)

  // Background color for LIGHT AND DARK mode
  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#1e1e1e" : "#ffffff";
  }, [isDarkMode]);

  // Toggling dark and light mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Calculating percentage
  const percentage = (score / questions.length) * 100
  
  // Restart function
  const handleRestart = () => {
    setRestart(true)
  }



  return (
    <>
      <div className="root">
        
          {restart ? (<QuizPage/>) : (          // Conditonal Rendering
            <>
            <div id="header">
                <img src= {isDarkMode ? Image2 : Image1 } alt="image" id="logo" />
                <button id="darkLight" className= {isDarkMode ? "buttonDark" : "buttonLight"} onClick={toggleDarkMode}>{isDarkMode ? "Light" : "Dark"}</button>
            </div>
        <div className="result" id= {isDarkMode ? "questionsDark" : "questionsLight"}>
          <h2 id={isDarkMode ? "pdark2" : "plight2"}>FINAL RESULT</h2>
          <p id={isDarkMode ? "pdark2" : "plight2"}>{score} CORRECT ANSWERS OUT {questions.length}</p>
          <p id={isDarkMode ? "pdark2" : "plight2"}>PERCENTAGE = {percentage}%</p>
          <button className=  {isDarkMode ? "buttonDark" : "buttonLight"} onClick={handleRestart}>Restart</button>
        </div>
            </>
          )}
        
      </div>
    </>
  );
};
export default Desktop
