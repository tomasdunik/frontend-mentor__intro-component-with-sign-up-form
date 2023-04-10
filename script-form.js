/***********************************************************/
/********************** Form Validation ********************/
/***********************************************************/

const form = document.getElementById('form');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

const formBoxFirstName = document.getElementById('form__box-first-name');
const formBoxLastName = document.getElementById('form__box-last-name');
const formBoxEmail = document.getElementById('form__box-e-mail');
const formBoxPassword = document.getElementById('form__box-password');

const iconErrorFirstName = document.getElementById('icon-error-first-name');
const iconErrorLastName = document.getElementById('icon-error-last-name');
const iconErrorEmail = document.getElementById('icon-error-email');
const iconErrorPassword = document.getElementById('icon-error-password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (firstName.value.trim() === '') {
    document.querySelector('#message-error-first-name').textContent =
      'Prosím, uveďte Vaše meno!';
    formBoxFirstName.classList.add('border-error');
    iconErrorFirstName.classList.add('show-error');
    return false;
  } else {
    document.querySelector('#message-error-first-name').textContent = '';
    formBoxFirstName.classList.remove('border-error');
    iconErrorFirstName.classList.remove('show-error');
  }

  if (lastName.value.trim() === '') {
    document.querySelector('#message-error-last-name').textContent =
      'Prosím, uveďte Vaše priezvisko!';
    formBoxLastName.classList.add('border-error');
    iconErrorLastName.classList.add('show-error');
    return false;
  } else {
    document.querySelector('#message-error-last-name').textContent = '';
    formBoxLastName.classList.remove('border-error');
    iconErrorLastName.classList.remove('show-error');
  }

  if (email.value.trim() === '') {
    document.querySelector('#message-error-email').textContent =
      'Prosím, uveďte Vašu e-mailovú adresu!';
    formBoxEmail.classList.add('border-error');
    iconErrorEmail.classList.add('show-error');
    return false;
  } else {
    document.querySelector('#message-error-email').textContent = '';
    formBoxEmail.classList.remove('border-error');
    iconErrorEmail.classList.remove('show-error');
  }

  const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  if (!emailRegex.test(email.value)) {
    document.querySelector('#message-error-email').textContent =
      'Nesprávny formát e-mailovej adresy!';
    formBoxEmail.classList.add('border-error');
    iconErrorEmail.classList.add('show-error');
    return false;
  }

  if (password.value.trim() === '') {
    document.querySelector('#message-error-password').textContent =
      'Prosím, uveďte Vaše heslo!';
    formBoxPassword.classList.add('border-error');
    iconErrorPassword.classList.add('show-error');
    return false;
  } else {
    document.querySelector('#message-error-password').textContent = '';
    formBoxPassword.classList.remove('border-error');
    iconErrorPassword.classList.remove('show-error');
  }

  setTimeout(() => {
    form.submit();
    window.location.href = 'form-success.html';
  }, 100);
});

/***********************************************************/
/********************* Form Input Outline ******************/
/***********************************************************/
document.addEventListener('DOMContentLoaded', function () {
  let inputs = document.querySelectorAll('div input');

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('focus', function (event) {
      event.target.parentElement.classList.add('outline-on-focus');
    });

    inputs[i].addEventListener('blur', function (event) {
      event.target.parentElement.classList.remove('outline-on-focus');
    });
  }
});
