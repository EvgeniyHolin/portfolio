import * as components from "./components.js";
import { columnNames } from "./columnNames.js";
import { getFromLocaleStorage } from "./funcLocalStorage.js"
import { loadPage } from "./loadPage.js";
import { sorting } from "./sorting.js";


// функция создания таблицы
export function addTable() {
  const tableEl = components.getTableEl();
  const headBodyEl = components.getThBodyTableEl();
  const headRowEl = components.getRowEl('head');

  columnNames.forEach(column => {
    const headColumnEl = components.getThСellEl();
    headColumnEl.textContent = column.text;
    headRowEl.append(headColumnEl);

    headColumnEl.addEventListener('click', function (e) {
      const indexCell = columnNames.indexOf(column);
      let sortedArray;

      switch(indexCell) {
        case 0:
          sortedArray = sorting(getFromLocaleStorage(), 'name');
          break;
        case 1:
          sortedArray = sorting(getFromLocaleStorage(), 'shelf');
          break;
        case 2:
          sortedArray = sorting(getFromLocaleStorage(), 'weight');
          break;
        case 3:
          sortedArray = sorting(getFromLocaleStorage(), 'date');
          break;
      }

      localStorage.setItem('products', JSON.stringify(sortedArray));
      loadPage();
    });
  });

  const bodyEl = components.getBodyTableEl();
  const products = getFromLocaleStorage();

  products.forEach((product, index) => {
    const rowEL = components.getRowEl();
    const cellBtnEl = components.getСellEl();
    const deleteBtnEl = components.getBtnEl();
    deleteBtnEl.textContent = 'Удалить';

    for (const column in product) {
      const cellEl = components.getСellEl();
      cellEl.textContent = product[column];
      rowEL.append(cellEl);
    }

    deleteBtnEl.addEventListener('click', function (e) {
      const currentProducts = getFromLocaleStorage();
      currentProducts.splice(index, 1);
      localStorage.setItem('products', JSON.stringify(currentProducts));
      loadPage();
    });

    cellBtnEl.append(deleteBtnEl);
    rowEL.append(cellBtnEl);
    bodyEl.append(rowEL);
  });

  headBodyEl.append(headRowEl);
  tableEl.append(headBodyEl, bodyEl);
  
  return tableEl;
}