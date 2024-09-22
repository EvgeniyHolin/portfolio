import { getLoaderEl } from "./loader.js";

// основная функция загрузки страницы
export async function loadPage(pageName) {
  const contentEl = document.querySelector('.content');
  contentEl.innerHTML = '';

  const loader = getLoaderEl();
  contentEl.append(loader);

  switch(pageName) {
    case "Note":
      const notePage = await import('./notePage.js')
      notePage.default(contentEl);
      loader.remove();
      break;
    default:
      const stockPage = await import('./stockPage.js')
      stockPage.default(contentEl);
      loader.remove();
      break;
  }
};
