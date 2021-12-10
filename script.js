"use script";

// here we are creating a random number
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Math.trunc is used to basically remove the decimal
// here we have created a initial score
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// here we have added click option.
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  //here we added a condition if no value is inputed then it will show a message no number.
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No Number !!";
    displayMessage("⛔ No Number !!");
  }
  // When Player Wins.
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Answer !!");
    document.querySelector(".number").textContent = secretNumber;

    // this will change the background color when the player wins
    document.querySelector("body").style.backgroundColor = "#60b347";

    // this will change the width of number when the player wins
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈 Too High !!" : "📉 Too Low !!";
      displayMessage(guess > secretNumber ? "📈 Too High !!" : "📉 Too Low !!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent =
      //   "🙃 You Lost the Game !!";
      displayMessage("🙃 You Lost the Game !!");
      document.querySelector(".score").textContent = 0;
    }
  }
});
//   // When the score is too Low.
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "📉 Too Low !!";
//       score--;
//       document.querySelector(".score").textContent = score;
//     } else {
//       document.querySelector(".message").textContent =
//         "🙃 You Lost the Game !!";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

// this is to reload the game by clicking on "Again!" button.
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Start Guessing...";
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
