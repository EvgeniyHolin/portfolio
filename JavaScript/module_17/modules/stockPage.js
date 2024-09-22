import * as components from "./components.js"
import { addTable } from "./addTable.js"
import { loadPage } from "./loadPage.js";

// функция загрузки страницы со складом
export default function StockPage(page) {
  const blockTop = document.createElement('div');
  blockTop.classList.add('top-block');

  const titleEl = components.getTitleEl();
  titleEl.textContent = 'Склад'

  const addBtnEl = components.getBtnEl();
  addBtnEl.classList.add('btn--add');
  addBtnEl.textContent = 'Добавить запись';

  addBtnEl.addEventListener('click', function (e) {
    loadPage('Note');
  });

  const tableEl = addTable();

  blockTop.append(titleEl, addBtnEl);
  page.append(blockTop, tableEl);
};