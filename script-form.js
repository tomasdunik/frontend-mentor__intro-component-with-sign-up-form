/***********************************************************/
/******************** Validácia formulára ******************/
/***********************************************************/
function validateForm() {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  const formBoxFirstName = document.getElementById('form__box-first-name');
  const formBoxLastName = document.getElementById('form__box-last-name');
  const formBoxEmail = document.getElementById('form__box-e-mail');
  const formBoxPassword = document.getElementById('form__box-password');

  const iconErrorFirstName = document.getElementById('icon-error-first-name');
  const iconErrorLastName = document.getElementById('icon-error-last-name');
  const iconErrorEmail = document.getElementById('icon-error-email');
  const iconErrorPassword = document.getElementById('icon-error-password');

  const successMessage = document.getElementById('successMessage');

  if (firstNameInput.value.trim() === '') {
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

  if (lastNameInput.value.trim() === '') {
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

  if (emailInput.value.trim() === '') {
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
  if (!emailRegex.test(emailInput.value)) {
    document.querySelector('#message-error-email').textContent =
      'Nesprávny formát e-mailovej adresy!';
    formBoxEmail.classList.add('border-error');
    iconErrorEmail.classList.add('show-error');
    return false;
  }

  if (passwordInput.value.trim() === '') {
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

  if (
    firstNameInput.value.trim() !== '' &&
    lastNameInput.value.trim() !== '' &&
    emailInput.value.trim() !== '' &&
    emailRegex.test(emailInput.value) &&
    passwordInput.value.trim() !== ''
  ) {
    window.location.href = 'form-success.html';
  }

  return false;
}

/***********************************************************/
/************************** Outline ************************/
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
