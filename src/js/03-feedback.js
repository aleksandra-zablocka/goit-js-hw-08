import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

function getFeedback() {
  const feedback = {
    email: emailInput.value,
    message: messageInput.value,
  };
  return feedback;
}

const saveToLocalStorage = e => {
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(getFeedback()));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

window.addEventListener('load', () => {
  try {
    const previousValue = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (previousValue) {
      emailInput.value = previousValue.email;
      messageInput.value = previousValue.message;
    }
  } catch (error) {
    console.error('Error reading from localStorage:', error);
  }
});

const sumbitForm = event => {
  event.preventDefault();
  console.log(getFeedback());
  emailInput.value = '';
  messageInput.value = '';
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(getFeedback()));
  // console.log(getFeedback());
};

form.addEventListener('input', throttle(saveToLocalStorage, 500));
form.addEventListener('submit', sumbitForm);
