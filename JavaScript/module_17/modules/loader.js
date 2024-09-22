// создание элемента лоадер
export function getLoaderEl() {
  const loader = document.createElement('div');
  loader.classList.add('loader');
  return loader;
}