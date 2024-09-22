import Delivery from "./classDelivery.js"

export default class EditDelivery extends Delivery {
  _status = "delivery";

  constructor(name, address, distance, status) {
    super(name, address, distance);
    
    if (status) {
      this._status = status
    } else {
      this._status = this.addStatus;
    }
  };

  get addStatus() {
    return this._status;
  }

  set addStatus(value) {
    this._status = value;

    if (this.addStatus == "delivered") {
      this.cardEl.classList.add("delivered");
      this.cardEl.classList.remove("canceled");
    } else if (this.addStatus == "canceled") {
      this.cardEl.classList.remove("delivered");
      this.cardEl.classList.add("canceled");
    } else if (this.addStatus == "delivery") {
      this.cardEl.classList.remove("delivered");
      this.cardEl.classList.remove("canceled");
    }
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
    for (const key in this) {
        if (key.startsWith("_")) {
          if (key != "_status") {
            this.inputEl = document.createElement("input");
            this.inputEl.classList.add("form__input");
            this.inputEl.name = key;
  
            if (this.inputEl.name == "_name") {
              this.inputEl.placeholder = "Имя"
            } else if (this.inputEl.name == "_address") {
              this.inputEl.placeholder = "Адрес"
            } else if (this.inputEl.name == "_distance") {
              this.inputEl.placeholder = "Расстояние"
            }
  
            this.inputEl.setAttribute("value", this[key]);
            this.formEl.append(this.inputEl);
          } else {
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
              this.addStatus = this.selectEl.value;
            });

            this.formEl.append(this.selectEl);
          }
        }
    }

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

      this.addName = newValuesList[0];
      this.addAddress = newValuesList[1];
      this.addDistance = newValuesList[2];
      this.addStatus = newValuesList[3];

      this.cardEl.innerHTML = "";
      this.cardEl.append(
        this.getRowEl("Имя", this.addName, "name"),
        this.getRowEl("Адрес", this.addAddress, "address"),
        this.getRowEl("Расстояние", `${this.addDistance} км`, "distance"),
        this.getButtonEl()
      );

      this.wrapperFormEl.remove();
    });

    this.formEl.append(this.saveBtnEl);

    this.wrapperFormEl.append(this.titleEl, this.closeBtnEl, this.formEl);
    return this.wrapperFormEl;
  };
};