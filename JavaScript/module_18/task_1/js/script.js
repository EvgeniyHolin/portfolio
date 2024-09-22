import { getImages } from "./modules/getImages.js";
import { renderImages } from "./modules/renderImages.js";

const catImageArr = ['images/cat1.jpg', 'images/cat2.jpg', 'images/cat3.jpg'];
const dogImageArr = ['images/dog1.jpg', 'images/dog2.jpg', 'images/dog3.jpg'];

window.onload = () => {
  getImages(catImageArr)
  .then((result) => renderImages(result))
  .catch((error) => {console.log(error.message)});

  getImages(dogImageArr)
  .then((result) => renderImages(result))
  .catch((error) => {console.log(error.message)});
};
