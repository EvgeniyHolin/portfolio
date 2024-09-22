import Delivery from "./modules/classDelivery.js"
import EditDelivery from "./modules/classEditDelivery.js"

const deliveryArr = [
  new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
  new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled")
];

const contentEl = document.querySelector('.content');

deliveryArr.forEach(element => {
  contentEl.append(element.getDeliveryCard());
});


