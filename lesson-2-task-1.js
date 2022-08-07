// Lesson 2, task 1

const name = prompt("What is your name?");
const userAge = +prompt("Howe old are you?");

if (userAge < 18) {
  alert("You are not allowed to visit this website");
} else if (userAge >= 18 && userAge <= 22) {
  const question = confirm("Are you sure you want to continue?");
  if (question) {
    alert("Welcome, " + name + ".");
  } else {
    alert("You are not allowed to visit this website.");
  }
} else {
  alert(`Welcome, ${name}.`);
}
