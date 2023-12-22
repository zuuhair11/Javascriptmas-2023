'use strict';
import Storage from './storage.js';

// Instantiate a new instance
const storage = new Storage();

// IF the data exist, set it to people array, otherwise assign it to an empty Array
let people = storage.getPeople();

// Getting element
const giftImageEl = document.querySelector('#image-gift');
const inputFieldEl = document.querySelector('#input-field');
const addButtonEl = document.querySelector('#add-button')
const peopleListEl = document.querySelector('#people-list');


// Display a little gif in box place
function displayGif() {
    giftImageEl.src = 'https://i.gifer.com/3aw.gif';

    setTimeout( function() {
        giftImageEl.setAttribute('src', 'icon.png');

    }, 4000);
}

addButtonEl.addEventListener('click', function() {
    let inputValue = inputFieldEl.value;
    
    if(inputValue) {
        people.push(inputValue);
        storage.setPeople(people);
        
        clearInputFieldEl();
        
        renderList(storage.getPeople());
    }
});

function renderList(array) {
    clearPeopleListEl();
    
    for(let i = 0; i < array.length; i++) {
        let currentPerson = array[i];

        appendPersonToPeopleListEl(currentPerson);
    }
}
renderList(people);

function clearPeopleListEl() {
    peopleListEl.innerHTML = '';
}

function clearInputFieldEl() {
    inputFieldEl.value = '';
}

function appendPersonToPeopleListEl(person) {
    let newEl = document.createElement('li');
    newEl.textContent = person;
    
    newEl.addEventListener('dblclick', function() {
        let index = people.indexOf(person);

        people.splice(index, 1);
        storage.setPeople(people);
            
        renderList(storage.getPeople());

        // Display a little gif whenever a user removed
        displayGif();
    });
    
    peopleListEl.append(newEl);
}
