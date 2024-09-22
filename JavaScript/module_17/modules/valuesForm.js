import { addToLocaleStorage } from "./funcLocalStorage.js"

// функция получения данных из формы
export function valuesForm(form) {
  const formData = new FormData(form);
  const productObj = {};

  for (const [name, value] of formData.entries()) {
    productObj[name] = value;
  }

  addToLocaleStorage(productObj)
}
