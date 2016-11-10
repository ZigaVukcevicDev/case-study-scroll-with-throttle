import throttle from 'lodash/throttle';

// Init listening for window scroll event
window.addEventListener('scroll', expensiveFunction);

// Listening for checkbox click event
const checkbox = document.querySelector('.throttle');

checkbox.addEventListener('click', event => {
    const
        time = 1000,
        isEnabled = checkbox.checked;

    if (isEnabled) {
        window.removeEventListener('scroll', expensiveFunction);
        window.addEventListener('scroll', throttle(expensiveFunction, time));
    }
    else {
        window.removeEventListener('scroll', throttle(expensiveFunction, time));
        window.addEventListener('scroll', expensiveFunction);
    }
});

function expensiveFunction() {
    for (let i = 0; i < 1000; i++) {
        let randomNumber = Math.floor((Math.random() * 10000) + 1);
        console.log(randomNumber);
    }

    const numberOfCalls = document.querySelector('.no-of-calls');
    numberOfCalls.innerText = parseInt(numberOfCalls.innerText) + 1;
}

// Accept replacement modules
if (module.hot) {
    module.hot.accept();
}