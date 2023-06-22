//Bring in elements

const form = document.getElementById("form");
const input = document.getElementById("input");
const todoUL = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

addTodo = (todo) => {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }
  if (todoText) {
    const todoEL = document.createElement("li");

    if (todo && todo.completed) {
      todo.classList.add("completed");
    }
    todoEL.innerText = todoText;

    todoUL.appendChild(todoEL);

    input.value = " ";

    todoEL.addEventListener("click", () => {
      todoEL.classList.toggle("completed");
    });

    todoEL.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoEL.remove();
    });
  }
};
