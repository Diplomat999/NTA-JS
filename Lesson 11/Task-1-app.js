// Написать реализацию кнопки "Показать пароль".

// Технические требования:
// В файле Homework-buttons.html в папке files лежит разметка для двух полей ввода пароля;
// По нажатию на иконку рядом с конкретным полем - должны отображаться символы, которые ввел пользователь, иконка меняет свой внешний вид. В комментариях под иконкой - иконка другая, именно она должна отображаться вместо текущей;
// Когда пароля не видно - иконка поля должна выглядеть, как та, что в первом поле (Ввести пароль);
// Когда нажата иконка, она должна выглядеть, как та, что во втором поле (Ввести пароль);
// По нажатию на кнопку Подтвердить, нужно сравнить введенные значения в полях;
// Если значения совпадают - вывести модальное окно (можно alert) с текстом - You are welcome;
// Если значение не совпадают - вывести под вторым полем текст красного цвета Нужно ввести одинаковые значения;
// После нажатия на кнопку страница не должна перезагружаться;
// Можно менять разметку, добавлять атрибуты, теги, id, классы и так далее.

// Перший інпут
const togglePassword = document.getElementById("show-password"),
  hidePassword = document.querySelector(".hide-password"),
  password = document.getElementById("password");

hidePassword.style.display = "none";

function showOrHidePassword() {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.style.display = "none";
    hidePassword.style.display = "inline-block";
  } else {
    password.type = "password";
    togglePassword.style.display = "inline-block";
    hidePassword.style.display = "none";
  }
}

togglePassword.addEventListener("click", showOrHidePassword);
hidePassword.addEventListener("click", showOrHidePassword);

// Другий інпут
const passwordConfirm = document.getElementById("password-confirmation"),
  togglePasswordConfirm = document.getElementById("show-password-confirmation"),
  hidePasswordConfirm = document.querySelector(".hide-password-confirmation");

hidePasswordConfirm.style.display = "none";
function showOrHidePasswordConfirm() {
  if (passwordConfirm.type === "password") {
    passwordConfirm.type = "text";
    togglePasswordConfirm.style.display = "none";
    hidePasswordConfirm.style.display = "inline-block";
  } else {
    passwordConfirm.type = "password";
    togglePasswordConfirm.style.display = "inline-block";
    hidePasswordConfirm.style.display = "none";
  }
}

togglePasswordConfirm.addEventListener("click", showOrHidePasswordConfirm);
hidePasswordConfirm.addEventListener("click", showOrHidePasswordConfirm);

// порівняння паролів
const button = document.querySelector(".btn"),
  errorPassword = document.querySelector(".error-password");
errorPassword.style.color = "transparent";

function passwordCheck() {
  if (password.value == passwordConfirm.value) {
    if (password.value.length < 3) {
      password.value = 'Enter 3 or more symbols';
      password.type = "text";
      togglePassword.style.display = "none";
    } else {
      alert("You are welcome");
      password.value = "";
      passwordConfirm.value = "";
      errorPassword.style.color = "transparent";
    togglePassword.style.display = 'inline-block';
    }
  } else {
    password.inse
    passwordConfirm.value = "";
    errorPassword.style.color = "red";
  }
}

button.addEventListener("click", passwordCheck);
