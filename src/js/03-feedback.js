import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInputForm, 500));

receivingLocalStorageValue();

const LOCALSTORAGE_KEY = 'feedback-form-state';

function onInputForm(evt) {
  const formData = { email: form.email.value, message: form.message.value };

  const changingValueString = JSON.stringify(formData);

  localStorage.setItem(LOCALSTORAGE_KEY, changingValueString);
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.dir(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

  localStorage.removeItem(LOCALSTORAGE_KEY);

  form.reset();
}

function receivingLocalStorageValue() {
  const localStorageValue = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );

  if (localStorageValue) {
    form.email.value = localStorageValue.email;
    form.message.value = localStorageValue.message;
  }
}
