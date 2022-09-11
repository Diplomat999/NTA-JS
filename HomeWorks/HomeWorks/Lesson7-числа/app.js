// Дополнить функцию createNewUser() методами подсчета возраста пользователя и его паролем.

// Технические требования:
// Возьмите выполненное домашнее задание по объектам (созданная вами функция createNewUser()) и дополните ее следующим функционалом:
// При вызове функция должна спросить у вызывающего дату рождения (текст в формате dd.mm.yyyy) и сохранить ее в поле birthday.
// Создать метод getAge() который будет возвращать сколько пользователю лет.
// Создать метод getPassword(), который будет возвращать первую букву имени пользователя в верхнем регистре, соединенную с фамилией (в нижнем регистре) и годом рождения. (например, Ivan Kravchenko 13.03.1992 → Ikravchenko1992).
// Вывести в консоль результат работы функции createNewUser(), а также функций getAge() и getPassword() созданного объекта.

function createNewUser() {
  this.firstName = prompt("What is your name?");
  this.lastName = prompt("What is your lastname?");
  this.birsdayDate = prompt("When are yor born?", "dd.mm.yyyy");
  this.birsday = this.birsdayDate.split(".");
  this.userBirsday = new Date(
    this.birsday[2],
    this.birsday[1] - 1,
    this.birsday[0]
  );
  this.login = "Your login is: ";
  this.password = "Your password is: ";
  this.getLogin = function () {
    return (
      this.login + this.firstName[0].toLowerCase() + this.lastName.toLowerCase()
    );
  };
  this.getPassword = function () {
    return (
      this.password +
      this.firstName[0].toUpperCase() +
      this.lastName.toLowerCase() +
      this.userBirsday.getFullYear()
    );
  };
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const userBirsdayNow = new Date(
    today.getFullYear(),
    this.userBirsday.getMonth(),
    this.userBirsday.getDate()
  );
  let userAge = today.getFullYear() - this.userBirsday.getFullYear();
  if (today < userBirsdayNow) {
    userAge = userAge - 1;
  }
  const userFirstName =
    this.firstName.charAt(0).toUpperCase() + this.firstName.slice(1);
  const userLastName =
    this.lastName.charAt(0).toUpperCase() + this.lastName.slice(1);
  this.getAge = function () {
    return userFirstName + " " + userLastName + " " + "is" + " " + userAge;
  };
}
const newUser = new createNewUser();
console.log(newUser.getLogin());
console.log(newUser.getPassword());
console.log(newUser.getAge());
