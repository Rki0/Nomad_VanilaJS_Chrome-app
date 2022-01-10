const todoForm = document.getElementById("todoInput");
const input = todoForm.querySelector("input");
const todoList = document.querySelector("#todoList");

let todos = [];

const TODOS = "todos"

function rememberTodos(){
  localStorage.setItem(TODOS, JSON.stringify(todos));
}

function storageTodos(event){
  event.preventDefault();
  const what = input.value;
  input.value = "";
  const whatObj = {
    text: what,
    id: Date.now(),
  };
  todos.push(whatObj);
  paintTodo(whatObj);
  rememberTodos();
}

let count_paintTodo = 0;

function paintTodo(whatObj){
  const li = document.createElement("li");
  li.id = whatObj.id;

  const span = document.createElement("span");
  span.innerText = whatObj.text;
  span.classList.add(`this${count_paintTodo}`);

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type","checkbox");
  checkBox.id = `done${count_paintTodo}`;
  checkBox.value = 1;
  checkBox.setAttribute("onclick","checking(this.id)");

  const deco = document.createElement("label");
  deco.setAttribute("for", `done${count_paintTodo}`);

  count_paintTodo += 1;

  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", removeList);

  li.appendChild(span);
  li.appendChild(checkBox);
  li.appendChild(deco);
  li.appendChild(button);
  todoList.appendChild(li);
}

let iteration = [];

function checking(btnId){
  const btn_Id = btnId.substr(4);
  for(let i = 0; i < count_paintTodo; i++){
    iteration.push(`this${i}`);
  }

  const whatTodo = document.querySelector(`.${iteration[btn_Id]}`);
  const whatDone = document.querySelector(`#done${btn_Id}`);

  if(whatDone.value == 1){
    whatTodo.style.textDecoration = "line-through";
    whatDone.value = 0;
  } else if(whatDone.value == 0){
    whatTodo.style.textDecoration = "none";
    whatDone.value = 1;
  }
}

function removeList(event){
  const rmli = event.target.parentElement;
  rmli.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(rmli.id));
  rememberTodos();
}

todoForm.addEventListener("submit", storageTodos);

const savedTodos = localStorage.getItem(TODOS);

if(savedTodos != null){
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}