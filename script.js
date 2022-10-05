var timerEl = document.getElementById("countdown");
var starterEl = document.getElementById("starter");
var mainTextEl = document.getElementById("main-text");
var introEl = document.getElementById("intro");
var choiceAEl = document.getElementById("choice-a");
var choiceBEl = document.getElementById("choice-b");
var choiceCEl = document.getElementById("choice-c");
var choiceDEl = document.getElementById("choice-d");
var choicesEl = document.getElementById("choices");

var questionList = [
    "How do you get the length of an array?",
    "Question 2",
    "Question 3"];
var answerListA = [
    ".length",
    "a2",
    "a3"];
var answerListB = [
    ".length - 1",
    "b2",
    "b3"];
var answerListC = [
    ".length + 1",
    "c2",
    "c3"];
var answerListD = [
    ".count",
    "d2",
    "d3"];
var answerSheet = [".length", "d2", "b3"];


choicesEl.style.display = "none";

starterEl.addEventListener("click", function(){
    countdown();
    starterEl.style.display = "none";
    choicesEl.style.display = "inline-flex";
    introEl.textContent = "";
    createQuestion();
})

function countdown() {
    var timeLeft = 50;

    var timeInterval = setInterval(function() {
        if (timeLeft >= 1){
            timerEl.textContent = "Time: " + timeLeft + " second(s) left";
            timeLeft--;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
        }
    }, 1000);
}

function createQuestion() {
    
    for (var i = 0; i <=3; i++){
        if (timerEl !== 0){
            mainTextEl.textContent = "Q" + (i+1) + ". " + questionList[i];
            choiceAEl.textContent = "(A) " + answerListA[i];
            choiceBEl.textContent = "(B) " + answerListB[i];
            choiceCEl.textContent = "(C) " + answerListC[i];
            choiceDEl.textContent = "(D) " + answerListD[i];

            choiceAEl.addEventListener("click", createQuestion)
        }
        return;
    }
}
    
