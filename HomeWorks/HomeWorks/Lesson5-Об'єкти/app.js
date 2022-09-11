// Реализовать функцию для создания объекта "пользователь".

// Технические требования:

// Написать функцию createNewUser(), которая будет создавать и возвращать объект newUser.
// При вызове функция должна спросить у вызывающего имя и фамилию.
// Используя данные, введенные пользователем, создать объект newUser со свойствами firstName и lastName.

// function createNewUser() {
//   this.firstName = prompt("What s your name?");
//   this.lastName = prompt("What is your lastname?");
// }
// let newUser = new createNewUser();
// console.log(newUser);

// Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko).
// Создать пользователя с помощью функции createNewUser(). Вызвать у пользователя функцию getLogin(). Вывести в консоль результат выполнения функции.

function createNewUser() {
  this.firstName = prompt("What s your name?");
  this.lastName = prompt("What is your lastname?");
  this.login = 'Your login is: '
  this.getLogin = function () {
    return this.login + this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
  };
}
const newUser = new createNewUser();
alert(newUser.getLogin());
// // console.log(newUser.getLogin());
