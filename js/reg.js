// registration
let signUp = document.getElementById('signup');
let logIn = document.getElementById('login');
let loginLink = document.getElementById('loginlink');
let signupLink = document.getElementById('signuplink');
let pwModal = document.getElementById('pwModal');
let showModal = document.getElementById('forgot__password');
let pwCloseBtn = document.getElementsByClassName('pwmodal__header-close')[0];

function showPwModal() {
    showModal.onclick = function (event) {
        if (event.target = showModal) {
            pwModal.classList.add('show-modal');
            document.getElementsByTagName("body")[0].style.overflow = 'hidden';
        }
    }

    pwCloseBtn.onclick = function (event) {
        pwModal.classList.remove('show-modal');
        document.getElementsByTagName("body")[0].style.overflow = 'scroll';
        document.getElementsByTagName("body")[0].style.overflowX = 'hidden';
    }
}

let runSign = e => {
    e.preventDefault();

    logIn.style.display = 'none';
    loginLink.classList.remove('actives');
    signUp.style.display = 'block';
    signupLink.classList.add('actives');
}

let runLogin = e => {
    e.preventDefault();

    signUp.style.display = 'none';
    signupLink.classList.remove('actives');
    logIn.style.display = 'block';
    loginLink.classList.add('actives');
}

signupLink.addEventListener('click', runSign);
loginLink.addEventListener('click', runLogin);

showPwModal();
