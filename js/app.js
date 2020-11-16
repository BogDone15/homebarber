const modal = document.getElementById("myModal");
const burger = document.getElementById("navToggle");
const closeBtn = document.getElementsByClassName("modal__header-close")[0];
const logo = document.getElementById("logo");
const btnModalPw = document.querySelector('#btnmodal__pw');
const btnModalEmail = document.querySelector('#btnmodal__email');
const btnModalTel = document.querySelector('#btnmodal__tel');
const btnPw = document.querySelector('.btn__pw');
const btnEmail = document.querySelector('.btn__email');
const btnTel = document.querySelector('.btn__tel');
const btnModalClosePw = document.querySelector('.btnmodal-close-pw');
const btnModalCloseEmail = document.querySelector('.btnmodal-close-email');
const btnModalCloseTel = document.querySelector('.btnmodal-close-tel');
const signUp = document.getElementById('signup');
const logIn = document.getElementById('login');
const loginLink = document.getElementById('loginlink');
const signupLink = document.getElementById('signuplink');
const pwModal = document.getElementById('pwModal');
const showModal = document.getElementById('forgot__password');
const pwCloseBtn = document.getElementsByClassName('pwmodal__header-close')[0];
const input = document.querySelector(".pwmodal__input");
const phoneNum = document.querySelector(".phone__num");
const btnModalInputNewTel = document.querySelector('.btnmodal__input-old-tel');
const btnModalInputOldTel = document.querySelector('.btnmodal__input-new-tel');

function showPwModal(event) {
    event.preventDefault();
    if (event.target = showModal) {
        pwModal.classList.add('show-pwmodal');
        document.getElementsByTagName("body")[0].style.overflow = 'hidden';
    }    
}

function closePwModal() {
    pwModal.classList.remove('show-pwmodal');
    document.getElementsByTagName("body")[0].style.overflow = 'scroll';
    document.getElementsByTagName("body")[0].style.overflowX = 'hidden';
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

function closeBtnModal() {
    logo.style.opacity = '1';
    burger.style.display = 'block';
    modal.classList.remove('show-modal');
    document.getElementsByTagName("body")[0].style.overflow = 'scroll';
    document.getElementsByTagName("body")[0].style.overflowX = 'hidden';
}

function openBurger() {
    logo.style.opacity = '0';
    burger.style.display = 'none';
    modal.style.display = 'flex';
    modal.classList.add('show-modal');
    document.getElementsByTagName("body")[0].style.overflow = 'hidden';         
}

function showBtnModalPw(event) {
    event.preventDefault();

    btnModalPw.classList.add('show-btnmodal');
    document.getElementsByTagName("body")[0].style.overflow = 'hidden';
}

function showBtnModalEmail(event) {
    event.preventDefault();
    
    btnModalEmail.classList.add('show-btnmodal');
    document.getElementsByTagName("body")[0].style.overflow = 'hidden';
}

function showBtnModalTel(event) {
    event.preventDefault();

    btnModalTel.classList.add('show-btnmodal');
    document.getElementsByTagName("body")[0].style.overflow = 'hidden';
}

// Password

function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
     let range = elem.createTextRange();
     range.collapse(true);
     range.moveEnd("character", pos);
     range.moveStart("character", pos);
     range.select()
    }
}
   
function mask(event) {
    let matrix = "(___) ___ __ __",
     i = 0,
     def = matrix.replace(/\D/g, ""),
     val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
     return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
    });
    if (event.type == "blur") {
     if (this.value.length == 2) this.value = ""
    } else setCursorPosition(this.value.length, this)
};
   
function init () {
    if (phoneNum) {
        phoneNum.addEventListener("input", mask, false);
        phoneNum.addEventListener("focus", mask, false);
        phoneNum.addEventListener("blur", mask, false);
    }

    if (btnModalInputNewTel) {
        btnModalInputNewTel.addEventListener("input", mask, false);
        btnModalInputNewTel.addEventListener("focus", mask, false);
        btnModalInputNewTel.addEventListener("blur", mask, false);
    }

    if (btnModalInputOldTel) {
        btnModalInputOldTel.addEventListener("input", mask, false);
        btnModalInputOldTel.addEventListener("focus", mask, false);
        btnModalInputOldTel.addEventListener("blur", mask, false);
    }

    if (input) {
        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, false);
    }

    if (burger) {
        burger.addEventListener('click', openBurger);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeBtnModal);
    }

    if (showModal) {
        showModal.addEventListener('click', showPwModal);
    }

    if (pwCloseBtn) {
        pwCloseBtn.addEventListener('click', closePwModal);
    }

    if (signupLink) {
        signupLink.addEventListener('click', runSign);
    }

    if (loginLink) {
        loginLink.addEventListener('click', runLogin);
    }
    
    if (btnPw) {
        btnPw.addEventListener('click', showBtnModalPw);  
    }

    if (btnEmail) {
        btnEmail.addEventListener('click', showBtnModalEmail);
    }

    if (btnTel) {
        btnTel.addEventListener('click', showBtnModalTel);
    }   

    if (btnModalClosePw) {
        btnModalClosePw.addEventListener('click', () => {
            btnModalPw.classList.remove('show-btnmodal');
            document.getElementsByTagName("body")[0].style.overflow = 'auto';
            document.getElementsByTagName("body")[0].style.overflowX = 'hidden';
        });
    }

    if (btnModalCloseEmail) {
        btnModalCloseEmail.addEventListener('click', () => {
            btnModalEmail.classList.remove('show-btnmodal');
            document.getElementsByTagName("body")[0].style.overflow = 'auto';
            document.getElementsByTagName("body")[0].style.overflowX = 'hidden';
        });        
    }

    if (btnModalCloseTel) {
        btnModalCloseTel.addEventListener('click', () => {
            btnModalTel.classList.remove('show-btnmodal');
            document.getElementsByTagName("body")[0].style.overflow = 'auto';
            document.getElementsByTagName("body")[0].style.overflowX = 'hidden';
        });        
    }
}

init();