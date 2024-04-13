const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

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
  }

  inputBox.value = ''; // clear out the input box
};

listContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
  }
});

console.log(span);
