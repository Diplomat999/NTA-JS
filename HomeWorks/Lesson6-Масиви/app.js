// Реализовать функцию фильтра массива по указанному типу данных.

// Технические требования:

// Написать функцию filterBy(), которая будет принимать в себя 2 аргумента. Первый аргумент - массив, который будет содержать в себе любые данные, второй аргумент - тип данных.
// Функция должна вернуть новый массив, который будет содержать в себе все данные, которые были переданы в аргумент, за исключением тех, тип которых был передан вторым аргументом. То есть, если передать массив ['hello', 'world', 23, '23', null], и вторым аргументом передать 'string', то функция вернет массив [23, null].


const arr = ["Max", "Ivan", 35, null, 42, "Jurii", 56];
const test = ['Nick', 36, 'Sergiy', 19];


function filterBy(arr, number) {
  return function (item, index, array) {
    return isNaN(item);
  };
}

function filterByString(arr, string) {
    return function (item, index, array) {
      return !isNaN(item);
    };
  }

console.log(arr.filter(filterBy()));
console.log(test.filter(filterBy()));
console.log(arr.filter(filterByString()));
console.log(test.filter(filterByString()));

// або

// console.log(arr.filter((item, index, array) => {
// return isNaN(item);
// }));

// console.log(arr.filter((item, index, array) => {
// return !isNaN(item);
// }));
