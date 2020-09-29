//button to change color
const colorBtn = document.querySelector(".colorBtn");
//target body element to change color
const bodyBcg = document.querySelector("body");
//display hex color code
const hex = document.querySelector(".hex");

const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

colorBtn.addEventListener("click", changeColor);

function changeColor() {
  let hexCol = "#";

  //loop that randomize hex code
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexNumbers.length);
    hexCol += hexNumbers[random];
  }
  //display background color
  bodyBcg.style.backgroundColor = hexCol;
  //display hex code
  hex.innerHTML = hexCol;
}
