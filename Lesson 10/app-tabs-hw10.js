// Домашнее задание 2
// Реализовать переключение вкладок (табы)

// Технические требования:
// В папке files лежит разметка для вкладок. Нужно, чтобы по нажатию на вкладку отображался конкретный текст для нужной вкладки. При этом остальной текст должен быть скрыт. В комментариях указано, какой текст должен отображаться для какой вкладки.
// Разметку можно менять, добавлять нужные классы, id, атрибуты, теги.
// Нужно предусмотреть, что текст на вкладках может меняться, и что вкладки могут добавляться и удаляться. При этом нужно, чтобы функция, написанная в JavaScript, из-за таких правок не переставала работать.

const tabsBtns = document.querySelectorAll(".tabs-title"),
  tabsText = document.querySelectorAll(".tabs-text");
const btns = Array.from(tabsBtns);
const tabs = Array.from(tabsText);

console.log(tabsBtns);
console.log(tabsText);

function getTab() {
  const buttons = btns.map(function (index) {
    return index;
  });
  const content = tabs.map(function (index) {
    return index;
  });
  for(let i=0; i<buttons.length; i++) {
    const button = buttons[i];
    for(let j=0; j<content.length; j++) {
      const cont = content[j];
    if(button === cont) {
      cont.classList.toggle('show')
    }else{
      cont.classList.toggle('show')
    }
  }
    
  }
}

tabsBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    getTab();
    
    // for (let i = 0; i < tabsBtns.length; i++) {
    //   let btntItem = tabsBtns[i];
    
    // for (let j = 0; j < tabsText.length; j++) {
    //   let textItem = tabsText[j];
    
    // if (btntItem === textItem) {
    //   tabsText[j].classList.toggle("show");
    // } else {
    //   tabsText[j].classList.toggle("show");
    // }}
  // }
  // });
})});

// function clickBtn () {
//   if(btn.classList.contains('active')){
//     btn.classList.remove('active');
// }else {
//     btn.classList.add('active');
// }
// }

// function showTab() {
//   for (let item of tabsBtns) {
//     console.log(item[1])
//   }
// }

// showTab();
