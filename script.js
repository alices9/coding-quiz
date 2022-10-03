timerEl = document.getElementById("countdown");
starterEl = document.getElementById("starter");

starterEl.addEventListener("click", function(){
    countdown();
    starterEl.setAttribute("visibility", "hidden");
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
