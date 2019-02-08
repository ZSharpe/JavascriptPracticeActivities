// Change the body background of eventPractice.html on button click

var button1 = document.querySelector("#button1");
button1.addEventListener("click", function(){

    var body = document.querySelector("body");
    console.log(body);
    body.classList.toggle("backgroundPurple");
})


// Score application, click to add points, cap at 5 points, specify cap, add a button to reset the score.

var player1 = document.querySelector("#player1");
var player2 = document.querySelector("#player2");
var resetButton = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var score1Text = document.querySelector("#score1");
var score2Text = document.querySelector("#score2");
var gameOver = false;
var winningScore = 5;
var numberInput = document.querySelector("input");
var playingTo = document.querySelector("#playingTo");

// Reset function to clear and reset field values
function reset(){
    p1Score = 0;
    p2Score = 0;
    score1Text.textContent = p1Score;
    score2Text.textContent = p2Score;
    gameOver = false;
    score1Text.classList.remove("winner");
    score2Text.classList.remove("winner");
}

// Player 1 and 2 events to add to and cap score
player1.addEventListener("click", function(){
    if (!gameOver) {
      p1Score++;
      if(p1Score === winningScore){
          score1Text.classList.toggle("winner");
          gameOver = true;
      }
      score1Text.textContent = p1Score;
}})

player2.addEventListener("click", function(){
    if (!gameOver) {
      p2Score++;
      if(p2Score === winningScore){
          score2Text.classList.toggle("winner");
          gameOver = true;
      }
      score2Text.textContent = p2Score;
}})

// Reset button click event
resetButton.addEventListener("click", function(){
    reset();
})

// Changing winning score input field
numberInput.addEventListener("change", function(){
    reset();
    console.log("Changing!")
    playingTo.textContent = numberInput.value;
    winningScore = Number(numberInput.value);
    
})

