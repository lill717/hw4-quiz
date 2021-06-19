var Qindex = 0
var time = 3;
var timer;
var secLeft = 60;
var isQuizOver = false;

var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("#submit");



var questions = [
    {
        question: "Which animal listed here has a pouch for their joey?",
        options: ["a) Sugar Gliders", "b) Flying squirrels", "c) Chipmucks", "d) Raccoons"],
        correctA: "a) Sugar Gliders"
    },
    {
        question: "How many cervical vertebrae (neck bones) does a giraffe have?",
        options: ["a) 28", "b) 21", "c) 14", "d) 7"],
        correctA: "d) 7"
    },
    {
        question: "?",
        options: ["a) Sugar Gliders", "b) Flying squirrels", "c) Chipmucks", "d) Raccoons"],
        correctA: ""
    },
    {
        question: "W?",
        options: ["a) Sugar Gliders", "b) Flying squirrels", "c) Chipmucks", "d) Raccoons"],
        correctA: ""
    },
    {
        question: "?",
        options: ["a) Sugar Gliders", "b) Flying squirrels", "c) Chipmucks", "d) Raccoons"],
        correctA: ""
    },
    {
        question: "?",
        options: ["a) Sugar Gliders", "b) Flying squirrels", "c) Chipmucks", "d) Raccoons"],
        correctA: ""
    },
    {
        question: "?",
        options: ["a) Sugar Gliders", "b) Flying squirrels", "c) Chipmucks", "d) Raccoons"],
        correctA: ""
    }
]



function startQuiz() {
    // timerEl.textContent = time;

    var firstPage = document.getElementById("header");   //displays first page
    firstPage.setAttribute("class", "hide");        //hides loading page


    function startTimer() {
        timer = setInterval(function () {
            secLeft--;
            //Checking to see if quiz is over. If index > # of Q  use the var isGameOver
            if (isQuizOver) {
                Qindex > questions.length
            }
        }, 1000)
    }


}
// questionsEl.setAttribute("class", " ");


function displayQ() { 
console.log(Qindex) //what is current index? Get that item from array
//render it onto website
//display Q
///////iterate over array of answers, and with each answer: display text of answer
//create buttons
//attach data to DOM element by custom attr. Create custom attr that says whether the answer is correct or not
//doesn't need to know correct/wrong


    var currentQ = questions[Qindex];
    questions.Qindex[0].textContent = currentQ.title;
    Qindex++;

    for (var currentQ) {
        console.log(currentQ);
    }




// var optionsBtn = document.createElement(“button”);
// optionsBtn.id = “optionsBtn”;
// optionsBtn.textContent = index;
// optionsBtn.style.background = “blue”;
// optionsEl.appendChild(optionsBtn);


document.addEventListener("click", "button", function (startQuiz) {
    console.log(startQuiz.start.startBtn);
    if (startQuiz.start.startBtn) = questions[index].correctA {

}









function isAnswerCorrect() { }
// get custom attr of button clicked  to see if clicked answer is correct/wrong. then if correct, go here, if not, go there
//use event.target to access custom attr 
//doesn't need to know Q was

function answerCorrect() {
    Qindex++;
    displayQ()
}

function answerWrong() {
    Qindex++;
    displayQ()
}







    }

}
}




