// Get the modal
let modal = document.getElementById("myModal");
let burger = document.getElementById("navToggle");
let closeBtn = document.getElementsByClassName("modal__header-close")[0];
let logo = document.getElementById("logo");

function openBurger() {
    burger.onclick = function(event) {
        if (event.target.parentElement = burger) {
            logo.style.opacity = '0';
            burger.style.display = 'none';
            modal.style.display = 'flex';
            modal.classList.add('show-modal');
            document.getElementsByTagName("body")[0].style.overflow = 'hidden';
        }
    }
    
    closeBtn.onclick = function() {
        logo.style.opacity = '1';
        burger.style.display = 'block';
        modal.classList.remove('show-modal');
        document.getElementsByTagName("body")[0].style.overflow = 'scroll';
        document.getElementsByTagName("body")[0].style.overflowX = 'hidden';
    }
}

openBurger();