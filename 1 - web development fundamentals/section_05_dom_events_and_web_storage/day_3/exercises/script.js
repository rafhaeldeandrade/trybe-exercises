function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const ulDays = document.getElementById("days");

for (let i = 0; i < dezDaysList.length; i += 1) {
  const li = document.createElement("li");
  li.innerText = dezDaysList[i];

  if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) {
    li.classList.add("day", "holiday");
  } else if (
    dezDaysList[i] === 4 ||
    dezDaysList[i] === 11 ||
    dezDaysList[i] === 18 ||
    dezDaysList[i] === 25
  ) {
    li.classList.add("day", "friday");
  } else {
    li.classList.add("day");
  }
  ulDays.appendChild(li);
}

function createButton(string, id) {
  const button = document.createElement("button");
  button.setAttribute("type", "button");
  button.setAttribute("id", id);
  button.innerText = string;
  return button;
}

const div = document.querySelector(".buttons-container");
const buttonHoliday = createButton("Feriados", "btn-holiday");
const buttonFriday = createButton("Sexta-Feira", "btn-friday");
div.appendChild(buttonHoliday);
div.appendChild(buttonFriday);
buttonHoliday.addEventListener("click", () => {
  const holiday = document.getElementsByClassName("holiday");

  for (let i = 0; i < holiday.length; i += 1) {
    if (holiday[i].style.backgroundColor === "salmon") {
      holiday[i].style.backgroundColor = "rgb(238, 238, 238";
    } else {
      holiday[i].style.backgroundColor = "salmon";
    }
  }
});

buttonFriday.addEventListener("click", () => {
  const friday = document.getElementsByClassName("friday");

  for (let i = 0; i < friday.length; i += 1) {
    if (friday[i].style.backgroundColor === "grey") {
      friday[i].style.backgroundColor = "rgb(238, 238, 238";
    } else {
      friday[i].style.backgroundColor = "grey";
    }
  }
});

for (let li of document.getElementsByClassName("day")) {
  li.addEventListener("mouseover", zoomIn);
  li.addEventListener("mouseout", zoomOut);
  li.addEventListener("click", (e) => (e.target.style.color = colorSelected));
}

function zoomIn(e) {
  e.target.style.transform = "scale(1.6)";
}

function zoomOut(e) {
  e.target.style.transform = "scale(1)";
}

const myTasks = document.querySelector(".my-tasks");

function adicionaTarefa(tarefa) {
  let elemento = document.createElement("span");
  elemento.innerText = tarefa;
  myTasks.appendChild(elemento);
}

adicionaTarefa("Cozinhar");

function adicionaCor(cor) {
  let elemento = document.createElement("div");
  elemento.style.backgroundColor = cor;
  elemento.classList.add("task");
  myTasks.appendChild(elemento);
}

adicionaCor("blue");

const task = document.getElementsByClassName("task");
var colorSelected = "#777";

for (let div of task) {
  div.addEventListener("click", () => {
    if (div.classList.contains("selected")) {
      div.classList.remove("selected");
      colorSelected = "#777";
    } else {
      div.classList.add("selected");
      colorSelected = "blue";
    }
  });
}

const buttonCompromissos = document.getElementById("btn-add");
const taskInput = document.getElementById("task-input");
const taskList = document.querySelector(".task-list");

document.createElement;

buttonCompromissos.addEventListener("click", () => {
  if (taskInput.value === "") {
    alert("erro ao clicar em ADICIONAR.");
  } else {
    let li = document.createElement("li");
    li.innerText = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

taskInput.addEventListener("keyup", (event) => {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("btn-add").click();
  }
});
