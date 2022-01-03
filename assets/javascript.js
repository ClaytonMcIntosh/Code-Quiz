//declare variables
var startButton = document.getElementById("startbut");
var questionB = document.getElementById("question");
var questionText = document.getElementById("questionText");
var answersB = document.getElementById("answers");
var answer1 = document.getElementById("a1");
var answer2 = document.getElementById("a2");
var answer3 = document.getElementById("a3");
var answer4 = document.getElementById("a4");
var correctInfo = document.getElementById("correct");
var incorrectInfo = document.getElementById("incorrect");
var timer = document.getElementById("timeCount");
var time = 100;
var questionNumber = 0;

//question answer objects

const question1 = {
    questionNumber: 1,
    question: "Q1. What colour is the sky?",
    answer1: "A. Red",
    answer2: "B. Blue",
    answer3: "C. Green",
    answer4: "D. All of the above",
    correctAnswer: 2,
  };

  const question2 = {
    questionNumber: 2,
    question: "What is the biggest animal?",
    answer1: "cow",
    answer2: "sheep",
    answer3: "elephant",
    answer4: "snake",
    correctAnswer: 3,
  };


//Event listeners
startButton.addEventListener("click", startGame);

//initiate functions

function init() {
    hideAtStart();
}

//On loading page, check local storage for high scores and update high scores.

//Hide questions and answers and show a start button at the start of the game.

function hideAtStart() {
    questionB.style.display = "none";
    answersB.style.display = "none";
    correctInfo.style.display = "none";
    incorrectInfo.style.display = "none";
};

// function startGame() {

    function startGame() {
        firstQuestion();
        unHideQandA();
        startTimer();    
    }
    
// }

//On click of "Start", run timer (10 seconds per question?)

function startTimer() {
    setInterval(function () {timer.textContent = time--}, 1000);
}

//Fill first question

function  firstQuestion() {
    questionText.textContent = question1.question;
    answer1.textContent = question1.answer1;
    answer2.textContent = question1.answer2;
    answer3.textContent = question1.answer3;
    answer4.textContent = question1.answer4;
    answer1.addEventListener("click", function(){
        checkAnswer(false)
    });
    answer2.addEventListener("click", function(){
        checkAnswer(true)
    });
    answer3.addEventListener("click", function(){
        checkAnswer(false)
    });
    answer4.addEventListener("click", function(){
        checkAnswer(false)
    });

}

//On click of "Start", unhide questions and answers

function unHideQandA() {
    questionB.style.display = "block";
    answersB.style.display = "block";
    startButton.style.display = "none";
}

//when user clicks a correct answer a new question updates


function checkAnswer(x){
    if (x === true) {
        correctInfo.style.display = "block";
        setInterval(function () {correctInfo.style.display = "none"}, 2000);
        console.log("true!");
    }
    else{
        incorrectInfo.style.display = "block";
        setInterval(function () {incorrectInfo.style.display = "none"}, 2000);
        time = time - 10;
        console.log("false");

    }
};


//when the new time updates, the status (correct/incorrect) shows for 2 seconds.

//On click of incorrect answer, time is subtracted from clock (10 secs)

//When all questions are answered the game ends

//When the timer reaches 0 the game ends

//User will enter name into high scores. 

//The highest score is added to the top, lowest to the bottom.

//When game is over, user can start again.

//Start the game:
init();