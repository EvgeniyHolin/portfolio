// создание заголовка страницы
function getTitleEl() {
  const titleEl = document.createElement('h1');
  titleEl.classList.add('title');
  return titleEl;
}

// создание кнопки
function getBtnEl() {
  const btnEl = document.createElement('button');
  btnEl.classList.add('btn');
  return btnEl;
}

// создание таблицы
function getTableEl() {
  const tableEl = document.createElement('table');
  tableEl.classList.add('table');
  return tableEl;
}

// создание блока названий колонок
function getThBodyTableEl() {
  const tBodyEl = document.createElement('thead');
  tBodyEl.classList.add('thead');
  return tBodyEl;
}

// создание блока колонок
function getBodyTableEl() {
  const bodyEl = document.createElement('tbody');
  bodyEl.classList.add('tbody');
  return bodyEl;
}

// создание строки таблицы
function getRowEl(position=null) {
  const rowEl = document.createElement('tr');

  if (position == 'head') {
    rowEl.classList.add('th-row');
  } else {
    rowEl.classList.add('row');
  }

  return rowEl;
}

// создание ячейки таблицы в строке
function getСellEl() {
  const cellEl = document.createElement('td');
  cellEl.classList.add('cell');
  return cellEl;
}

// создание ячейки таблицы в строке
function getThСellEl() {
  const cellEl = document.createElement('th');
  cellEl.classList.add('th-cell');
  return cellEl;
}


export {
  getTitleEl,
  getBtnEl,
  getTableEl,
  getThBodyTableEl,
  getBodyTableEl,
  getRowEl,
  getСellEl,
  getThСellEl
}
