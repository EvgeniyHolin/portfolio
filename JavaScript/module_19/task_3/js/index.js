import Delivery from "./modules/classDelivery.js"
import EditDelivery from "./modules/classEditDelivery.js"

const deliveryArr = [
  new EditDelivery("Ольга", "ул. Вымыслов, д. 12", 8),
  new EditDelivery("Дмитрий", "ул. Задачная, д. 7", 3, "delivered"),
  new EditDelivery("Оля", "ул. Ткачей, д. 43", 11, "canceled"),
  new EditDelivery("Вова", "ул. Мира, д. 39", 10)
];

const contentEl = document.querySelector(".content");
const totalDistanceWrap = document.createElement("div");
totalDistanceWrap.classList.add("distance-wrapper");
const totalDistanceWrapText = document.createElement("div");
totalDistanceWrapText.classList.add("distance-wrapper");

deliveryArr.forEach(element => {
  contentEl.append(element.getDeliveryCard());
});

const totalDistanceBtn = document.createElement("button");
totalDistanceBtn.classList.add("distance-btn");
totalDistanceBtn.textContent = "Общее расстояние";

totalDistanceBtn.addEventListener('click', () => {
  totalDistanceWrapText.innerHTML = "";
  const totalDistanceEl = document.createElement("span");
  totalDistanceEl.classList.add("distance-text");
  totalDistanceEl.textContent = "Общее расстояние: " + EditDelivery.getTotalDistance(deliveryArr) + " км";
  totalDistanceWrapText.append(totalDistanceEl);
  contentEl.append(totalDistanceWrapText);
});

totalDistanceWrap.append(totalDistanceBtn);
contentEl.append(totalDistanceWrap);
