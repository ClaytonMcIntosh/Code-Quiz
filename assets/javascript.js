//declare variables
var startButton = document.getElementById("startbut");

function init() {
    hideAtStart();
}

//On loading page, check local storage for high scores and update high scores.

//Hide questions and answers and show a start button.



function hideAtStart() {
    question.style.display = "none";
    answers.style.display = "none";
    correct.style.display = "none";
};





// function startGame() {
    
// }

//On start, run timer (10 seconds per question?)

//On start, unhide questions and answers

startButton.addEventListener("click", startGame);

function startGame() {
    question.style.display = "block";
    answers.style.display = "block";
    correct.style.display = "block";
    startButton.style.display = "none";
   console.log("button click")
}


//On unhide of qanda, add questions and answers from variables

//when user clicks a correct answer a new question updates

//when the new time updates, the status (correct/incorrect) shows for 2 seconds.

//On click of incorrect answer, time is subtracted from clock (10 secs)

//When all questions are answered the game ends

//When the timer reaches 0 the game ends

//User will enter name into high scores. 

//The highest score is added to the top, lowest to the bottom.

//When game is over, user can start again.

//Start the game:
init();