const randomNumber1 = Math.floor((Math.random() * 6)) + 1;
const randomNumber2 = Math.floor((Math.random() * 6)) + 1;

let h1Element = document.getElementsByTagName("h1")[0];

if (randomNumber1 > randomNumber2) {
  h1Element.textContent = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  h1Element.textContent = "Player 2 Wins!🚩"
} else {
  h1Element.textContent = "Draw";
}

document.getElementsByClassName("img1")[0].setAttribute("src", `images/dice${randomNumber1}.png`);
document.getElementsByClassName("img2")[0].setAttribute("src", `images/dice${randomNumber2}.png`);
