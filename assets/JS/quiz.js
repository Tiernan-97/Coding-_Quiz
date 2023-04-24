var quizStart = document.getElementById("quizStart");

var startScreen = document.getElementById("homeScreen");
var quiz = document.getElementById("quiz");
var results = document.getElementById("results");

var answers = document.getElementById("answers");
var message = document.getElementById("message");

var timer = document.getElementById("timer");

var secondsLeft = 0;
var score = 0;
var currentQuestion = 0;
var countdownTimer;

function endGame() {
    clearInterval(countdownTimer);

    timer.textContent = "";

    quiz.style.display = 'none';
    results.style.display = 'flex';
};

function startGame() {
    secondsLeft = 60;

    currentQuestion = 0;

    countdownTimer = setInterval(function (){
        if (secondsLeft>0) {
            timer.textcontent = secondsLeft;
        } else {
            endGame();
        }
        secondsLeft--;
    }, 1000);

    startScreen.style.display = 'none';
    results.style.display = 'none';
    quiz.style.display = 'flex';

    displayQuestion();
}

function displayQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
        endGame();
        return
    }
}