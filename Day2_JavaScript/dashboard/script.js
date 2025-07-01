// DOM elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const filters = document.querySelectorAll("[data-filter]");
const noteInput = document.getElementById("note-input");
const addNoteBtn = document.getElementById("add-note");
const notesContainer = document.getElementById("notes-container");
const clock = document.getElementById("clock");
const greeting = document.getElementById("greeting");
const themeToggle = document.getElementById("theme-toggle");

// Theme
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});

// Clock + Greeting
function updateClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
  const hour = now.getHours();
  greeting.textContent =
    hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
}
setInterval(updateClock, 1000);
updateClock();

// Load saved data
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let notes = JSON.parse(localStorage.getItem("notes")) || [];

// Add Task
addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
  if (!text) return;
  todos.push({ text, completed: false });
  taskInput.value = "";
  saveTodos();
  renderTasks();
});

// Render Tasks
function renderTasks(filter = "all") {
  taskList.innerHTML = "";
  todos.forEach((todo, i) => {
    if (filter === "completed" && !todo.completed) return;
    if (filter === "incomplete" && todo.completed) return;

    const li = document.createElement("li");
    li.className = "task" + (todo.completed ? " completed" : "");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.onchange = () => {
      todo.completed = checkbox.checked;
      saveTodos();
      renderTasks(filter);
    };

    const span = document.createElement("span");
    span.textContent = todo.text;

    const del = document.createElement("button");
    del.textContent = "Delete";
    del.onclick = () => {
      todos.splice(i, 1);
      saveTodos();
      renderTasks(filter);
    };

    li.append(checkbox, span, del);
    taskList.appendChild(li);
  });
}

// Filters
filters.forEach((btn) => {
  btn.addEventListener("click", () => renderTasks(btn.dataset.filter));
});

// Save to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add Note
addNoteBtn.addEventListener("click", () => {
  const text = noteInput.value.trim();
  if (!text) return;
  const color = randomColor();
  notes.push({ text, color });
  noteInput.value = "";
  saveNotes();
  renderNotes();
});

// Render Notes
function renderNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((note, i) => {
    const div = document.createElement("div");
    div.className = "note";
    div.style.backgroundColor = note.color;
    div.textContent = note.text;

    const del = document.createElement("button");
    del.textContent = "×";
    del.onclick = () => {
      notes.splice(i, 1);
      saveNotes();
      renderNotes();
    };

    div.appendChild(del);
    notesContainer.appendChild(div);
  });
}

function saveNotes() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

function randomColor() {
  const colors = [
    "#f28b82",
    "#fbbc04",
    "#fff475",
    "#ccff90",
    "#a7ffeb",
    "#cbf0f8",
    "#d7aefb",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Initial render
renderTasks();
renderNotes();
