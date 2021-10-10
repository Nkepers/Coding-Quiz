var startBtn = document.getElementById("start-btn");
let mixQuestions, questionsIndex
var questionContainEl = document.getElementById("question-container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-buttons");
var timeLeft = 60;

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

//Calls for the next question if questions are left.
function nextQuestion() {
    if (!mixQuestions[questionsIndex]) {
        //end game function
        //make hiScore function
        console.log("endgameFunction")
    }
    else {
        resetState()
        displayQuestion(mixQuestions[questionsIndex])
    }
}

//Displays the question with its 4 possible answers
function displayQuestion(questions) {
    questionEl.innerText = questions.question
    questions.answers.forEach(answer => {
        var button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        button.dataset.correct = answer.correct
        button.addEventListener("click", chooseAnswer)
        answerButtonEl.appendChild(button)
    })
}

// Resets the state of the answers
function resetState() {
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild
            (answerButtonEl.firstChild)
    }
}

//Choose 1 of 4 answers, will deduct time from timer if incorrect
function chooseAnswer(e) {
    var chosenButton = e.target
    var correct = chosenButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (correct !== "true") {
        timeLeft -= 5;
    }

    questionsIndex++;
    setTimeout(nextQuestion, 1000)
    
}

//Sets the color state of answer when chosen, green being correct red being wrong
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct === "true") {
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
    },

    {
        question: "What is an array?",
        answers: [
            { text: "A function to deploy multiple variables.", correct: false },
            { text: "Calls the variable.", correct: false },
            { text: "A single variable used to store different elements.", correct: true },
            { text: "Object to cancel out an event listener.", correct: false }
        ]
    },

    {
        question: "Javascript cannot be used to affect the HTML.",
        answers: [
            { text: "True.", correct: false },
            { text: "False.", correct: true },
        ]
    }
]

//Timer countdown function
function timerCountdown() {
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