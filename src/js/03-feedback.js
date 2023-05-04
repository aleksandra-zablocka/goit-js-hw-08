import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state';

// function saveToLocalStorage() {
//   try {
//     const feedback = {
//       email: emailInput.value,
//       message: messageInput.value,
//     };
//     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
//   } catch (error) {
//     console.error('Error saving to localStorage:', error);
//   }
// }

const saveToLocalStorage = throttle(e => {
  try {
    const feedback = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(feedback));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
}, 500);

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
  emailInput.value = '';
  messageInput.value = '';
  //   localStorage.clear();
};

form.addEventListener('input', saveToLocalStorage);
form.addEventListener('submit', sumbitForm);
