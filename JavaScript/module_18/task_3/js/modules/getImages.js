export function getImages(array, time) {
  const imagePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (array.length > 0) {
        resolve(array);
      };

      reject(new Error('Image url not found'));
    }, `${time}000`);
  });

  return imagePromise;
};
