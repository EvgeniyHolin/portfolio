export function progressBar(time=2) {
  return new Promise((resolve) => {
    const contentEl = document.querySelector('.content');
    const progressBarEl = document.createElement('div');
    const progressTimeEl = document.createElement('div');
    const progressCounterEl = document.createElement('span');
    const progressSecEl = document.createElement('span');
  
    progressBarEl.classList.add('progress-bar');
    progressTimeEl.classList.add('progress-time');
    progressCounterEl.classList.add('progress-counter');
  
    progressCounterEl.textContent = 0;
    progressSecEl.textContent = 's';
  
    progressTimeEl.append(progressCounterEl);
    progressTimeEl.append(progressSecEl);
  
    contentEl.append(progressBarEl);
    contentEl.append(progressTimeEl);
  
    const startPosition = () => {
      progressBarEl.style.width = '0%';
    };
  
    const counterProgress = () => {
      let seconds = 0;
  
      const interval = setInterval(() => {
        seconds++;
        progressCounterEl.textContent = seconds;
  
        progressBarEl.style.transition = `all linear ${time}s`;
        progressBarEl.style.width = `100%`
  
        if (seconds >= time) {
          resolve();
          clearInterval(interval);
        };
  
      }, 1000);
    };

    startPosition();
    counterProgress();
  });
};