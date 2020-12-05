var numSquares = 3;
var colors = generateRandomColors(numSquares);
var resetBtn = document.querySelector("#reset");
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var extremeBtn = document.querySelector("#extreme");
var pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click",function(){
   easyBtn.classList.add("selected");
   hardBtn.classList.remove("selected");
   extremeBtn.classList.remove("selected");
   resetBtn.textContent = "New Color"
   messageDisplay.textContent = "";
   h1.style.backgroundColor = "steelblue";
   numSquares = 3;
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i=0; i < squares.length; i++){
       if(colors[i]){
           squares[i].style.backgroundColor = colors[i];
       }
       else{
           squares[i].style.display ="none";
       }
   }
});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    extremeBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    resetBtn.textContent = "New Color"
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    numSquares = 6;
    colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i=0; i < squares.length; i++){
           //squares[i].style.backgroundColor = colors[i];
           //squares[i].style.display ="block";
		if(colors[i]){
           squares[i].style.backgroundColor = colors[i];
		   squares[i].style.display ="block";
       }
       else{
           squares[i].style.display ="none";
       }
   }
});

extremeBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.remove("selected");
    extremeBtn.classList.add("selected");
    resetBtn.textContent = "New Color"
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    numSquares = 9;
    colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   for(var i=0; i < squares.length; i++){
           squares[i].style.backgroundColor = colors[i];
           squares[i].style.display ="block";
   }
});

resetBtn.addEventListener("click",function(){

    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetBtn.textContent = "New Color"
    messageDisplay.textContent = "";
    h1.style.backgroundColor = "steelblue";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
    } 
});

for(var i = 0; i < squares.length; i++){

    if(colors[i]){
        squares[i].style.backgroundColor = colors[i];
    }
    else{
        squares[i].style.display ="none";
    }

    squares[i].addEventListener("click",function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct";
			messageDisplay.classList.remove("shake");
            messageDisplay.style.color = "rgb(0, 180, 0)";
            resetBtn.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor =  "#232323";
            messageDisplay.textContent = "Wrong";
			messageDisplay.classList.add("shake");
            messageDisplay.style.color = "red";
        }
    });
}

function changeColors(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateRandomColors(num){
    var arr = [];

    for(i = 0; i < num; i++){
        arr.push(randomColor())
    }
    return arr
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb("+ r + ", " + g + ", " + b + ")";
}
