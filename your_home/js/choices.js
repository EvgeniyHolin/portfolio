export function selectFunc() {
  const selectEl = document.querySelector('.main-nav__select-list');
  const choices = new Choices(selectEl, {
    itemSelectText: '',
    position: "bottom",
    searchEnabled: false,
    shouldSort: false
  });
};

