
const userConn = document.querySelector('.user-container');

const registerBtn = document.querySelector('.registration-btn');

const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click' , () => {
      userConn.classList.add('login-section--display')
});

loginBtn.addEventListener('click', () => {
      userConn.classList.remove('login-section--display');
})