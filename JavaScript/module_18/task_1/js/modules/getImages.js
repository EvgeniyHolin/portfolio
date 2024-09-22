import { getRandomNumber } from "./getRandomNumber.js";

export function getImages(array) {
  const imagePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (array.length > 0) {
        resolve(array);
      };

      reject(new Error('Image url not found'));
    }, `${getRandomNumber()}000`);
  });

  return imagePromise;
};
