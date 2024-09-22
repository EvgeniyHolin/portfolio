import { addForm } from "./addForm.js";
import * as components from "./components.js"
import { loadPage } from "./loadPage.js";
import { valuesForm } from "./valuesForm.js";

// загрузка страницы для добавления записи на склад
export default function addNotePage(page) {
  const noteContentEl = document.createElement('div');
  noteContentEl.classList.add('note-content');

  const titleEl = document.createElement('h1');
  titleEl.classList.add('title');
  titleEl.textContent = 'Добавить запись';

  const formEl = addForm();

  const addBtnEl = components.getBtnEl();
  addBtnEl.classList.add('btn--add');
  addBtnEl.classList.add('btn--wide');
  addBtnEl.textContent = 'Добавить запись';
  addBtnEl.setAttribute('type', 'submit');

  formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    valuesForm(formEl);
    loadPage();
  });

  formEl.append(addBtnEl);
  noteContentEl.append(formEl);
  page.append(titleEl);
  page.append(noteContentEl);
}