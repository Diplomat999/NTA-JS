// Домашнее задание 2
// Реализовать переключение вкладок (табы)

// Технические требования:
// В папке files лежит разметка для вкладок. Нужно, чтобы по нажатию на вкладку отображался конкретный текст для нужной вкладки. При этом остальной текст должен быть скрыт. В комментариях указано, какой текст должен отображаться для какой вкладки.
// Разметку можно менять, добавлять нужные классы, id, атрибуты, теги.
// Нужно предусмотреть, что текст на вкладках может меняться, и что вкладки могут добавляться и удаляться. При этом нужно, чтобы функция, написанная в JavaScript, из-за таких правок не переставала работать.

const tabsBtns = document.querySelectorAll(".tabs-title"),
  tabsText = document.querySelectorAll(".tabs-text");

console.log("tabsBtns: ", tabsBtns);
console.log("tabsText: ", tabsText);

tabsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    showTab();
  });
});

function showTab() {
  for (let i = 0; i <= tabsBtns.length; i++) {
    for (let j = 0; j < tabsText.length; j++) {
      if (tabsBtns[i].style.backgroundColor == "#937341;") {
        tabsText[j].classList.toggle("show");
      }
    }
  }
}

// tabsBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     btn.classList.toggle("active");
//     for (let i = 0; i < tabsBtns.length; i++){
//           for (let j = 0; j < tabsText.length; j++) {
//             if(tabsBtns[i].style.backgroundColor == '#937341;') {
//               tabsText[j].classList.toggle('show');
//             }
//           }
//         }
//   }

// )});

//     tabsText.forEach((tab) => {
//   tab.classList.toggle('show');
// })
