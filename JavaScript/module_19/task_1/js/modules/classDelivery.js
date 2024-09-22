export default class Delivery {
  _name = "no_name"
  _address = "no_address"
  _distance = 0

  constructor(name, address, distance) {
    if (name) {
      this._name = name;
    } else {
      this._name = this.addName;
    }

    if (address) {
      this._address = address;
    } else {
      this._address = this.addAddress;
    }

    if (distance > 0) {
      this._distance = distance;
    }
  }

  get addName() {
    return this._name;
  };

  set addName(value) {
    if (value) {
      this._name = value;
    };
  };

  get addAddress() {
    return this._address;
  }

  set addAddress(value) {
    if (value) {
      this._address = value;
    };
  };

  get addDistance() {
    return `${this._distance} км`;
  }

  set addDistance(value) {
    if (value) {
      this._distance = value;
    };
  };

  getDeliveryCard() {
    this.cardEl = document.createElement("div");
    this.cardEl.classList.add("card");

    this.cardEl.append(
      this.getRowEl("Имя", this.addName),
      this.getRowEl("Адрес", this.addAddress),
      this.getRowEl("Расстояние", this.addDistance)
    )

    return this.cardEl;
  }

  getRowEl(label, value) {
    this.rowEl = document.createElement("div");
    this.rowEl.classList.add("card__row");

    this.labelEl = document.createElement("span");
    this.labelEl.classList.add("card__label");
    this.labelEl.textContent = label;

    this.valueEl = document.createElement("span");
    this.valueEl.classList.add("card__value");
    this.valueEl.textContent = value;

    this.rowEl.append(this.labelEl, this.valueEl);

    return this.rowEl;
  }
};