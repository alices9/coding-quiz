var timerEl = document.getElementById("countdown");
var starterEl = document.getElementById("starter");
var mainTextEl = document.getElementById("main-text");
var introEl = document.getElementById("intro");
var choiceAEl = document.getElementById("choice-a")
var choiceBEl = document.getElementById("choice-b")
var choiceCEl = document.getElementById("choice-c")
var choiceDEl = document.getElementById("choice-d")

var questionList = [
    "How do you get the length of an array?",
    "Question 2"];
var answerListA = [
    ".length",
    "a2"];
var answerListB = [
    ".length - 1",
    "b2"];
var answerListC = [
    ".length + 1",
    "c2"];
var answerListD = [
    ".count",
    "d2"];
var answerSheet = [];




starterEl.addEventListener("click", function(){
    countdown();
    starterEl.style.display= "none";
    introEl.textContent = "";
    display();
})

function countdown() {
    var timeLeft = 100;

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

function display() {
    

    for (var i = 0; i <=9; i++){
        if (timerEl !== 0){

            mainTextEl.textContent = "Q" + (i+1) + ". " + questionList[i];
            choiceAEl.textContent = "(A) " + answerListA[i];
            choiceBEl.textContent = "(B) " + answerListB[i];
            choiceCEl.textContent = "(C) " + answerListC[i];
            choiceDEl.textContent = "(D) " + answerListD[i];
        }
        return;
    }
}
    
