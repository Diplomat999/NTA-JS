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

const togglePassword = document.getElementById("show-password");

function showOrHidePassword() {
  const password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

togglePassword.addEventListener("click", showOrHidePassword);

const togglePasswordConfirm = document.getElementById(
  "show-password-confirmation"
);

function showOrHidePasswordConfirm() {
  const passwordConfirm = document.getElementById("password-confirmation");
  if (passwordConfirm.type === "password") {
    passwordConfirm.type = "text";
  } else {
    passwordConfirm.type = "password";
  }
}

togglePasswordConfirm.addEventListener("click", showOrHidePasswordConfirm);
