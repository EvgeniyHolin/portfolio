import { getImages } from "./modules/getImages.js";
import { getRandomNumber } from "./modules/getRandomNumber.js";
import { progressBar } from "./modules/progressBar.js";
import { renderImages } from "./modules/renderImages.js";

const catImageArr = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg'];
const dogImageArr = ['images/dog1.jpg', 'images/dog2.jpg', 'images/dog3.jpg'];

window.onload = () => {
  const time = getRandomNumber();

  progressBar(time).then(() => {
    getImages(catImageArr).then(
      (result) => renderImages(result)
    )
  });

  setTimeout(() => {
    progressBar(getRandomNumber()).then(
      getImages(dogImageArr).then(
        (result) => renderImages(result)
      )
    )
  }, `${time+1}000`)
};
