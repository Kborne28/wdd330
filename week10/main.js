const form = document.getElementsByTagName('form');

const email = document.getElementsById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {

    if(email.validity.valid) {
    emailError.textContent = '';
    emailError.className = 'error';
} else {
    showError();
}
});


form.addEventListener('submit', function (event) {
    if(!email.validity.valid) {
        showError();
        event.preventDefault();
    }
});

function showError() {
    if(email.validity.valueMissing) {
        email.Error.textContent = 'You need to enter an e-mail address.';
    } else if(email.validity.typeMismatch) {
        emailError.textContent = 'Entered value needs to be an e-mail address.';
    } else if(email.validity.tooShort){
        emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`
    }

    emailError.className = 'error active';
}


const toggleMenuVisibility = () => {
    document.querySelector('#navigation').classList.toggle('visible')
}

function showNav(depth) {

    let pathPrefix = ''
    for (i = 0; i < depth; i++) {
        console.log('step')
        pathPrefix = pathPrefix + '../'
    }
    console.log(pathPrefix)
    console.log(depth)
    console.log(parseInt(depth))

    document.querySelector('#nav').innerHTML = 
    `
    <ul id='navigation'>
            
            <li><a href='${pathPrefix}week1'>Week 1</a></li>
            <li><a href='${pathPrefix}week2'>Week 2</a></li>
            <li><a href='${pathPrefix}week3'>Week 3</a></li>
            <li><a href='${pathPrefix}week4'>Week 4</a></li>
            <li><a href='${pathPrefix}week5'>Week 5</a></li>
            <li><a href='${pathPrefix}week6'>Week 6</a></li>
            <li><a href='${pathPrefix}week7'>Week 7</a></li>
            <li><a href='${pathPrefix}week8'>Week 8</a></li>
            <li><a href='${pathPrefix}week9'>Week 9</a></li>
            <li><a href='${pathPrefix}week10'>Week 10</a></li>
            <li><a href='${pathPrefix}week11'>Week 11</a></li>
            <li><a href='${pathPrefix}week12'>Week12</a></li>
            <li><a href='${pathPrefix}webdev/mainpage.html'>Final Project</a></li>
        </ul>
    `
}
