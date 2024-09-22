import Delivery from "./modules/classDelivery.js"

const deliveryArr = [
  new Delivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new Delivery("Дмитрий", "ул. Задачная, д. 7", 3),
  new Delivery("Оля", "ул. Ткачей, д. 43", 11)
];

const contentEl = document.querySelector('.content');

deliveryArr.forEach(element => {
  contentEl.append(element.getDeliveryCard());
});
