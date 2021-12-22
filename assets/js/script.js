// set the variable that will start counter
var quizTimeEl = document.getElementById("timer")
var counter = document.getElementById("counter")
var startButton = document.getElementById("start-btn")
var questionEl = document.getElementById("question")
var selectAns1 = document.getElementById("answer1")
var selectAns2 = document.getElementById("answer2")
var selectAns3 = document.getElementById("answer3")
var selectAns4 = document.getElementById("answer4")
var feedbackEl = document.getElementById("feedback")
var title = document.getElementById("title")
var questionNum = 0
var timeRemain = 0
var quizCounter = 0


function startQuiz() {
    timeRemain = 75
    counterEl();
    startQuizEl();
}

function counterEl() {
    counter.innerHTML = (timeRemain)
    quizCounter = setInterval(count, 1000);
}

function count() {
    if (timeRemain !==0) {
        timeRemain--
        counter.innerHTML = (timeRemain)
    } else {
        clearInterval(quizCounter)
        quizOver();
    }
    return;
}

function startQuizEl() {
    document.querySelectorAll(".main").forEach(main => { main.style.display = "none" })
    document.querySelectorAll(".quiz").forEach(quiz => {quiz.style.display = "initial"})
    quiz(questionNum);
} 

function quiz() {
    if (questionNum >= questions.length) {
        quizOver();
    } else {
        questionEl.innerHTML = (questions[questionNum].title)
        selectAns1.innerHTML = (questions[questionNum].choices[0])
        selectAns2.innerHTML = (questions[questionNum].choices[1])
        selectAns3.innerHTML = (questions[questionNum].choices[2])
        selectAns4.innerHTML = (questions[questionNum].choices[3])
    }
}




