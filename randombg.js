const body = document.querySelector("body");
const maxImageCount = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `./img/${imgNumber + 1}.jpeg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * maxImageCount);
  return number;
}

function init() {
  const randomNumber = getRandom();
  paintImage(randomNumber);
}

init();
