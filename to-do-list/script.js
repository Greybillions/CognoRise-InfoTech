'use strict';

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

  if (h < 10) h = '0' + h;
  if (m < 10) m = '0' + m;

  document.querySelector('#hour').innerHTML = `${h}:${m}`;
  setTimeout('time()', 500);
};

const addTask = () => {
  if (inputBox.value === '') {
    alert('Please add a Task');
  } else {
    let li = document.createElement('li');
    li.textContent = inputBox.value;
    listContainer.appendChild(li);

    let editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add('edit-btn');
    li.appendChild(editButton);

    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);

    let timestamp = document.createElement('p');
    timestamp.textContent = getTimeStamp();
    li.appendChild(timestamp);
  }

  inputBox.value = '';
  saveData();
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
      saveData();
    } else if (e.target.tagName === 'SPAN') {
      e.target.parentElement.remove();
      saveData();
    } else if (e.target.classList.contains('edit-btn')) {
      editTask(e.target.parentElement);
    }
  },
  false
);

//edit
const editTask = (taskElement) => {
  const taskText = taskElement.firstChild.textContent;
  const newTaskText = prompt('Edit task:', taskText);

  if (newTaskText !== null && newTaskText.trim() !== '') {
    taskElement.firstChild.textContent = newTaskText;
    saveData();
  }
};

//save data
const saveData = () => {
  localStorage.setItem('data', listContainer.innerHTML);
};

const showTask = () => {
  listContainer.innerHTML = localStorage.getItem('data');
};

showTask();
