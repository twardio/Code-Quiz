const startBtnEl = document.getElementById("startBtn")
const questionsEl = document.getElementById("questions")
const startScreen = document.getElementById("start-screen")

function startQuiz() {
    console.log("Hello")
    questionsEl.classList.remove("hide");
    startScreen.classList.add("hide")
    timer()
}


startBtnEl.addEventListener("click", startQuiz)






function timer (){

setInterval(displayHello, 1000);
let count = 99
function displayHello() {
 const timerEl = document.getElementById("time")
 timerEl.innerHTML = count;
 count--
 
}}
