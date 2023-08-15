// All variables are declared at above to reduce the type error.
let bubble = "";
let timer = 60;
let targetNum = 0;
let score = 0;

// Function to increase the score
function updateScore() {
    if (timer !== 0) {
        score += 10;
    }
    document.getElementById("scorecard").textContent = score;
}

// Function to get a Target Number
function targetNumber() {
    targetNum = Math.floor(Math.random() * 10);

    document.getElementById("target").textContent = targetNum;
}

// This function is for starting the game 
function start() {
    addBubble()
    score = 0;
    document.getElementById("scorecard").textContent = score;
    let runTime = setInterval(function () {    // This will run for every 1 sec and decrease the timer
        timer--;
        if (timer >= 0) {
            document.getElementById("timer").textContent = timer;
        } else {
            // console.log("Chaluy re mi Nishant");
            clearInterval(runTime);            // This is used to stop the interval as the timer is 0 and it should be stopped.

            bubble = `<div id="gameover">
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-celebration-party-popper-tada-decoration-christmas-38099.png?f=webp" alt="celebration image" width="100" height="100">
                        <h1>GAME OVER</h1>
                        <img src="https://cdn.iconscout.com/icon/free/png-256/free-celebration-party-popper-tada-decoration-christmas-38099.png?f=webp" alt="celebration image" width="100" height="100">
                    </div>
                    <div id="score-display">
                        <h1>Your score is <span>${score}<span></h1>
                    </div>`;
            document.getElementById("gamepannel").innerHTML = bubble;
        }
    }, 1000)
    bubble = ""
    timer = 60;
}

// Function to add all the bubbles
function addBubble() {
    bubble = "";
    for (let i = 1; i <= 132; i++) {
        let randomNumber = Math.floor(Math.random() * 10);
        bubble += `<div id="bubble">${randomNumber}</div>`;
    }
    document.getElementById("gamepannel").innerHTML = bubble;
}

// This event listener will do the check between the selected number and the target number 
document.getElementById("gamepannel").addEventListener("click", (dets) => {
    let selectedNum = Number(dets.target.textContent);

    if (selectedNum === targetNum && timer > 0) {
        updateScore()
        addBubble()
        targetNumber()
    } else {
        addBubble()
        targetNumber()
    }
})


// Event Listner to open my github profile through the logo
document.getElementById("logo").addEventListener("click", () => {
    window.open("https://github.com/almightynv/");
})


addBubble()
targetNumber()