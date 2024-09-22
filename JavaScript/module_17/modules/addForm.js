import { columnNames } from "./columnNames.js"

// функция создания формы на странице
export function addForm() {
  const formEl = document.createElement('form');
  formEl.classList.add('form');

  for (const column of columnNames) {
    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'text');
    inputEl.classList.add('input');
    inputEl.required = true;

    if (column.text == 'Время хранения') {
      inputEl.setAttribute('type', column.type);
    } else {
      inputEl.setAttribute('placeholder', column.placeholder);
    }

    inputEl.setAttribute('name', column.name);
    inputEl.setAttribute('id', column.id);

    if (column.text !== '') {
      formEl.append(inputEl);
    }
  }

  return formEl;
};