import Delivery from "./classDelivery.js"

export default class EditDelivery extends Delivery {
  _status = "delivery";

  constructor(name, address, distance, status="delivered") {
    super(name, address, distance);
    this._status = status;
  };

  get status() {
    return this._status;
  }

  set status(value) {
    if (this.cardEl) {
      this.cardEl.classList.remove(this._status);
      this._status = value;
      this.cardEl.classList.add(this._status);
    }
  };

  static getTotalDistance(array) {
    this.activeDeliveries = array.filter(delivery => delivery.status !== "canceled");
    this.totalDistance = 0;
    this.activeDeliveries.forEach(element => {
      this.totalDistance += Number(element.distance);
    });

    return this.totalDistance;
  };

  getButtonEl() {
    this.buttonEl = document.createElement("button");
    this.buttonEl.classList.add("card__btn");
    this.buttonEl.textContent = "Изменить";

    this.buttonEl.addEventListener('click', () => {
      const contentEl = document.querySelector('.content');
      contentEl.append(this.getFormCard());
    });


    return this.buttonEl;
  };

  getDeliveryCard() {
    this.cardEl = super.getDeliveryCard();
    this.cardEl.append(this.getButtonEl());
    return this.cardEl;
  };

  getFormCard() {
    this.wrapperFormEl = document.createElement("div");
    this.wrapperFormEl.classList.add("wrapper-form");

    this.titleEl = document.createElement("h2");
    this.titleEl.textContent = "Изменить"

    this.closeBtnEl = document.createElement("button");
    this.closeBtnEl.classList.add("close-btn");

    this.closeBtnEl.addEventListener('click', () => {
      this.wrapperFormEl.remove();
    });

    this.formEl = document.createElement("form");
    this.formEl.classList.add("form");

    this.inputNameEl = document.createElement("input");
    this.inputNameEl.classList.add("form__input");
    this.inputNameEl.name = "_name";
    this.inputNameEl.placeholder = "Имя";
    this.inputNameEl.setAttribute("value", this[this.inputNameEl.name]);
    this.formEl.append(this.inputNameEl);

    this.inputAddressEl = document.createElement("input");
    this.inputAddressEl.classList.add("form__input");
    this.inputAddressEl.name = "_address";
    this.inputAddressEl.placeholder = "Адрес";
    this.inputAddressEl.setAttribute("value", this[this.inputAddressEl.name]);
    this.formEl.append(this.inputAddressEl);

    this.inputDistanceEl = document.createElement("input");
    this.inputDistanceEl.classList.add("form__input");
    this.inputDistanceEl.name = "_distance";
    this.inputDistanceEl.placeholder = "Расстояние";
    this.inputDistanceEl.setAttribute("value", this[this.inputDistanceEl.name]);
    this.formEl.append(this.inputDistanceEl);

    this.selectEl = document.createElement("select");
    this.selectEl.classList.add("form__select");
    const statusList = ["delivery", "delivered", "canceled"]
    for (const item of statusList) {
      this.itemEl = document.createElement("option");
      this.itemEl.classList.add("select-item");
      this.itemEl.value = item;
      this.itemEl.textContent = item;
      this.selectEl.append(this.itemEl);
    }
    this.selectEl.addEventListener('change', () => {
      this.status = this.selectEl.value;
    });
    this.formEl.append(this.selectEl);

    this.saveBtnEl = document.createElement("button");
    this.saveBtnEl.classList.add("save-btn");
    this.saveBtnEl.textContent = "Сохранить";

    this.saveBtnEl.addEventListener('click', (e) => {
      e.preventDefault();
      
      const newValuesList = []
      for (const iterator of this.formEl) {
        if (iterator.type !== "submit") {
          newValuesList.push(iterator.value);
        }
      }

      this.name = newValuesList[0];
      this.address = newValuesList[1];
      this.distance = newValuesList[2];
      this.status = newValuesList[3];

      this.cardEl.innerHTML = "";
      this.cardEl.append(
        this.getRowEl("Имя", this.name, "name"),
        this.getRowEl("Адрес", this.address, "address"),
        this.getRowEl("Расстояние", `${this.distance} км`, "distance"),
        this.getButtonEl()
      );

      this.wrapperFormEl.remove();
    });

    this.formEl.append(this.saveBtnEl);

    this.wrapperFormEl.append(this.titleEl, this.closeBtnEl, this.formEl);
    return this.wrapperFormEl;
  };

  getTotalDistanceBtn() {

  }
};
