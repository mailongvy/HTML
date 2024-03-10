const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

// to save the dark mode use the object 'local storage'

// function that stores the value true if the dark mode is activated or false if it is not
function store(value) {
    localStorage.setItem('darkmode', value);

}

// function that indicates 
function load() {
    const darkmode = localStorage.getItem('darkmode');

    if (!darkmode) {
        store(false);
        icon.classList.add('fa-sun');
    } else if ( darkmode == 'true') {
        body.classList.add('darkmode');
        icon.classList.add('fa-moon');
    } else if (darkmode == 'false') {
        icon.classList.add('fa-sun');
        
    }

}

btn.addEventListener('click', () => {

    body.classList.toggle('darkmode');
    icon.classList.add('animated');

    // save true or false
    store(body.classList.contains('darkmode'));


    if(body.classList.contains('darkmode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }


    setTimeout( () => {
        icon.classList.remove('animated')
    }, 500)
})