import { isEmail } from '/utils/validation.js';
import { addErrorMessage, removeErrorMessage } from '/utils/error.js';
import { toggleEyeIcon } from '/utils/toggle-icon.js';
import { 
  EMAIL_EMPTY, 
  EMAIL_INVALID, 
  PASSWORD_EMPTY, 
  EMAIL_WRONG, 
  PASSWORD_WRONG 
} from '/constants/error-message.js';
import {
  EMAIL_INPUT,
  EMAIL_ERROR,
  PASSWORD_FIELD,
  PASSWORD_INPUT,
  PASSWORD_ERROR,
  EYE_ICON,
  LOGIN_BUTTON
} from '/constants/selector.js';


// Email
const emailField = document.querySelector(PASSWORD_FIELD);
const emailInput = document.querySelector(EMAIL_INPUT);
const emailErrorMessage = document.querySelector(EMAIL_ERROR);

// Password
const passwordField = document.querySelector(PASSWORD_FIELD);
const passwordInput = document.querySelector(PASSWORD_INPUT);
const passwordErrorMessage = document.querySelector(PASSWORD_ERROR);

// Toggle
const eyeIcon = document.querySelector(EYE_ICON);

// LoginButton
const loginBtn = document.querySelector(LOGIN_BUTTON);


// 이메일 유효성 검사 
function checkEmailValidation() {
  const email = emailInput.value.trim();

  if (email === '') {
    addErrorMessage(emailField, emailErrorMessage, EMAIL_EMPTY);
  } else if (!isEmail(email)) {
    addErrorMessage(emailField, emailErrorMessage, EMAIL_INVALID);
  } else {
    removeErrorMessage(emailField, emailErrorMessage);
  }
}

// 비밀번호 유효성 검사 
function checkPwdValidation() {
  const password = passwordInput.value.trim();

  if (password === '') {
    addErrorMessage(passwordField, passwordErrorMessage, PASSWORD_EMPTY);
  } else {
    removeErrorMessage(passwordField, passwordErrorMessage);
  }
};


function submitForm() {
  // e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;
  const testEmail = 'test@codeit.com';
  const testPassword = 'codeit101';

    if (email === testEmail && password === testPassword) {
      location.href = "/folder/index.html";
    } else if (email !== testEmail && password !== testPassword) {
      addErrorMessage(emailField, emailErrorMessage, EMAIL_WRONG);
      addErrorMessage(passwordField, passwordErrorMessage, PASSWORD_WRONG);
    } else {
      checkEmailValidation();
      checkPwdValidation();
    }
}


emailInput.addEventListener("focusout", checkEmailValidation);
passwordInput.addEventListener("focusout", checkPwdValidation);
loginBtn.addEventListener('click', submitForm);
eyeIcon.addEventListener("click", () => {
  toggleEyeIcon(passwordInput, eyeIcon)
});