const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];
/**local Storage에 값을 복사해놓은건 맞지만, local Storage가 우리가 사용하는 DB가 아니라는 것을 기억하자! */

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  /**local Storage에는 text만 저장 가능하다! array는 저장 불가. */
  /**따라서 JSON.stringify를 활용하여 array를 string 형태로 저장. Storage에는 array 모양 처럼 보일 뿐!*/
}

function deleteTodo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  /** filter 함수는 return 값이 true인 것만 살려놓고, false인 원소는 삭제한다. */
  /** 클릭한 li.id와 다른 toDo는 남겨둔다는 의미. */
  /** li의 id는 string형이기 때문에 자료형을 맞춰주기 위해 parseInt를 사용 */
  saveToDos();
}

function paintToDo(newTodo){
  /*현재 Object를 인자로 받고 있음. */
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteTodo)
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
  /**item은 JS에서 event처럼 기본 제공하는 argument이며, 여기서는 parsedToDos array에 활용되어 array의 값을 의미한다. */
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos != null){
  const parsedToDos = JSON.parse(savedToDos);
  /**local Storage에 있는 string을 JS에서 활용할 수 있는 array로 바꿔준다. */
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
    /**array의 item마다 각각(forEach) paintToDo 함수를 실행시킨다. */
}

