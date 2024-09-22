export function renderImages(urlImages) {
  const contentEl = document.querySelector('.content');
  const ulEl = document.createElement('ul');
  ulEl.classList.add('image-list');

  urlImages.forEach(url => {
    const liEl = document.createElement('li');
    liEl.classList.add('list-item');

    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', url);

    liEl.append(imgEl);
    ulEl.append(liEl);
  });

  contentEl.append(ulEl);
};
