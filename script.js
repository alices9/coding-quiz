var timerEl = document.getElementById("countdown");
var starterEl = document.getElementById("starter");
var mainTextEl = document.getElementById("main-text");
var introEl = document.getElementById("intro");
var choiceAEl = document.getElementById("choice-a")
var choiceBEl = document.getElementById("choice-b")
var choiceCEl = document.getElementById("choice-c")
var choiceDEl = document.getElementById("choice-d")

var questionList = ["How do you get the length of an array?"];
var answerListA = [".length"];
var answerListB =[".length - 1"];
var answerListC =[".length + 1"];
var answerListD =[".count"];





starterEl.addEventListener("click", function(){
    countdown();
    starterEl.setAttribute("visibility", "hidden");
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

            mainTextEl.textContent = questionList[i];
            choiceAEl.textContent = answerListA[i];
            choiceBEl.textContent = answerListB[i];
            choiceCEl.textContent = answerListC[i];
            choiceDEl.textContent = answerListD[i];
        }
        return;
    }
}
    
