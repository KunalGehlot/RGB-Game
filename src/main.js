var colors = [];
var pickedColor;
var numberofSquares = 6;
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");
var squares = document.querySelectorAll(".square");
var titleColor = document.getElementById("titleColor");
var messageDisplay = document.querySelector("#message");

init();

titleColor.textContent = pickedColor;

resetbtn.addEventListener("click", reset);

function init() {

    setMdBtn();
    setSq();
    reset();

}

function setMdBtn() {
    for (var i = 0; i < modeBtns.length; i++) {

        modeBtns[i].addEventListener("click", function () {
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberofSquares = 3 : numberofSquares = 6;

            reset();
        });
    }
}

function setSq() {
    for (var i = 0; i < squares.length; i++) {

        squares[i].addEventListener("click", function () {

            var clickedColor = this.style.backgroundColor;

            if (clickedColor !== pickedColor) {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            } else {
                messageDisplay.textContent = "Correct!";
                resetbtn.textContent = "Play Again?";
                h1.style.backgroundColor = clickedColor;
                changeColors(clickedColor);
            }
        });
    }
}

function changeColors(color) {

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(n) {
    var arr = []

    for (var i = 0; i < n; i++) {
        arr.push(randomColor());
    }

    return arr;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")"
}

function reset() {
    colors = generateColors(numberofSquares);
    pickedColor = pickColor();
    titleColor.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    resetbtn.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
}