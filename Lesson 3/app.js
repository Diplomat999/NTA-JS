// Task 1
// Считать с помощью модального окна браузера число, которое введет пользователь.
// Вывести в консоли все числа кратные 5, от 0 до введенного пользователем числа. Если таких чисел нету - вывести в консоль фразу `Sorry, no numbers'

// let userNumber = +prompt('Enter a number');

// for (let i = 0; i <= userNumber; i++) {
//   if (i % 5 == 0) {
//     console.log(i);
//   } else if (userNumber < 5) {
//     console.log('Sorry, no numbers')
//   }
// }

// Task 1 - function

// const multiplicity = (n, userNumber) => {
//   let number = [];
//   for (let i = 1; i < userNumber; i++) {
//     if (i % n === 0) {
//       number.push(i);
//     }
//   }
//   return number;
// }
// console.log('0,' + multiplicity(5, userNumber));



// Task 2 Проверить, что введенное значение является целым числом. Если данное условие не соблюдается, повторять вывод окна на экран до тех пор, пока не будет введено целое число.

// let userNumber = +prompt('Enter a number');

// Первый метод проверки, что число целое
// while (Number.isInteger(userNumber) == false) {
//     userNumber = +prompt('Enter an integer');
// }

// Второй  метод проверки, что число целое
// while(userNumber % 1 != 0) {
//     userNumber = +prompt('Enter an integer');
// }

// for (let i = 0; i <= userNumber; i++) {
//   if (i % 5 == 0) {
//     console.log(i);
//   } else if (userNumber < 5) {
//     console.log('Sorry, no numbers');
//   }
// }



// Task 3 Считать два числа, m и n. Вывести в консоль все простые числа в диапазоне от m до n (меньшее из введенных чисел будет m, бОльшее будет n). Если хотя бы одно из чисел не соблюдает условие валидации, указанное выше, вывести сообщение об ошибке, и спросить оба числа заново.

let m = +prompt("Enter first number");
let n = +prompt("Enter seond higher number");

while (m >= n) {
  m = +prompt("Enter the first lower number");
  n = +prompt("Enter seond higher number");
}

for (let i = m; i <= n; i++) {
  let flag = 1;
  if (i > 2 && i % 2 != 0) {
    for (let j = 3; j * j <= i; j = j + 2) {
      if (i % j == 0) {
        flag = 0;
      }
    }
  } else if (i != 2) flag = 0;
  if (flag == 1) {
    console.log(i);
  }
}