import React, {useState , useEffect}  from "react";
import "../App.css";
import Image1 from "./image3.png"
import Image2 from "./image2.png"
import questions from "../questions.js"
import ResultPage from "./Result.jsx"

const Desktop = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
    
    //  Background color for LIGHT AND DARK mode and HIGHLIGHT
    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? "#1e1e1e" : "#ffffff";
        document.querySelector('.highlighter').style.color = isDarkMode ? "#39ff14" : "#4169e1"
    }, [isDarkMode]);

    // Toggling dark and light mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // add Hightlight
    const addHighlight = () => {
        const highlighterElements = document.getElementsByClassName("highlighter");
        for (let i = 0; i < highlighterElements.length; i++) {
            highlighterElements[i].style.color = isDarkMode ? "#ff0000" : "#ff0000";
        }
    };

    // remove Highlight
    const removeHighlight = () => {
        const highlighterElements = document.getElementsByClassName("highlighter");
        for (let i = 0; i < highlighterElements.length; i++) {
            highlighterElements[i].style.color = isDarkMode ? "#39ff14" : "#4169e1";
        }
    };

    // Going to next question , setting the quiz completion , and setting userAnswers
    const goToNextQuestion = (optionIndex) => {
        const updatedUserAnswers = [...userAnswers];
        updatedUserAnswers[currentQuestion] = optionIndex;
        setUserAnswers(updatedUserAnswers);
        if (currentQuestion === questions.length - 1) {
            setQuizCompleted(true);
        } else {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        }
    };

    // Score Calculation
    const calculateScore = () => {
        let score = 0;
        userAnswers.forEach((userAnswerIndex, questionIndex) => {
            const correctAnswerIndex = questions[questionIndex].options.findIndex(option => option.isCorrect);
            if (userAnswerIndex === correctAnswerIndex) {
                score++;
                console.log(score)
            }
        });
        return score;
        };

    // Questions data
    const questionsData = questions[currentQuestion]

    return (
        <>
        <div className="root">
            
            <div>
            {quizCompleted ? (<ResultPage score={calculateScore()} /> ) : (         //Conditional rendering and score is taken as prop to Result page 
                    <>
                    <div id="header">
                        <img src= {isDarkMode ? Image2 : Image1 } alt="image" id="logo" />
                        <button id="darkLight" className= {isDarkMode ? "buttonDark" : "buttonLight"} onClick={toggleDarkMode}>{isDarkMode ? "Light" : "Dark"}</button>
                    </div>
                    <div id= {isDarkMode ? "questionsDark" : "questionsLight"} >
                        <div id="description">
                            <p id= {isDarkMode ? "pdark1" : "plight1"} >Question {currentQuestion + 1} of {questions.length}</p>
                            <p id={isDarkMode ? "pdark2" : "plight2"} className="highlighter">{questionsData.text}</p>
                        </div>
                        <div id="choices">
                            {questionsData.options.map((option, optionIndex) => (
                            <button onClick={() => goToNextQuestion(optionIndex)} key={option.id} className=  {isDarkMode ? "buttonDark" : "buttonLight"} id="options">{option.text}</button>
                ))}
                    
                        </div>
                        <div id="highlightButtons">
                            <button id={isDarkMode ? "highlightDark" : "highlightLight"} onClick={addHighlight}>Hightlight</button>
                            <button id={isDarkMode ? "removeLight" : "removeDark"} onClick={removeHighlight}>Remove Highlight</button>
                        </div>
                    </div>
                    </>
            )} 
            </div>
        </div>
        </>
    );
};
export default Desktop
