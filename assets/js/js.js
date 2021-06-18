var time = 3;
var timer = 0;
var time
var questions= "";
var score = 0;

function timer() {
    let timer = setInterval(function() {
        timeEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timeEl.textContent = “Time’s up!”
        } else {
            secondsLeft--;
            timeEl.textContent = secondsLeft
        }
    }, 1000);
}

// let timerInterval = setInterval(function () {