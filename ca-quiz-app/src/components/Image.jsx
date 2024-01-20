import React, {useState , useEffect}  from "react";
import "../App.css";
import Image1 from "./image3.png"
import Image2 from "./image2.png"

const Image = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#1e1e1e" : "#ffffff";
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const startQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <>
      <div className="root">
        <div id="header">
          <img src= {isDarkMode ? Image2 : Image1 } alt="image" id="logo" />
          <button id="darkLight" className= {isDarkMode ? "buttonDark" : "buttonLight"} onClick={toggleDarkMode}>{isDarkMode ? "Light" : "Dark"}</button>
        </div>
    </div>
    <div>
        
    </div>
    
    </>
    )
}
export default Image
