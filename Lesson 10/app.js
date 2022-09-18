// Домашнее задание 1
// Создать поле для ввода цены с валидацией.

// Технические требования:

// При загрузке страницы показать пользователю поле ввода (input) с надписью Price. Это поле будет служить для ввода числовых значений
// Поведение поля должно быть следующим:
// При фокусе на поле ввода - у него должна появиться рамка зеленого цвета. При потере фокуса она пропадает.
// Когда убран фокус с поля - его значение считывается, над полем создается span, в котором должен быть выведен текст: Текущая цена: ${значение из поля ввода}. Рядом с ним должна быть кнопка с крестиком (X). Значение внутри поля ввода окрашивается в зеленый цвет.
// При нажатии на Х - span с текстом и кнопка X должны быть удалены. Значение, введенное в поле ввода, обнуляется.
// Если пользователь ввел число меньше 0 - при потере фокуса подсвечивать поле ввода красной рамкой, под полем выводить фразу - Please enter correct price. span со значением при этом не создается.

const div = document.getElementById('div');
const input = document.getElementById("price");
input.value = "Price";
const span = document.getElementById("span");
const button = document.getElementById("reset");
div.addEventListener("mouseover", () => {
  input.style.border = "2px solid green";
  input.style.color = "black";
  // span.style.color = 'transparent';
});

div.addEventListener("mouseout", () => {
  input.style.border = "2px solid black";
  input.style.color = "green";
  span.style.color = 'black';
  span.innerText = `Your price:` + input.value;
  button.style.background = 'lightgrey';
  button.style.color = 'black';
  button.style.border = '1px solid black';
});

// button.addEventListener('onclick', () => {
//   span.style.color = 'transparent';
//   button.style.color = 'transparent';
// })


  




// input.addEventListener("mouseout", () => {
  
// }
// span = `Текущая цена: ${input.value}`
// input.insertAdjacentHTML("beforebegin", span);

// let button = document.getElementById("reset");
// button.setAttribute('type', 'reset');
// button.after(input);

// button.value = 'X';
// input.insertAdjacentHTML('beforebegin', button);
// let atribute = button.setAttribute('type', 'reset');

// Браузерні події

// click
// mousemove
// contextmenu - права кнопка мишки
// mouseover / mouseout
// mousedown / mouseup
// dblclick

// const btn = document.getElementById('button');
// const elem = document.getElementsByClassName('gogi')[0];
// const text = document.getElementById('text')

// btn.onclick = () => {
//     console.log('Hello Gogi Doe!')
// }
//
// btn.onclick = () => {
//     alert('Hello World!')
// }
// function gogi() {
//     console.log('123')
//     // btn.removeEventListener('click', gogi)
// }

// btn.addEventListener('click', () => {
//     console.log('click')
// })

// elem.addEventListener('mousemove', () => {
//     console.log('move')
// })

// elem.addEventListener('contextmenu', () => {
//     console.log('Right button');
// })
//
// elem.addEventListener('mousedown', () => {
//     console.log('mouse down')
// })
//
// elem.addEventListener('mouseup', () => {
//     console.log('mouse up')
// })
//
// // mouseover / mouseout
//
// elem.addEventListener('mouseover', () => {
//     console.log('mouse over')
// })
//
// elem.addEventListener('mouseout', () => {
//     console.log('mouse out')
// })

// elem.addEventListener('dblclick', () => {
//     console.log('double click');
// })

// function getRandomColor() {
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

// console.log(getRandomColor());

// btn.addEventListener('mousedown', (e) => {
//     console.log(e.button);
// })

// text.onmousedown = () => {
//     return false
// }
//
// document.body.oncontextmenu = () => {
//     return false
// }

// text.oncopy = () => {
//     alert('forbidden');
//     return false;
// }

// Координати

// elem.addEventListener('click', (event) => {
//     console.log(event);
//     if (event.metaKey) {
//         console.log('CMD key pressed')
//     }
//     // console.log(e.clientX, e.clientY);
//     // console.log(e.pageX, e.pageY);
// })

// для форми - submit
// для input - focus
// DOMContentLoaded

// document.addEventListener('DOMContentLoaded', () => {
//   alert('DOM is Ready')
// })
