const tabsFunc = () => {
  const tabsEl = document.querySelectorAll('.connect__tabs-control');
  const contentEl = document.querySelectorAll('.connect__tabs-item');

  tabsEl.forEach((tab, index) => {
    tab.addEventListener('click', function (e) {
      if (index == 0) {
        tabsEl[0].classList.add('is-active');
        tabsEl[1].classList.remove('is-active');
        contentEl[0].classList.add('is-active');
        contentEl[1].classList.remove('is-active');
      } else {
        tabsEl[0].classList.remove('is-active');
        tabsEl[1].classList.add('is-active');
        contentEl[0].classList.remove('is-active');
        contentEl[1].classList.add('is-active');
      }
    });
  });
};

tabsFunc();
