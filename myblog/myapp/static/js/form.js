function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  let correct = 1;
  if (name == "" || email == "" || message == "") {
    alert("All fields are required!");
    correct = 0;
    return false;
  }
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Email in invalid");
    correct = false;
    return false;
  }
  correct == true;
  if (correct == true) {
    alert("Success!");
  }
  return true;
}
