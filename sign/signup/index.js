import { isValidEmail, isValidPwd } from '../../utiles/validation.js';

const emailInput = document.querySelector('#email');
const pwdInput = document.querySelector('#password');
const pwdConfirmInput = document.querySelector('#password-confirm');
const loginBtn = document.querySelector('.btn-login');
const pwdToggleIcon = document.querySelector('#toggle-eye');


const checkEmailValidation = (e) => {
  const inputField = document.querySelector('.email-field');
  const email = emailInput.value.trim();
  const errorMessage = inputField.querySelector('.error');

  if (email === '') {
    errorMessage.textContent = '이메일을 입력해주세요.';
    inputField.classList.add('error');
  } else if (!isValidEmail(email)) {
    errorMessage.textContent = '올바른 이메일 주소가 아닙니다.';
    inputField.classList.add('error');
  } else if (email === 'test@codeit.com') {
    errorMessage.textContent = '이미 사용 중인 이메일입니다.';
    inputField.classList.add('error');
  } else {
    errorMessage.textContent = '';
    inputField.classList.remove('error');
  }
};


const checkPwdValidation = (e) => {
  const inputField = document.querySelector('.pwd-field');
  const pwd = pwdInput.value.trim();
  const errorMessage = inputField.querySelector('.error');

  // 값이 8자 미만 or only 문자열 or only 숫자
  if (!isValidPwd(pwd)) { 
    errorMessage.textContent = '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
    inputField.classList.add('error');
  } else {
    errorMessage.textContent = '';
    inputField.classList.remove('error');
  }
};


const confirmPwd = (e) => {
  const inputField = document.querySelector('.pwd-confirm-field');
  const pwd = pwdInput.value;
  const pwd2 = document.querySelector('#password-confirm').value;
  const errorMessage = inputField.querySelector('.error');

  if(pwd !="" && pwd2 != "") {
        if(pwd !== pwd2){
          errorMessage.textContent = '비밀번호가 일치하지 않습니다.'
          inputField.classList.add('error');
      }
  }
};

const submitForm = (e) => {
  e.preventDefault();

  if (emailInput.value && 
      pwdInput.value && 
      pwdConfirmInput.value
  ) {
    location.href = "../../folder/index.html";
  } else {
    checkEmailValidation(e);
    checkPwdValidation(e);
    confirmPwd(e);
  }
}; 

function submitOnEnter(e) {
  if(e.key === "Enter") {
    submitForm(e);
  }
}

const toggleEyeIcon = () => {
  if(password.type === "password") {
    password.type = "text";
    pwdToggleIcon.src = '/images/eye-on.svg';
  } else {
    password.type = "password";
    pwdToggleIcon.src = '/images/eye-off.svg';
  }
}


emailInput.addEventListener("focusout", checkEmailValidation);
pwdInput.addEventListener("focusout", checkPwdValidation);
pwdConfirmInput.addEventListener("focusout", confirmPwd);
emailInput.addEventListener("keyup", submitOnEnter);
pwdInput.addEventListener("keyup", submitOnEnter);
pwdConfirmInput.addEventListener("keyup", submitOnEnter);
pwdToggleIcon.addEventListener("click", toggleEyeIcon);
loginBtn.addEventListener("click", submitForm);