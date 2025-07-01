// Task 1
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("textDisplay").textContent = "Hello, JavaScript!";
});

// Task 2
document.getElementById("toggleHighlightBtn").addEventListener("click", () => {
  document.querySelector(".box").classList.toggle("highlight");
});

// Task 3
document.getElementById("addItemBtn").addEventListener("click", () => {
  const input = document.getElementById("itemInput").value;
  if (input.trim()) {
    const li = document.createElement("li");
    li.textContent = input;
    document.getElementById("itemList").appendChild(li);
  }
});

// Task 4
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    e.target.parentElement.remove();
  }
});

// Task 5
document.getElementById("changeImageBtn").addEventListener("click", () => {
  document.getElementById("mainImage").src =
    "https://thuythithi.com/wp-content/uploads/2023/04/nen-chon-nuoi-meo-ta-hay-meo-tay-2.jpg";
});

// Task 6
document.getElementById("submitUsername").addEventListener("click", () => {
  const username = document.getElementById("usernameInput").value;
  alert(`Username: ${username}`);
});

// Task 7
document.querySelectorAll(".colorBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert(btn.textContent);
  });
});

// Task 8
const hoverBox = document.querySelector(".hoverBox");
hoverBox.addEventListener(
  "mouseenter",
  () => (hoverBox.style.backgroundColor = "lightblue")
);
hoverBox.addEventListener(
  "mouseleave",
  () => (hoverBox.style.backgroundColor = "")
);

// Task 9
setInterval(() => {
  const now = new Date();
  document.getElementById("clockDisplay").textContent =
    now.toLocaleTimeString();
}, 1000);

// Task 10
document.getElementById("validateBtn").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const error = document.getElementById("errorMessage");
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  error.textContent = isValid ? "" : "Invalid email address.";
});

// Task 11
document.getElementById("hideParaBtn").addEventListener("click", () => {
  document.getElementById("infoPara").style.display = "none";
});

// Task 12
window.addEventListener("DOMContentLoaded", () => {
  const hour = new Date().getHours();
  const greeting = document.getElementById("greetingText");
  if (hour < 12) greeting.textContent = "Good Morning";
  else if (hour < 18) greeting.textContent = "Good Afternoon";
  else greeting.textContent = "Good Evening";
});

// Task 13
document.getElementById("formSubmit").addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput");
  const error = document.getElementById("nameError");
  if (nameInput.value.trim() === "") {
    nameInput.style.border = "2px solid red";
    error.textContent = "Name is required!";
  } else {
    nameInput.style.border = "";
    error.textContent = "";
  }
});

// Task 14
document.getElementById("onceBtn").addEventListener("click", (e) => {
  e.target.disabled = true;
});

// Task 15
document.getElementById("bioInput").addEventListener("input", () => {
  const max = 200;
  const len = document.getElementById("bioInput").value.length;
  document.getElementById("charCount").textContent = `${
    max - len
  } characters remaining`;
});

// Task 16
document.getElementById("addBoxBtn").addEventListener("click", () => {
  const box = document.createElement("div");
  box.style.width = "50px";
  box.style.height = "50px";
  box.style.backgroundColor = "skyblue";
  box.style.margin = "5px";
  document.getElementById("boxContainer").appendChild(box);
});

// Task 17
document.getElementById("todoList").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("strike");
  }
});

// Task 18
document.getElementById("togglePassword").addEventListener("change", () => {
  const input = document.getElementById("passwordInput");
  input.type = input.type === "password" ? "text" : "password";
});

// Task 19
document.querySelectorAll(".optionBox").forEach((cb) => {
  cb.addEventListener("change", () => {
    const count = document.querySelectorAll(".optionBox:checked").length;
    document.getElementById("checkedCount").textContent = count;
  });
});

// Task 20
document.querySelectorAll(".thumbnail").forEach((thumb) => {
  thumb.addEventListener("click", () => {
    document.getElementById("mainPhoto").src = thumb.src;
  });
});
