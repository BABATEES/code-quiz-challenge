console.log("Answer the following:" + questions);

var questionsdiv = document.querySelector("#questions");
var questionstitle = document.querySelector("#question-title");
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var choices = document.querySelector("#choices");
var timeSpan = document.querySelector("#time");
var endscreen = document.querySelector("#end-screen")
var feedback = document.querySelector("#feedback")
var currentQuestionIndex = 0;

var timer = 0

//Created function to display the questions for answering
function showQuestions() {

  startScreen.setAttribute("class", "hide");
  questionsdiv.setAttribute("class", "start");
  timeSpan.textContent = timer;
  getquestions();

}

function getquestions() {
  var currentQuestion = questions[currentQuestionIndex];
  console.log(currentQuestion);
  questionstitle.textContent = currentQuestion.question;
  for (i = 0; i < currentQuestion.options.length; i++) {
    var choice = document.createElement("button");
    choice.textContent = currentQuestion.options[i];
    choice.onclick = handleclick;
    choices.appendChild(choice);
  }



}

