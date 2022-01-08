const loginForm = document.querySelector(".login-form");
const loginId = document.querySelector(".login-form input")

const USER_ID = "userId"
const HIDDEN = "hidden"

function storageId(event) {
  event.preventDefault();
  const name = loginId.value;
  localStorage.setItem(USER_ID, name);
  loginForm.classList.add(HIDDEN);
  sayHello(name);
}

const helloId = document.querySelector(".logIn");

function sayHello(name){
  helloId.innerText = `Hello, ${name}`;
  helloId.classList.remove(HIDDEN);
}

const savedId = localStorage.getItem(USER_ID);

if(savedId === null){
  loginForm.classList.remove(HIDDEN);
  loginForm.addEventListener("submit", storageId);
} else{
  sayHello(savedId);
}