
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6
randomNumber1=Math.floor(randomNumber1) +1;

var randomDiceImage="dice" + randomNumber1 +".png";
var randomImageSource = "images/" + randomDiceImage;
var imageDice1=document.querySelectorAll("img")[0];
imageDice1.setAttribute("src",randomImageSource);
var randomNumber2= Math.floor(Math.random()*6) +1;
var randomImageSrc = "images/" + "dice"+ randomNumber2 +".png";
var imageDice2=document.querySelectorAll("img")[1];
imageDice2.setAttribute("src",randomImageSrc);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="⛳ Player 1 wins!";
}
else if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML="⛳ Player 2 wins!";
}
else {
  document.querySelector("h1").innerHTML="Dang! Draw";
}
