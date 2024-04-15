'use strict';

const data = new Date();

const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

const timeElapsed = Date.now();
const today = new Date(timeElapsed);
document.querySelector('#date').innerHTML = today.toDateString();

//time
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
    span.innerHTML = '<i class="fas fa-trash" aria-hidden="true"></i>';
    li.appendChild(span);

    let timestamp = document.createElement('p');
    timestamp.textContent = getTimeStamp();
    li.appendChild(timestamp);
  }

  inputBox.value = '';
  saveData();
  toggleClearButton();
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
    } else if (e.target.classList.contains('fa-trash')) {
      e.target.closest('li').remove();
      saveData();
      toggleClearButton();
    } else if (e.target.classList.contains('fa-edit')) {
      editTask(e.target.parentElement);
    }
  },
  false
);

//edit task
const editTask = (taskElement) => {
  const taskText = taskElement.firstChild.textContent;
  const newTaskText = prompt('Edit task:', taskText);

  if (newTaskText !== null && newTaskText.trim() !== '') {
    taskElement.firstChild.textContent = newTaskText;
    saveData();
  }
};

//clear all task
const clearBtn = document.querySelector('#clear-all');
clearBtn.addEventListener('click', () => {
  clearAllTasks();
  toggleClearButton();
});

const clearAllTasks = () => {
  const taskList = document.querySelector('#list-container');
  taskList.innerHTML = ''; // Clear the list container
  localStorage.removeItem('data'); // Remove the saved data from localStorage
};

//hide clear btn
const toggleClearButton = () => {
  const taskList = document.querySelector('#list-container');
  const clearBtn = document.querySelector('#clear-all');

  if (taskList.children.length > 1) {
    clearBtn.style.display = 'block'; // Show the clear button
  } else {
    clearBtn.style.display = 'none'; // Hide the clear button
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
