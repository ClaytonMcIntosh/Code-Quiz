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
var questionNum = 0;

//question answer objects

const questions = [
    {
    questionNumber: 1,
    question: "Q1. Which of the following can NOT be used to declare a variable in JavaScript? ",
    answer1: "A. var",
    answer2: "B. let",
    answer3: "C. use",
    answer4: "D. const",
    correctAnswer: 3,
  },
    {
    questionNumber: 2,
    question: "Which of the following is a logical operator in JavaScript?",
    answer1: "A. ===",
    answer2: "B. &&",
    answer3: "C. if/else",
    answer4: "D. logical(x);",
    correctAnswer: 2,
},
{
    questionNumber: 3,
    question: "Which statement is NOT a conditional statement in JavaScript??",
    answer1: "A. switch",
    answer2: "B. else if",
    answer3: "C. then",
    answer4: "D. else",
    correctAnswer: 3,
},
{
    questionNumber: 4,
    question: "Arrays are surrounded by...?",
    answer1: "A. []",
    answer2: "B. numbers",
    answer3: "C. //* *//",
    answer4: "D. if/else",
    correctAnswer: 1,
},
{
    questionNumber: 5,
    question: "Functions are ?",
    answer1: "A. essential to display a website",
    answer2: "B. only a part of html and css",
    answer3: "C. the first element in the document",
    answer4: "D. executed, invoked and called",
    correctAnswer: 4,
},
{
    questionNumber: 6,
    question: "Which of the following is an array method?",
    answer1: "A. pop()",
    answer2: "B. pip()",
    answer3: "C. put()",
    answer4: "D. place();",
    correctAnswer: 1,
},
{
    questionNumber: 7,
    question: "DOM stands for ...?",
    answer1: "A. Data Only Method",
    answer2: "B. Data Object Map",
    answer3: "C. Do Only the Minimum",
    answer4: "D. Document Object Model;",
    correctAnswer: 4,
},
{
    questionNumber: 8,
    question: "API stands for ...?",
    answer1: "A. Application Password Input",
    answer2: "B. APplicatIon",
    answer3: "C. Adjustable Programing Intelligent",
    answer4: "D. Application Program Interface;",
    correctAnswer: 4,
},
{
    questionNumber: 9,
    question: "A query selector can help you find?",
    answer1: "A. the websites API",
    answer2: "B. a p tag",
    answer3: "C. the this function",
    answer4: "D. a query in the search engine",
    correctAnswer: 2,
},
{
    questionNumber: 10,
    question: "Local storage is stored ...?",
    answer1: "A. in cookies",
    answer2: "B. on the users computer",
    answer3: "C. on the companies database",
    answer4: "D. in the cloud",
    correctAnswer: 2,
  }
]


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

    function startGame() {
        // firstQuestion();
        unHideQandA();
        startTimer();
       loadQuestion();
      // questionNum++;
    }
    

    //On click of "Start", unhide questions and answers

function unHideQandA() {
    questionB.style.display = "block";
    answersB.style.display = "block";
    startButton.style.display = "none";
}


//On click of "Start", run timer (10 seconds per question?)

function startTimer() {
    setInterval(function () {timer.textContent = time--}, 1000);
};

//fill in the question

function loadQuestion (){
    console.log(questionNum);
     questionText.textContent = questions[questionNum].question;
    answer1.textContent = questions[questionNum].answer1;
    answer2.textContent = questions[questionNum].answer2;
    answer3.textContent = questions[questionNum].answer3;
    answer4.textContent = questions[questionNum].answer4;

//adding eventlisteners to check for correct answers.

    answer1.addEventListener("click", function(){
        if (questions[questionNum].correctAnswer === 1){
                console.log("true");
        } else {
            console.log("false");
        }
    })

    answer2.addEventListener("click", function(){
        if (questions[questionNum].correctAnswer === 2){
                console.log("true");
        } else {
            console.log("false");
        }
    })

    answer3.addEventListener("click", function(){
        if (questions[questionNum].correctAnswer === 3){
                console.log("true");
        } else {
            console.log("false");
        }
    })

    answer4.addEventListener("click", function(){
        if (questions[questionNum].correctAnswer === 4){
                console.log("true");
        } else {
            console.log("false");
        }
    })

};






// function checkAnswer(x){
//     if (x === true) {
//         // correctInfo.style.display = "block";
//         // setInterval(function () {correctInfo.style.display = "none"}, 2000);
//         console.log("true!");
//     }
//     else{
//         // incorrectInfo.style.display = "block";
//         // setInterval(function () {incorrectInfo.style.display = "none"}, 2000);
//         // time = time - 10;
//         console.log("false");
        

//     }
// };







//Start the game:
init();














//Fill first question

// function  firstQuestion() {
//     questionText.textContent = question1.question;
//     answer1.textContent = question1.answer1;
//     answer2.textContent = question1.answer2;
//     answer3.textContent = question1.answer3;
//     answer4.textContent = question1.answer4;
//     answer1.addEventListener("click", function(){
//         checkAnswer(false)
//     });
//     answer2.addEventListener("click", function(){
//         checkAnswer(true)
//     });
//     answer3.addEventListener("click", function(){
//         checkAnswer(false)
//     });
//     answer4.addEventListener("click", function(){
//         checkAnswer(false)
//     });

// }

//Fill in second to 10th question.

// function  secondQuestion() {
//     questionText.textContent = question2.question;
//     answer1.textContent = question2.answer1;
//     answer2.textContent = question2.answer2;
//     answer3.textContent = question2.answer3;
//     answer4.textContent = question2.answer4;
//     answer1.addEventListener("click", function(){
//         checkAnswer(false)
//     });
//     answer2.addEventListener("click", function(){
//         checkAnswer(false)
//     });
//     answer3.addEventListener("click", function(){
//         checkAnswer(true)
//     });
//     answer4.addEventListener("click", function(){
//         checkAnswer(false)
//     });

// }


//when user clicks a correct answer a new question updates


// function checkAnswer(x){
//     if (x === true) {
//         correctInfo.style.display = "block";
//         setInterval(function () {correctInfo.style.display = "none"}, 2000);
//         console.log("true!");
//         secondQuestion();
//     }
//     else{
//         incorrectInfo.style.display = "block";
//         setInterval(function () {incorrectInfo.style.display = "none"}, 2000);
//         time = time - 10;
//         console.log("false");
//         secondQuestion();
        

//     }
// };


//when the new time updates, the status (correct/incorrect) shows for 2 seconds.

//On click of incorrect answer, time is subtracted from clock (10 secs)

//When all questions are answered the game ends

//When the timer reaches 0 the game ends

//User will enter name into high scores. 

//The highest score is added to the top, lowest to the bottom.

//When game is over, user can start again.












// //question answer objects

// const question1 = {
//     questionNumber: 1,
//     question: "Q1. Which of the following can NOT be used to declare a variable in JavaScript? ",
//     answer1: "A. var",
//     answer2: "B. let",
//     answer3: "C. use",
//     answer4: "D. const",
//     correctAnswer: 3,
//   };

//   const question2 = {
//     questionNumber: 2,
//     question: "Which of the following is a logical operator in JavaScript?",
//     answer1: "A. ===",
//     answer2: "B. &&",
//     answer3: "C. if/else",
//     answer4: "D. logical(x);",
//     correctAnswer: 2,
//   };

//   const question3 = {
//     questionNumber: 3,
//     question: "Which statement is NOT a conditional statement in JavaScript??",
//     answer1: "A. switch",
//     answer2: "B. else if",
//     answer3: "C. then",
//     answer4: "D. else",
//     correctAnswer: 3,
//   };

//   const question4 = {
//     questionNumber: 4,
//     question: "Arrays are surrounded by...?",
//     answer1: "A. []",
//     answer2: "B. numbers",
//     answer3: "C. //* *//",
//     answer4: "D. if/else",
//     correctAnswer: 1,
//   };

//   const question5 = {
//     questionNumber: 5,
//     question: "Functions are ?",
//     answer1: "A. essential to display a website",
//     answer2: "B. only a part of html and css",
//     answer3: "C. the first element in the document",
//     answer4: "D. executed, invoked and called",
//     correctAnswer: 4,
//   };

//   const question6 = {
//     questionNumber: 6,
//     question: "Which of the following is an array method?",
//     answer1: "A. pop()",
//     answer2: "B. pip()",
//     answer3: "C. put()",
//     answer4: "D. place();",
//     correctAnswer: 1,
//   };

//   const question7 = {
//     questionNumber: 7,
//     question: "DOM stands for ...?",
//     answer1: "A. Data Only Method",
//     answer2: "B. Data Object Map",
//     answer3: "C. Do Only the Minimum",
//     answer4: "D. Document Object Model;",
//     correctAnswer: 4,
//   };

//   const question8 = {
//     questionNumber: 8,
//     question: "API stands for ...?",
//     answer1: "A. Application Password Input",
//     answer2: "B. APplicatIon",
//     answer3: "C. Adjustable Programing Intelligent",
//     answer4: "D. Application Program Interface;",
//     correctAnswer: 4,
//   };

//   const question9 = {
//     questionNumber: 9,
//     question: "A query selector can help you find?",
//     answer1: "A. the websites API",
//     answer2: "B. a p tag",
//     answer3: "C. the this function",
//     answer4: "D. a query in the search engine",
//     correctAnswer: 2,
//   };

//   const question10 = {
//     questionNumber: 10,
//     question: "Local storage is stored ...?",
//     answer1: "A. in cookies",
//     answer2: "B. on the users computer",
//     answer3: "C. on the companies database",
//     answer4: "D. in the cloud",
//     correctAnswer: 2,
//   };
// 

