'use strict';
'use strict';

const btn = document.getElementById('btn');
const inputek = document.getElementById('inputText');
const vykricnik = document.querySelector('.exclamation-mark');
const errorMessage = document.querySelector('.error-message');

btn.addEventListener('click', () => {
  if (!ValidateEmail(inputText)) {
    inputek.classList.add('show');
    vykricnik.classList.add('show');
    errorMessage.classList.add('show');
  } else {
    inputek.classList.remove('show');
    vykricnik.classList.remove('show');
    errorMessage.classList.remove('show');
  }
});

function ValidateEmail(input) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (input.value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}
