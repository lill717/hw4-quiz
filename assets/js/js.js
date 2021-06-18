var time = 3;
var timer = 0;
var secLeft;
var timerId;

var questions = "";
var score = 0;
var index = 0;


// function startQuiz(start) {
//     let timer = setInterval(function () {
//         time.textContent = secondsLeft;   //initial start time
//         secondsLeft--;
//         if (secLeft === 0) {
//             clearInterval(timer);
          
//         } else {
//             time.textContent = secondsLeft   //new time is updated after each second
//         }
//     }, 1000);
// }

// let timerInterval = setInterval(function () {


function quizEnd() {
    clearInterval(timerId);
    timerEl.textContent = time;

    var lastScreenEl = 
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

    