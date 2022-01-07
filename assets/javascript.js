//variables

var startButton = document.getElementById("startbut");
var questionB = document.getElementById("question");
var questionText = document.getElementById("questionText");
var answersB = document.getElementById("answers");
var correctInfo = document.getElementById("correct");
var enterHighScores = document.getElementById("enterHS");
var incorrectInfo = document.getElementById("incorrect");
var timer = document.getElementById("timeCount");
var timebox = document.getElementById("timeleft");
var mainHead = document.getElementById("mainh1");
var mainPtag = document.getElementById("mainp");
var startOver = document.getElementById("restart");
var hshead = document.getElementById("hshead");
var time = 99;
var questionNum = 0;
var myInterval = 0;

//variables for saving high scores.

const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//question and answer objects in an array

const questions = [
  {
    questionNumber: 1,
    question:
      "Q1. Which of the following can NOT be used to declare a variable in JavaScript? ",
    answer1: "A. var",
    answer2: "B. let",
    answer3: "C. use",
    answer4: "D. const",
    correctAnswer: 3,
  },
  {
    questionNumber: 2,
    question: "Q2. Which of the following is a logical operator in JavaScript?",
    answer1: "A. ===",
    answer2: "B. &&",
    answer3: "C. if/else",
    answer4: "D. logical(x);",
    correctAnswer: 2,
  },
  {
    questionNumber: 3,
    question:
      "Q3. Which statement is NOT a conditional statement in JavaScript??",
    answer1: "A. switch",
    answer2: "B. else if",
    answer3: "C. then",
    answer4: "D. else",
    correctAnswer: 3,
  },
  {
    questionNumber: 4,
    question: "Q4. Arrays are surrounded by...?",
    answer1: "A. [ ]",
    answer2: "B. numbers",
    answer3: "C. //* *//",
    answer4: "D. if/else",
    correctAnswer: 1,
  },
  {
    questionNumber: 5,
    question: "Q5. Functions are ...?",
    answer1: "A. essential to display a website",
    answer2: "B. only a part of html and css",
    answer3: "C. the first element in the document",
    answer4: "D. executed, invoked and called",
    correctAnswer: 4,
  },
  {
    questionNumber: 6,
    question: "Q6. Which of the following is an array method?",
    answer1: "A. pop( )",
    answer2: "B. pip( )",
    answer3: "C. put( )",
    answer4: "D. place( )",
    correctAnswer: 1,
  },
  {
    questionNumber: 7,
    question: "Q7. DOM stands for ...?",
    answer1: "A. Data Only Method",
    answer2: "B. Data Object Map",
    answer3: "C. Do Only the Minimum",
    answer4: "D. Document Object Model",
    correctAnswer: 4,
  },
  {
    questionNumber: 8,
    question: "Q8. API stands for ...?",
    answer1: "A. Application Password Input",
    answer2: "B. APplicatIon",
    answer3: "C. Adjustable Programing Intelligent",
    answer4: "D. Application Program Interface",
    correctAnswer: 4,
  },
  {
    questionNumber: 9,
    question: "Q9. A query selector can help you find?",
    answer1: "A. the websites API",
    answer2: "B. a p tag",
    answer3: "C. the this function",
    answer4: "D. a query in the search engine",
    correctAnswer: 2,
  },
  {
    questionNumber: 10,
    question: "Q10. Local storage is stored ...?",
    answer1: "A. in cookies",
    answer2: "B. on the users computer",
    answer3: "C. on the companies database",
    answer4: "D. in the cloud",
    correctAnswer: 2,
  },
  {
    questionNumber: 11,
    question: "Q11.",
    answer1: "A. ",
    answer2: "B. ",
    answer3: "C.",
    answer4: "D. ",
    correctAnswer: 1,
  },
];

//Event listeners
startButton.addEventListener("click", startGame);

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

//function to reset game
function reload() {
  window.location.reload();
}

//initiate function to prepare the game

function init() {
  hideAtStart();
}

//Hide questions and answers and show a start button at the start of the game.

function hideAtStart() {
  questionB.style.display = "none";
  answersB.style.display = "none";
  correctInfo.style.display = "none";
  incorrectInfo.style.display = "none";
  enterHighScores.style.display = "none";
  startOver.style.display = "none";
}

//Function to start the game once the start button has been clicked.
function startGame() {
  unHideQandA();
  startTimer();
  loadQuestion();
}

//On click of "Start", unhide questions and answers

function unHideQandA() {
  questionB.style.display = "block";
  answersB.style.display = "block";
  startButton.style.display = "none";
  mainPtag.style.display = "none";
  mainHead.style.display = "none";
}

//function to start timer

function startTimer() {
  myInterval = setInterval(function () {
    timer.textContent = time--;
    if (time < 0) {
      timesUp();
    }
  }, 1000);
}

//function to fill in the quesions, with buttons and event listener

function loadQuestion() {
  var currentQuestion = questions[questionNum];
  questionText.textContent = currentQuestion.question;

  answersB.innerHTML = "";

  for (let i = 1; i < 5; i++) {
    var button = document.createElement("button");
    button.textContent = currentQuestion[`answer${i}`];
    button.id = `a${i}`;
    answersB.appendChild(button);

    button.addEventListener("click", function () {
      if (currentQuestion.correctAnswer === i) {
        checkAnswer(true);
      } else {
        checkAnswer(false);
      }
    });
  }

  questionNum = questionNum + 1;

  console.log(questionNum);

  if (questionNum == 11) {
    console.log("end");
    endGame();
  }

  return;
}

// Adding a function to move to next question

function checkAnswer(x) {
  if (x == true) {
    correctInfo.style.display = "block";
    setInterval(function () {
      correctInfo.style.display = "none";
    }, 2000);
  } else {
    incorrectInfo.style.display = "block";
    setInterval(function () {
      incorrectInfo.style.display = "none";
    }, 2000);
    time = time - 10;
  }
  loadQuestion();
}

//When all questions are answered the game ends

function endGame() {
  enterHighScores.style.display = "block";
  questionB.style.display = "none";
  answersB.style.display = "none";
  timebox.style.display = "none";
  localStorage.setItem("mostRecentScore", time);
  finalScore.innerText = time;
  clearInterval(myInterval);
}

//When the timer reaches 0 the game ends

function timesUp() {
  questionB.style.display = "none";
  answersB.style.display = "none";
  timebox.style.display = "none";
  enterHighScores.style.display = "none";
  mainHead.style.display = "block";
  mainPtag.style.display = "block";
  mainHead.textContent = "Time's up!";
  mainPtag.textContent = "You're time ran out! Try again!!!";
  startOver.style.display = "block";
  startOver.addEventListener("click", function () {
    reload();
  });
}

//function to sort and save 3 high scores

saveHighScore = (e) => {
  e.preventDefault();

  const mostRecentScore = localStorage.getItem("mostRecentScore");

  const score = {
    score: mostRecentScore,
    name: username.value,
  };

  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(3);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  hsUpdate();
  reload();
  document.location = "#hscores";
};

//Updating the high scores.

hsUpdate();

function hsUpdate() {
  if (highScores.length >= 3) {
    hs1.textContent = JSON.stringify(highScores[0].name);
    hs2.textContent = JSON.stringify(highScores[1].name);
    hs3.textContent = JSON.stringify(highScores[2].name);
  } else if (highScores.length == 2) {
    hs1.textContent = JSON.stringify(highScores[0].name);
    hs2.textContent = JSON.stringify(highScores[1].name);
  } else if (highScores.length == 1) {
    hs1.textContent = JSON.stringify(highScores[0].name);
  }
}

//Start the game:
init();
