// Домашнее задание 1
// Создать поле для ввода цены с валидацией.

// Технические требования:

// При загрузке страницы показать пользователю поле ввода (input) с надписью Price. Это поле будет служить для ввода числовых значений
// Поведение поля должно быть следующим:
// При фокусе на поле ввода - у него должна появиться рамка зеленого цвета. При потере фокуса она пропадает.
// Когда убран фокус с поля - его значение считывается, над полем создается span, в котором должен быть выведен текст: Текущая цена: ${значение из поля ввода}. Рядом с ним должна быть кнопка с крестиком (X). Значение внутри поля ввода окрашивается в зеленый цвет.
// При нажатии на Х - span с текстом и кнопка X должны быть удалены. Значение, введенное в поле ввода, обнуляется.
// Если пользователь ввел число меньше 0 - при потере фокуса подсвечивать поле ввода красной рамкой, под полем выводить фразу - Please enter correct price. span со значением при этом не создается.

const moneyInput = document.getElementById("price"),
  span = document.getElementById("span"),
  button = document.getElementById("reset"),
  correctPrice = document.querySelector('.correct');
let newMoneyInput = 0;

moneyInput.addEventListener("focus", () => {
  moneyInput.style.border = "2px solid green";
  moneyInput.style.color = "black";
});

function getPrice() {
  newMoneyInput = Number(moneyInput.value);
  if (newMoneyInput < 0 || isNaN(newMoneyInput)) {
    moneyInput.style.border = "2px solid red";
    correctPrice.textContent = "Please enter correct price";
  } else {
    moneyInput.style.color = "green";
    span.style.color = "black";
    span.textContent = `Your price: ` + moneyInput.value;
    button.style.visibility = "visible";
    correctPrice.textContent = "";
  }
}

moneyInput.addEventListener("blur", getPrice);

button.addEventListener("click", () => {
  span.style.color = "transparent";
  button.style.visibility = "hidden";
  moneyInput.value = "";
});
