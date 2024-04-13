// Colors Selection
var colors = generateRandomColors(3);

// Number of lives
var lives = 3;

// Generate random RGB value for user to guess
var pickedColor = pickColor();

// Selecting elements
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var colorOptions = document.getElementById("colorOptions");
var resetButton = document.getElementById("resetButton");

// Display the RGB value to guess
colorDisplay.textContent = pickedColor;

// Create color options and add event listeners
for (var i = 0; i < colors.length; i++) {
    var colorOption = document.createElement("div");
    colorOption.classList.add("colorOption");
    colorOption.style.backgroundColor = colors[i];
    colorOption.addEventListener("click", function() {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
            messageDisplay.classList.add("incorrect");
            lives--;
            if (lives === 0) {
                messageDisplay.textContent = "Game Over!";
                resetButton.textContent = "Play Again?";
            }
        }
    });
    colorOptions.appendChild(colorOption);
}

// Function to change all colors to correct color
function changeColors(color) {
    for (var i = 0; i < colors.length; i++) {
        colorOptions.children[i].style.backgroundColor = color;
    }
}

// Generate random RGB color
function generateRandomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Generate array of random RGB colors
function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(generateRandomColor());
    }
    return arr;
}

// Pick a random color from colors array
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

// Reset the game
resetButton.addEventListener("click", function() {
    lives = 3;
    colors = generateRandomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    messageDisplay.classList.remove("incorrect");
    resetButton.textContent = "New Colors";
    for (var i = 0; i < colors.length; i++) {
        colorOptions.children[i].style.backgroundColor = colors[i];
    }
});
