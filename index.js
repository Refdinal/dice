var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomimages1 = "./images/dice" + randomNumber1 + ".png";
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomimages2 = "./images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomimages1);
document.querySelectorAll("img")[1].setAttribute("src", randomimages2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Win";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 Win";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
