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
var reset = document.querySelector("#reset");
var p1Score = 0;
var p2Score = 0;
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");


player1.addEventListener("click", function(){
    p1Score++;
    score1.textContent = p1Score;
})

player2.addEventListener("click", function(){
    p2Score++;
    score2.textContent = p2Score;
})