var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var pickedColorText = document.getElementById("pickedColorText");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

pickedColorText.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
            message.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
          
        }else{
            this.style.backgroundColor = "#232323"
            message.textContent = "Try Again";
        }  
    })
}

function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
        // change each color to match given color
        squares[i].style.backgroundColor = color;
    }

}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){

    // make an array
    var arr = []
    // add num random colors to array
    for (let index = 0; index < num; index++) {
        // get random color and push into array
        arr.push(randomColor());        
    }
    // return array
    return arr;
}

function randomColor(){
    // pick a "red" from 0-255
    var red = Math.floor(Math.random() * 256);
    // pick a "green" from 0-255
    var green = Math.floor(Math.random() * 256);
    // pick a "blue" from 0-255
    var blue = Math.floor(Math.random() * 256);

    
    return "rgb(" + red + ", " + green  + ", " + blue + ")";
}