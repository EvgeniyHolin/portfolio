const progress = (time=2) => {
  const progressBarEl = document.querySelector('.progress-bar');

  const startPosition = () => {
    progressBarEl.style.width = '0%';
  };

  const counterProgress = () => {
    return new Promise((resolve) => {
      const counterEl = document.querySelector('.progress-counter');
      let seconds = 0;
  
      const interval = setInterval(() => {
        seconds++;
        counterEl.textContent = seconds;
  
        progressBarEl.style.transition = `all linear ${time}s`;
        progressBarEl.style.width = `100%`
  
        if (seconds >= time) {
          resolve();
          clearInterval(interval);
        };
  
      }, 1000);
    });
  };

  startPosition();
  counterProgress();
};

window.onload = () => {
  progress(3);
};
