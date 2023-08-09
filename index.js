var randomNum = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImg = "dice" + randomNum + ".png"; //Dice1.png - Dice6.png

var randomImgSrc = "images/" + randomDiceImg; //images/dice1.png - images/dice2.png

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSrc);


// For 2nd Dice 

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImg2 = "images/dice" + randomNum2 + ".png";

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomDiceImg2)

// Result 

if(randomNum > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNum2 > randomNum) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "🎲 Draw!"
}

