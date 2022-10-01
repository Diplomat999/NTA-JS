// Домашнее задание 2
// Реализовать переключение вкладок (табы)

// Технические требования:
// В папке files лежит разметка для вкладок. Нужно, чтобы по нажатию на вкладку отображался конкретный текст для нужной вкладки. При этом остальной текст должен быть скрыт. В комментариях указано, какой текст должен отображаться для какой вкладки.
// Разметку можно менять, добавлять нужные классы, id, атрибуты, теги.
// Нужно предусмотреть, что текст на вкладках может меняться, и что вкладки могут добавляться и удаляться. При этом нужно, чтобы функция, написанная в JavaScript, из-за таких правок не переставала работать.

function showTab() {
  let tabsNav = document.querySelectorAll(".tabs-title"),
    tabsContent = document.querySelectorAll(".tabs-text"),
    tabName;

  tabsNav.forEach((item) => {
    item.addEventListener("click", selectTabsNav);
  });

  function selectTabsNav() {
    tabsNav.forEach((item) => {
      item.classList.remove("active");
    });
    this.classList.add("active");
    tabName = this.getAttribute("name");
    selectTabText(tabName);
  }
  function selectTabText(tabName) {
    tabsContent.forEach((item) => {
      item.classList.contains(tabName) ? item.classList.add("show") : item.classList.remove("show");
    });
  }
};

showTab();
