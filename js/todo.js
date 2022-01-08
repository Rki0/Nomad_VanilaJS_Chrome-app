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

function paintTodo(whatObj){
  const li = document.createElement("li");
  li.id = whatObj.id;
  const span = document.createElement("span");
  span.innerText = whatObj.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", removeList);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
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