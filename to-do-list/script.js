const data = new Date();

const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
document.querySelector('#date').innerHTML = today.toDateString();

const time = () => {
  const data = new Date();
  let h = data.getHours();
  let m = data.getMinutes();
  let s = data.getSeconds();

  if (h < 10) h = '0' + h;
  if (m < 10) m = '0' + m;
  if (s < 10) s = '0' + s;

  document.querySelector('#hour').innerHTML = `${h}:${m}:${s}`;
  setTimeout('time()', 500);
};

const addTask = () => {
  if (inputBox.value === '') {
    alert('Please add a Task');
  } else {
    let li = document.createElement('li');
    li.textContent = inputBox.value; // Set the text content of the li element
    listContainer.appendChild(li); // Append li to the ul element inside listContainer
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
    let timestamp = document.createElement('p');
    timestamp.textContent = getTimeStamp(); // Get current timestamp
    li.appendChild(timestamp);
  }

  inputBox.value = ''; // clear out the input box
};

// Function to get current timestamp in the format HH:MM:SS
const getTimeStamp = () => {
  const now = new Date();
  let month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
  let day = now.getDate().toString().padStart(2, '0');
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  return `${day}/${month}-${hours}:${minutes}`;
};

listContainer.addEventListener(
  'click',
  (e) => {
    if (e.target.tagName === 'LI') {
      e.target.classList.toggle('checked');
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
    }
  },
  false
);
