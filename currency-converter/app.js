let dropList = document.querySelectorAll('form select');
let fromCurr = document.querySelector('.from select');
let toCurr = document.querySelector('.to select');
let icon = document.querySelector('.icon');
let btn = document.querySelector('button');
let getExRate = document.querySelector('.exchange-rate');

for (let i = 0; i < dropList.length; i++) {
  for (let currCode in country_list) {
    let selected =
      i == 0
        ? currCode === 'USD'
          ? `selected`
          : ''
        : currCode === 'NGN'
        ? `selected`
        : '';

    let optionTag = `<option value="${currCode}" ${selected}>${currCode}</option>`;

    dropList[i].insertAdjacentHTML('beforeend', optionTag);
  }

  dropList[i].addEventListener('change', (e) => {
    loadFlag(e.target);
  });
}

const loadFlag = (e) => {
  for (let code in country_list) {
    if (code === e.value) {
      let img = e.parentElement.querySelector('img');
      img.src = `https://flagcdn.com/48x36/${country_list[
        code
      ].toLowerCase()}.png`;
    }
  }
};

btn.addEventListener('click', (e) => {
  e.preventDefault();
  getExVal();
});

const getExVal = () => {
  const amount = document.querySelector('form input');
  let amountVal = amount.value;
  if (amountVal == '' || amountVal == '0') {
    amount.value = '1';
    amountVal = 1;
  }

  getExRate.innerText = 'Getting exchange rate...';
  let url = `https://v6.exchangerate-api.com/v6/9364a8e736527812d878fc23/latest/${fromCurr.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let exchangeRate = result.conversion_rates[toCurr.value];
      let total = (amount.value * exchangeRate).toFixed(2);
      getExRate.innerText = `${amountVal} ${fromCurr.value} = ${total} ${toCurr.value}`;
    })
    .catch(() => {
      getExRate.innerText = `something went wrong`;
    });
};

window.addEventListener('load', () => {
  getExVal();
});

icon.addEventListener('click', () => {
  let tempCode = fromCurr.value;
  fromCurr.value = toCurr.value;
  toCurr.value = tempCode;
  loadFlag(fromCurr);
  loadFlag(toCurr);
  getExVal();
});
