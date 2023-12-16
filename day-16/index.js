'use strict';


const niceListEl = document.querySelector('#nice-list');
const naughtyListEl = document.querySelector('#naughty-list');
const btnEl = document.querySelector('#btn');


let nice = [];
let naughty = [];

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
];


function renderNiceList(niceList) {
    niceListEl.innerHTML = niceList.join('<br />');
}

function renderNaughtyList(naughtyList) {
    naughtyListEl.innerHTML = naughtyList.join('<br />');
}


function render({ nice: niceList, naughty: naughtyList }) {
    renderNiceList(niceList);
    renderNaughtyList(naughtyList);
}

function sortList() {
    nice = [];
    naughty = [];

    for(const person of sorteesArr) {
        const { name, hasBeenGood } = person;

        if(hasBeenGood) nice.push(name);
        if(!hasBeenGood) naughty.push(name);
    }

    // Display the names in the relevant place
    render({ nice, naughty });
}

function switchList() {
    // Using destructuring to switch values
    [nice, naughty] = [naughty, nice];

    // Display the names in the relevant place
    render({ nice, naughty });
}

btnEl.addEventListener('click', function(e) {
    const clicked = e.target;

    if(clicked.textContent.toLowerCase() === 'sort') {
        btnEl.textContent = 'Switch';

        const styleEl = document.createElement('style');
        styleEl.innerHTML = `
            button {
                background-color: lime;
                color: deeppink;
            }
        `;
        document.head.appendChild(styleEl);

        sortList();

    } else if(clicked.textContent.toLowerCase() === 'switch') {
        switchList();
    }
});
/** Challenge: 
  - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, 
    according to whether they have been good or not. 
    Then display the names in the relevant place in the DOM.
**/

/** Stretch goals:
  - Add the option to add new names to the sorteesArr.
  - Make it possible to switch people to the other list.
**/