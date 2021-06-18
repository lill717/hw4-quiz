

//timer in unit 4 lesson 9

//question (loop)  unit 5 lesson 5

var time = 5;
var index = 0;

var questions = [
    {
        title: "Which animal listed here has a pouch?",
        options: ["Sugar Glider", "Flying squirrels"],
        answer: "Sugar Glider"
    },
    {
        title: "",
        options: [],
        answer: ""
    }
]
function startQuiz() {

    $(".timer").text(time);//60

    var timer = setInterval(function () {
        time--;
        //new time is updated after each second
        $(".timer").text(time);

        if (time === 0) {
            clearInterval(timer);
        }
        //or if questions ran out
    }, 1000);

    $("header").hide();
    displayQuestions();
}

function displayQuestions(){
    $(".questions").text(questions[index].title);

    for (var i = 0 ; i < questions[index].options.length; i++){
        


        //create an element to store each option eg: li, button, etc
        //display each option text onto that element
        //push the element to answers div
    }
}
//click on start quiz button
$(".start").on("click", startQuiz);

