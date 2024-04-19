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
      let result = eval(prepareInput(input));
      displayOutput.innerHTML = clearOutput(result);
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
      if (validateInput(value)) {
        input += value;
        displayInput.innerHTML = clearInput(input);
      }
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
      inputArray[i] = `<span> <i class="operator fas fa-plus"></i> </span>`;
    } else if (inputArray[i] === '%') {
      inputArray[i] = `<span> <i class="percent fas fa-percent"></i> </span>`;
    } else if (inputArray[i] === '(') {
      inputArray[i] = `<span class="brackets">(</span>`;
    } else if (inputArray[i] === ')') {
      inputArray[i] = `<span class="brackets">)</span>`;
    }
  }

  return inputArray.join('');
};

const clearOutput = (output) => {
  let outputString = output.toString();
  let decimal = outputString.split('.');

  outputString = outputString.split('.')[0];

  let outputArray = outputString.split('');

  if (outputArray.length > 3) {
    for (let i = outputArray.length - 3; i > 0; i -= 3) {
      outputArray.splice(i, 0, ',');
    }
  }

  if (decimal) {
    outputArray.push('.');
    outputArray.push(decimal);
  }

  return outputArray.join('');
};

const validateInput = (value) => {
  let lastInput = input.slice(-1);
  let operators = ['+', '-', '*', '/', '%'];

  if (value === '.' && lastInput === '.') {
    return false;
  }

  if (operators.includes(value)) {
    if (operators.includes(lastInput)) {
      return false;
    } else {
      return true;
    }
  }

  return true;
};

const prepareInput = (input) => {
  let inputArray = input.split('');

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === '%') {
      inputArray[i] = '/100';
    }
  }

  return inputArray.join('');
};
