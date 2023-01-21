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

startButton.addEventListener("click", showQuestions);

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
  removeAllChildNodes(choices);
  for (i = 0; i < currentQuestion.options.length; i++) {

    var choice = document.createElement("button");
    choice.textContent = currentQuestion.options[i];
    choice.onclick = handleclick;
    choices.appendChild(choice);
  }



}


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}



function handleclick() {
  var choice = this.textContent;
  var answer = questions[currentQuestionIndex].answer;
  currentQuestionIndex++;
  if (choice === answer) {
    return;
  }
  else {
    timer = timer - 10;
  }

  if (currentQuestionIndex < (questions.length)) {
    getquestions();
  }

  else { alert("game over") }

}