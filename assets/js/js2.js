var time = 3;
var timer = 0;
var secLeft;
var timerId;

var questions = document.getElementById("questions");
var correctA = document.getElementById("answers");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");

var score = 0;

var Qindex = 0;

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
    console.log("salkdfj")
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
    var currentQ = questions[Qindex];
    questions.Qindex[0].textContent = currentQ.title;
    Qindex++;
}

const questions = [

    {
        title: "Which animal listed here has a pouch?",
        options: ["a) Sugar Glider", "b) Flying squirrels"],
        correctA: "Sugar Glider"
    }

]




for (var i = 0; i < currentQ.options.length; i++) {
    var choice = document.createElement("submit")


   
       





}








    function buildQuiz() {
        const output = [];

        questions.forEach(
            (currentQ, Qindex) => {
                const options = [];
                for (letter in currentQ.options) {
                    options.push(
                        `<label>
                        < input type = "button" name = "questions(Qindex.letter)" ></input >
                        currentQ.options(letter)
                        </label > `
                    )
                }
            }
        )
    }















    function quizEnd() {
        clearInterval(timerId);
        timerEl.textContent = time;

        // var lastScreenEl = 




        function timer() {
            time--;
            timerEl.textContent = time;
            if (time <= 0)
                quizEnd();
        }





        function displayQuestions() {
            console.log(questions[Qindex].question)
            quiz.textContent = questions[Qindex].question;
            for (var i = 0; i < questions[Qindex].correctA.length; i++) {
                //create button for each answer
                var choiceBtn = document.createElement("BUTTON");
                //display each of the answers onto the button
                choiceBtn.textContent = correctA[0].answers[i]
                choices.appendChild(choiceBtn)
                timer();
            }
        }
    }

