//declaration - initialization
const images = document.querySelectorAll('.banner-image');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

//Events
prev.addEventListener('click', function (event) {
    let currentImage = document.querySelector('.active');
    let previousImage = currentImage.previousElementSibling;

    if (previousImage !== null) {
        currentImage.classList.remove('active');
        previousImage.classList.add('active');
    } else {
        currentImage.classList.remove('active');
        images[2].classList.add('active');
    }
});

next.addEventListener('click', nextFunc);

//user defined function
function nextFunc(event) {
    let currentImage = document.querySelector('.active');
    let nextImage = currentImage.nextElementSibling;
    
    if (nextImage !== null) {
        currentImage.classList.remove('active');
        nextImage.classList.add('active');
    } else {
        currentImage.classList.remove('active');
        images[0].classList.add('active');
    }
}


///////////////////////////////
//formValidation
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const confirmpassword = document.querySelector('#confirmpassword');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (username.value != '') {
        console.log(username.value);
    }
    if (email.value != '') {
        console.log(email.value);
    }
    if (password.value.length >= 12 ) {
        console.log(password.value);
    }
    if (password.value === confirmpassword.value) {
        console.log(confirmpassword.value);
    }
});