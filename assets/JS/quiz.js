var quizStart = document.getElementById("quizStart");
var saveScore = document.getElementById("saveScore");
var viewScores = document.getElementById("viewScores");
var playAgain = document.getElementById("playAgain");

var results = document.getElementById("results")
var startScreen = document.getElementById("homeScreen");
var quiz = document.getElementById("quiz");
var summary = document.getElementById("summary");

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

    summary.textContent = "Your score is: " + score;
};

function startGame() {
    secondsLeft = 75;

    currentQuestion = -1;

    score = 0;

    countdownTimer = setInterval(function () {

        if (secondsLeft>0) {
            timer.textContent = secondsLeft;
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

function displayQuestion() {;
    currentQuestion++


    if (currentQuestion >= questions.length) {
        endGame();
        return
    }

    var question = questions[currentQuestion];
    document.getElementById("title").textContent = question.title;

    answers.innerHTML = "";

    for (var i = 0; i<question.choices.length; i++) {

        var answer = document.createElement("div");
        answer.textContent = question.choices[i];
        answer.onclick = onSelectAnswer;
        answer.classList.add("answer");

        answers.appendChild(answer);
    }

}

function onSelectAnswer(e) {
    var correctAnswer = questions[currentQuestion].answer;

    var userAnswer = e.target.textContent;
    if (correctAnswer === userAnswer) {
        score++;

        displayMessage('Correct!');
    } else {
        score--;
        secondsLeft=secondsLeft-5;
        displayMessage('Incorrect! You lost 5 seconds!');
    }

    displayQuestion();
}


function displayMessage(msg) {
    message.textContent = msg;

    setTimeout(function () {
        message.textContent = "";
    }, 1000);
}

function highScores (e) {
    window.location.href = 'highscores.html';
}

function saveScores(e) {
    var initials = document.getElementById("initials").value;
    if (initials !=="") {
        localStorage.setItem(initials, score);
        document.getElementById("initials").value = "";
    }
}

quizStart.addEventListener("click", startGame);
playAgain.addEventListener("click", startGame);
viewScores.addEventListener("click", highScores);
saveScore.addEventListener("click", saveScores);