export default class Delivery {
  constructor(name="no_name", address="no_address", distance=0) {
    this._name = name;
    this._address = address;
    this._distance = distance;
  }

  get name() {
    return this._name;
  };

  set name(value) {
    this._name = value;
  };

  get address() {
    return this._address;
  }

  set address(value) {
    this._address = value;
  };

  get distance() {
    return this._distance;
  }

  set distance(value) {
    this._distance = value;
  };

  getDeliveryCard() {
    this.cardEl = document.createElement("div");
    this.cardEl.classList.add("card");

    this.cardEl.append(
      this.getRowEl("Имя", this.name, "name"),
      this.getRowEl("Адрес", this.address, "address"),
      this.getRowEl("Расстояние", `${this.distance} км`, "distance")
    )

    return this.cardEl;
  }

  getRowEl(label, value, id) {
    this.rowEl = document.createElement("div");
    this.rowEl.classList.add("card__row");

    this.labelEl = document.createElement("span");
    this.labelEl.classList.add("card__label");
    this.labelEl.textContent = label;

    this.valueEl = document.createElement("span");
    this.valueEl.classList.add("card__value");
    this.valueEl.textContent = value;

    this.valueEl.id = id;

    this.rowEl.append(this.labelEl, this.valueEl);

    return this.rowEl;
  }
};