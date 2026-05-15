let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const userShow = document.querySelector("#user-show");
const compShow = document.querySelector("#comp-show");

const fileMap = {
    "rock": "Rock.png",
    "paper": "Paper.png",
    "scissors": "Scissor.png"
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
};

const playFeedback = (type) => {
    msg.classList.remove("win-anim", "lose-anim");
    void msg.offsetWidth; // Trigger reflow to restart animation
    if(type === "win") msg.classList.add("win-anim");
    if(type === "lose") msg.classList.add("lose-anim");
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `VICTORY! ${userChoice} beats ${compChoice}`;
        msg.style.background = "#27ae60";
        playFeedback("win");
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `DEFEAT! ${compChoice} beats ${userChoice}`;
        msg.style.background = "#c0392b";
        playFeedback("lose");
    }
};

const playGame = (userChoice) => {
    // Show shaking animation
    userShow.innerHTML = `<img src="Rock.png" class="shake">`;
    compShow.innerHTML = `<img src="Rock.png" class="shake">`;
    msg.innerText = "Thinking...";
    msg.style.background = "#081b31";

    setTimeout(() => {
        const compChoice = genCompChoice();
        userShow.innerHTML = `<img src="${fileMap[userChoice]}">`;
        compShow.innerHTML = `<img src="${fileMap[compChoice]}">`;

        if(userChoice === compChoice) {
            msg.innerText = "It's a Tie! Try again.";
            msg.style.background = "#081b31";
        } else {
            let userWin = (userChoice === "rock") ? (compChoice !== "paper") :
                          (userChoice === "paper") ? (compChoice !== "scissors") :
                          (compChoice !== "rock");
            showWinner(userWin, userChoice, compChoice);
        }
    }, 700);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => playGame(choice.id));
});