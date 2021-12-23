// set the variable that will start counter
var counter = document.getElementById("counter")
var questionEl = document.getElementById("question")
var selectAns1 = document.getElementById("answer1")
var selectAns2 = document.getElementById("answer2")
var selectAns3 = document.getElementById("answer3")
var selectAns4 = document.getElementById("answer4")
var outcomeEl = document.getElementById("outcome")
var title = document.getElementById("title")
var questionNum = 0
var timeRemain = 0
var quizCounter = 0
var score = 0

// function to start the quiz and set the intial time
function startQuiz() {
    timeRemain = 75
    counterEl();
    startQuizEl();
}

// fucntion will set the interval to count down by a second at a time
function counterEl() {
    counter.innerHTML = (timeRemain)
    quizCounter = setInterval(count, 1000);
}

// function will keep track of how much time is left 
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

// fucntion will use the forEach to start calling the questions
function startQuizEl() {
    document.querySelectorAll(".main").forEach(main => { main.style.display = "none" })
    document.querySelectorAll(".quiz").forEach(quiz => {quiz.style.display = "initial"})
    quiz(questionNum);
} 

// fucntion will provide the questions and the choices
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

function checkAnswer(btnId) {
    if ((document.getElementById(btnId).innerHTML) === (questions[questionNum].answer)) {
        rightAnswer();
        questionNum++
    } else {
        wrongAnswer();
        questionNum++
    }
    quiz(questionNum)
}

function rightAnswer() {
    score = timeRemain
    outcomeEl.innerHTML = ("Correct");
    setTimeout(function() {outcomeEl.innerHTML = ("");
    },500)
}

function wrongAnswer() {
    timeRemain = (timeRemain - 15)
    outcomeEl.innerHTML = ("Wrong");
    setTimeout(function() {outcomeEl.innerHTML = ("");
    },500)
}

function quizOver() {
    document.querySelectorAll(".quiz").forEach(quiz => { quiz.style.display = "none" })
    var content = document.getElementById('theContent')
    var submit = document.getElementById("submit")

    counter.innerHTML = (0)

    content.insertAdjacentHTML('afterbegin', '<h1 id="done">All Done!</h1> <button id="submit" class="btn btn-option">Submit</button> <input id="userScore"> - Enter Initials</input>');
    
    var done = document.getElementById("done")
    done.insertAdjacentHTML('afterend', '<p id="finalScore">Your final score is ' + score + '</p>')

    var submitEl = document.getElementById("submit")    
    submitEl.addEventListener("click", function(){
        var value = document.getElementById('userScore').value;
        localStorage.setItem(value, score)
        window.location.href = ""
    });
    clearInterval(quizCounter)
}

function renderTable() {
    var tableBody = document.getElementById("tableBody")
    for (let i=0; i < localstoreage.length; i++) {
        var userName = localStorage.key(i)
        var userScore = localStorage.getItem(userName)
        tableBody.insertAdjacentHTML('afterbegin', '<tr class="scores"><td>' + userName + ' - ' + userScore + '</td></tr>')
    }
}

function clearStorage() {
    localStorage.clear();
    window.location.reload();
}


