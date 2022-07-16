const form = document.querySelector(".frmLogin");
const inputName = document.getElementById("inputName");
const bannerUserName = document.querySelector(".bannerUserName");

const USER_NAME = "UserName"

function saveName(text) {
  localStorage.setItem(USER_NAME, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = inputName.value;
  printLoginBanner(currentValue);
  saveName(currentValue);
}

function printLoginWindow() {
  form.classList.add("show");
  form.addEventListener("submit", handleSubmit);
}

function printLoginBanner(text) {
  form.classList.remove("show");    
  form.classList.add("hide");
  bannerUserName.classList.add("show");
  bannerUserName.innerText = `Hello ${text}`;
}

function getName() {
  const storedUserName = localStorage.getItem(USER_NAME);
  if (storedUserName === null) {
    printLoginWindow();
  } else {
    printLoginBanner(storedUserName);
  }
}

getName();