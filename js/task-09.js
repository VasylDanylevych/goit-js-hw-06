function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodeEl = document.querySelector("body");
const colorEl = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");


btnChangeColor.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodeEl.style.backgroundColor = color;
  colorEl.textContent = color;
});
