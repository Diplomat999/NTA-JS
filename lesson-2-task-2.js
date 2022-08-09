// Lesson 2, task 2

let userName = prompt("What is your name?");
let userAge = +prompt("How old are you?");

while (userName == "" || userName == null || !isNaN(+userName)) {
  alert("Incorrected information");
  userName = prompt("Please enter your name!");
}

while (userAge == '' || isNaN(userAge)) {
    alert("Incorrected information");
userAge = +prompt('Please enter your age!')
}

if (userAge < 18) {
  alert("You are not allowed to visit this website");
} else if (userAge >= 18 && userAge <= 22) {
  const question = confirm("Are you sure you want to continue?");
  if (question) {
    alert("Welcome, " + userName + ".");
  } else {
    alert("You are not allowed to visit this website.");
  }
} else {
  alert(`Welcome, ${userName}.`);
}
