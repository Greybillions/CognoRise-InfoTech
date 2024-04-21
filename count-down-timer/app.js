'use strict';

let intervalId;

window.onload = () => {
  document.querySelector('#start').onclick = start;
  document.querySelector('#pause').onclick = pause;
  document.querySelector('#reset').onclick = reset;
};

const pause = () => {
  clearInterval(intervalId);
};

const reset = () => {
  clearInterval(intervalId);
  document.querySelector('#day').innerText = '0';
  document.querySelector('#hour').innerText = '0';
  document.querySelector('#minute').innerText = '0';
  document.querySelector('#second').innerText = '0';
};

const start = () => {
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;
  let endTime = new Date(`${date} ${time}`);
  intervalId = setInterval(() => {
    startTime(endTime);
  }, 1000);
};

const startTime = (endTime) => {
  const currTime = new Date();
  const day = document.querySelector('#day');
  const hour = document.querySelector('#hour');
  const minute = document.querySelector('#minute');
  const second = document.querySelector('#second');

  if (endTime > currTime) {
    const timeLeft = endTime - currTime;
    day.innerText = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hour.innerText = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    minute.innerText = Math.floor((timeLeft / (1000 * 60)) % 60);
    second.innerText = Math.floor((timeLeft / 1000) % 60);
  } else {
    clearInterval(intervalId);
    day.innerText = '0';
    hour.innerText = '0';
    minute.innerText = '0';
    second.innerText = '0';
  }
};
