// app.js

// storage handle
const myStorage = localStorage;

// set greeting
function setGreeting() {

    const greeting = document.querySelector('.greeting');
    const formality = greeting.dataset.type === 'formal' ? 'Greetings' : 'Hello';
    const first = getStorage('first') || '';
    const last = getStorage('last') || '';

    if (localStorage.getItem('first') !== null) {
        greeting.textContent  = `${formality} ${first} ${last}`;
    }
}

// button function
function buttonClick(key) {

    const myInput = document.querySelector(`input[name=${key}]`);
    const inputValue = myInput.value;
    const nextPage = myInput.dataset.next;

    setStorage(key, inputValue);
    document.location = nextPage;
}

// storage helpers
function setStorage(key, value) {
    myStorage.setItem(key, value);
}

function getStorage(key) {
    return myStorage.getItem(key);
}

// reset
function reset() {
    myStorage.removeItem('first');
    myStorage.removeItem('last');
    document.location = '/';
}

// input enter key helper
if (document.querySelector('input')) {
    document.querySelector('input').onkeydown = function(e) {
        if(e.keyCode == 13) {
            buttonClick(this.name);
        }
    };
}

// init with greeting
setGreeting();
