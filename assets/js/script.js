var startBtn = document.getElementById("start-btn");
let mixQuestions, questionsIndex
var questionContainEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-buttons");

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
function beginQuiz() {
    console.log("Started Quiz");
    timerCountdown();
    startBtn.classList.add("hide")
    mixQuestions = questions.sort(() => Math.random() - .5)
    questionsIndex = 0
    questionContainEl.classList.remove("hide")
    nextQuestion()
}

function nextQuestion() {
    resetState()
    displayQuestion(mixQuestions[questionsIndex])
}

function displayQuestion(questions) {
    questionEl.innerText = questions.question
    questions.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", chooseAnswer)
        answerButtonEl.appendChild(button)
    })
}

function resetState() {
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild
            (answerButtonEl.firstChild)
    }
}

function chooseAnswer(e) {
    var chosenButton = e.target
    var correct = chosenButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    }
    else {
        element.classList.add("wrong")
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

// Questions to be asked
var questions = [
    {
        question: "What does a variable do?",
        answers: [
            { text: "Stores the data value that can be changed later on", correct: true },
            { text: "Calls the parent object.", correct: false },
            { text: "Nothing.", correct: false },
            { text: "Cancels out the function.", correct: false }
        ]
    }
]

// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score
function timerCountdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            startTimer.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        }
        else if (timeLeft === 1) {
            startTimer.textContent = timeLeft + " second remaining";
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            startTimer.textContent = "";
        }
    }, 1000);
};

startBtn.addEventListener("click", beginQuiz);