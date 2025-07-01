const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent actual submission

  let valid = true;

  // Helper functions
  const setError = (id, message) => {
    const field = document.getElementById(id);
    const error = document.getElementById(id + "Error");
    field.classList.add("invalid");
    error.textContent = message;
    valid = false;
  };

  const clearError = (id) => {
    const field = document.getElementById(id);
    const error = document.getElementById(id + "Error");
    field.classList.remove("invalid");
    error.textContent = "";
  };

  // Full Name
  const fullName = document.getElementById("fullName").value.trim();
  if (fullName.length < 3) {
    setError("fullName", "Full name must be at least 3 characters.");
  } else {
    clearError("fullName");
  }

  // Email
  const email = document.getElementById("email").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setError("email", "Enter a valid email address.");
  } else {
    clearError("email");
  }

  // Password
  const password = document.getElementById("password").value;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  if (password.length < 8 || !hasLetter || !hasNumber) {
    setError(
      "password",
      "Password must be at least 8 characters with letters and numbers."
    );
  } else {
    clearError("password");
  }

  // Confirm Password
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (confirmPassword !== password) {
    setError("confirmPassword", "Passwords do not match.");
  } else {
    clearError("confirmPassword");
  }

  // Phone
  const phone = document.getElementById("phone").value.trim();
  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    setError("phone", "Phone number must be at least 10 digits.");
  } else {
    clearError("phone");
  }

  // Gender
  const gender = document.querySelector("input[name='gender']:checked");
  if (!gender) {
    document.getElementById("genderError").textContent =
      "Please select a gender.";
    valid = false;
  } else {
    document.getElementById("genderError").textContent = "";
  }

  // Date of Birth
  const dob = document.getElementById("dob").value;
  if (!dob) {
    setError("dob", "Date of birth is required.");
  } else {
    const dobDate = new Date(dob);
    const age = new Date().getFullYear() - dobDate.getFullYear();
    if (age < 18) {
      setError("dob", "You must be at least 18 years old.");
    } else {
      clearError("dob");
    }
  }

  // Country
  const country = document.getElementById("country").value;
  if (country === "") {
    setError("country", "Please select a country.");
  } else {
    clearError("country");
  }

  // Hobbies
  const hobbies = document.querySelectorAll("input[name='hobbies']:checked");
  if (hobbies.length === 0) {
    document.getElementById("hobbiesError").textContent =
      "Select at least one hobby.";
    valid = false;
  } else {
    document.getElementById("hobbiesError").textContent = "";
  }

  // Profile Picture (optional)
  const fileInput = document.getElementById("profilePic");
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      alert("Profile picture must be a .jpg, .jpeg, or .png file.");
      valid = false;
    }
  }

  // Bio (optional)
  const bio = document.getElementById("bio").value;
  if (bio.length > 300) {
    alert("Bio must be 300 characters or less.");
    valid = false;
  }

  if (valid) {
    alert("Registration successful!");
    form.reset();
  }
});
