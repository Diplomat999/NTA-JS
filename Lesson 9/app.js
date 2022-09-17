// Реализовать функцию, которая будет получать массив элементов и выводить их на страницу в виде списка.

// Технические требования:

// Создать функцию, которая будет принимать на вход массив и опциональный второй аргумент parent - DOM-элемент, к которому будет прикреплен список (по дефолту должен быть document.body).
// Каждый из элементов массива вывести на страницу в виде пункта списка;
// Используйте шаблонные строки и метод map массива для формирования контента списка перед выведением его на страницу;
// Примеры массивов, которые можно выводить на экран:

// ["Lutsk", "Cherkasy", "Kyiv", "Kharkiv", "Odessa", "Lviv"]; ["1", "2", "3", "sea", "user", 23];
// Можно взять любой другой массив.

let newUl = document.createElement("ul");
document.body.append(newUl);
function getListContent() {
  let fragment = new DocumentFragment();
  let cities = ["Lutsk", "Cherkasy", "Kyiv", "Kharkiv", "Odessa", "Lviv"];
  for (let city of cities) {
    let newLi = document.createElement("li");
    newLi.append(city);
    fragment.append(newLi);
  }
  return fragment;
}
newUl.append(getListContent());
