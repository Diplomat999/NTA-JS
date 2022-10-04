// Реализовать функцию подсветки нажимаемых клавиш.

// Технические требования:

// В файле Homework-buttons-2.html в папке files лежит разметка для кнопок;
// Каждая кнопка содержит в себе название клавиши на клавиатуре;
// По нажатию указанных клавиш - та кнопка, на которой написана эта буква, должна окрашиваться в синий цвет. При этом, если какая-то другая буква уже ранее была окрашена в синий цвет - она становится черной. Например, по нажатию Enter первая кнопка окрашивается в синий цвет. Далее, пользователь нажимает S, и кнопка S окрашивается в синий цвет, а кнопка Enter опять становится черной.

const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {
    btn.addEventListener ('keydown', (e)=>{
    if (e.key == btn.value) {
        btn.style.backgroundColor = 'blue';
    }})
})