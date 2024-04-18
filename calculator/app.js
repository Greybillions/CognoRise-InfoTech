const keys = document.querySelectorAll('.key');
const displayInput = document.querySelector('.display .input');
const displayOutput = document.querySelector('.display .output');

let input = '';

for (let key of keys) {
  let value = key.dataset.key;
  key.addEventListener('click', () => {
    if (value === 'clear') {
      input = '';
      displayInput.innerHTML = '';
      displayOutput.innerHTML = '';
    } else if (value === 'backspace') {
      input = input.slice(0, -1);
      displayInput.innerHTML = clearInput(input);
    } else if (value === '=') {
      let result = eval(input);
      displayOutput.innerHTML = result;
    } else if (value === 'brackets') {
      let openingBrackets = input.split('(').length - 1;
      let closingBrackets = input.split(')').length - 1;

      if (openingBrackets > closingBrackets) {
        input += ')';
      } else {
        input += '(';
      }

      displayInput.innerHTML = clearInput(input);
    } else {
      input += value;
      displayInput.innerHTML = clearInput(input);
    }
  });
}

const clearInput = (input) => {
  let inputArray = input.split('');
  let inputArrayLength = inputArray.length;

  for (let i = 0; i < inputArrayLength; i++) {
    if (inputArray[i] === '*') {
      inputArray[i] = `<span> <i class="operator fas fa-multiply"></i> </span>`;
    } else if (inputArray[i] === '/') {
      inputArray[i] = `<span> <i class="operator fas fa-divide"></i> </span>`;
    } else if (inputArray[i] === '-') {
      inputArray[i] = `<span> <i class="operator fas fa-minus"></i> </span>`;
    } else if (inputArray[i] === '+') {
      inputArray[i] = `<span> <i class="percent fas fa-plus"></i> </span>`;
    } else if (inputArray[i] === '%') {
      inputArray[i] = `<span> <i class="operator fas fa-percent"></i> </span>`;
    } else if (inputArray[i] === '(') {
      inputArray[i] = `<span class="brackets">(</span>`;
    } else if (inputArray[i] === ')') {
      inputArray[i] = `<span class="brackets">)</span>`;
    }
  }

  return inputArray.join('');
};

const clearOutput = (output) => {};
