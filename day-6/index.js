'use strict';


const buttonEl = document.getElementById('button');
const secretListEl = document.getElementById('secret-list');
const tbody = document.querySelector('tbody');


const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"];

function generateSecretSantaPairs(arr) {
    // Your code here
    // First I instantiate an empty object
    const output = new Object();

    // Assign the first person to the second, and the second to the third..
    // And for the last one, assign it to the first one.
    for(const [key, value] of arr.entries()) {
        output[value] = key === arr.length - 1 
            ? arr[0] 
            : arr[key + 1];
    }
    return output;
}

const openCard = function() {
    if(buttonEl.innerHTML === 'Open Card') {
        buttonEl.innerHTML = 'Close Card';
        const santaList = generateSecretSantaPairs(people);

        for(const [key, value] of Object.entries(santaList)) {
            const tbody = document.querySelector('tbody');
            tbody.innerHTML += `
                <tr>
                    <td>${key}</td>
                    <td>${value}</td>
                </tr>
            `
        }
    } else {
        // Clear the list
        tbody.innerHTML = '';
        // Change the button name
        buttonEl.innerHTML = 'Open Card';
    }
    
    const cards = document.querySelectorAll('.card');
    for(let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('open');
    }
}


// Listen for the click event
buttonEl.addEventListener('click', openCard);

/**
Example output:
{
    Alice: "Dan",
    Bob: "Ferdinand",
    Carly: "Ed",
    Dan: "Alice",
    Ed: "Ginny",
    Ferdinand: "Bob",
    Ginny: "Carly"
}
 */
