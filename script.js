const btncheck = document.querySelector(".check");
const displayMessage = document.querySelector(".message");
const scoreh = document.querySelector(".score");
const highscoreh = document.querySelector(".highscore");
const number = document.querySelector(".number");
const btnagain = document.querySelector(".again");
const body = document.querySelector(".winner");
const message = function (message) {
  displayMessage.textContent = message;
};
let secertNumber = Math.trunc(Math.random() * 20 + 1);
let playing = true;
let score = 20;
let highscore = 0;
let gameStarting = true;
body.classList.remove("winner");

btncheck.addEventListener("click", function () {
  const input = Number(document.querySelector(".guess").value);

  if (playing) {
    if (!input) {
      gameStarting = false;
      message("Please Enter a Number");
    } else if (input === secertNumber) {
      playing = false;
      message("Congrats You got it right !!");
      body.classList.add("winner");

      number.textContent = secertNumber;
      if (score > highscore) {
        highscoreh.textContent = score;
      }
    } else {
      gameStarting = true;
      input > secertNumber ? message("Too high") : message("Too low");
      if (score >= 1) {
        score--;
        scoreh.textContent = score;
      } else {
        playing = false;
        message("Game over!!!");
      }
    }
  }
  console.log(secertNumber);
});

btnagain.addEventListener("click", function () {
  body.classList.remove("winner");
  secertNumber = Math.trunc(Math.random() * 20 + 1);
  playing = true;
  message("Start Guessing...");
  score = 20;
  scoreh.textContent = score;
  document.querySelector(".guess").value = "";
  number.textContent = "?";
});
