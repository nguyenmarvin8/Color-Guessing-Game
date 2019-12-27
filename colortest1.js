var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".squares");
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay");
var resetButton = document.querySelector("#resetButton");
var messageDisplay = document.querySelector("#message");


resetButton.addEventListener("click", function(){
    //make 6 squares(numsquares) randomly generate colors (colors)
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    this.textContent = pickColor;
    // for(var i = 0; i < squares.length; i++){
    //     squares[i].style.backgroundColor = colors[i];
    // }
})

for(var i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            changeColors(clickedColor);
            //change h1 background to winning color
            h1.style.backgroundColor = clickedColor;
            resetButton.textContent = "Play again?";
            
        }
        else {
            alert("wrong!");
        }
    })
}


//change all squares to winning color
function changeColors(colors){
    for(i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors;
    };
}

//picks random number
function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//generates random number
function generateRandomColors(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //pick a red green and blue number from 0-255
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

}