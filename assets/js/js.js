var time = 3;
var timer = 0;
var secLeft;
var timerId;

var questions = document.getElementById("questions");
var answers = document.getElementById("answers");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");

var score = 0;
var index = 0;


function startQuiz(start) {
    timerEl.textContent = time;
    var firstPage = document.getElementById("header");
    firstPage.setAttribute("class", "start hide");

    questionsEl.setAttribute("class", " ");
    timerId = setInterval(function () {
        time();   //initial start time
    }, 1000);
        timerEl.textContent = time;

        getQ();
    }
//         secondsLeft--;
//         if (secLeft === 0) {
//             clearInterval(timer);

//         } else {
//             time.textContent = secondsLeft   //new time is updated after each second
//         }
//     }, 1000);
// }

// let timerInterval = setInterval(function () {

function getQ() {
    var currentQ = questions[currentQIndex];
    questions.index[0].textContent = currentQ.title;
    index++;
}

for (var i = 0; i < currentQ.options.length; i++) {
    var choice = document.createElement("submit")




function quizEnd() {
            clearInterval(timerId);
            timerEl.textContent = time;

            var lastScreenEl = 
    } 
}


function timer() {
            time--;
            timerEl.textContent = time;
            if (time <= 0)
                quizEnd();
        }





function displayQuestions() {
            console.log(questions[index].question)
            quiz.textContent = questions[index].question;
            for (var i = 0; i < questions[index].answers.length; i++) {
                //create button for each answer
                var choiceBtn = document.createElement("BUTTON");
                //display each of the answers onto the button
                choiceBtn.textContent = questions[0].answers[i]
                choices.appendChild(choiceBtn)
                timer();
            }
        }
}
