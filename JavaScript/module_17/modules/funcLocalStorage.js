// получение данных из Locale Storage
export function getFromLocaleStorage() {
  const products = JSON.parse(localStorage.getItem('products')) || [];
  return products;
}

// функция добавления данных в Locale Storage
export function addToLocaleStorage(object) {
  const products = getFromLocaleStorage();
  products.push(object);
  localStorage.setItem('products', JSON.stringify(products));
}
