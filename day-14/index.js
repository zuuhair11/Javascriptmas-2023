'use strict';


const elfZoneEl = document.querySelector('.elf-hangout-zone');
const btnElf = document.querySelector("#btn-elf");
const btnCoffee = document.querySelector('#btn-coffee');


let numElf = 1;

function renderElf(elf) {
    elfZoneEl.appendChild(elf);
}

function duplicate({ emojiClass, emojiContent: content }) {
    if(numElf < 100) {
        const elfDiv = document.createElement('div');
        elfDiv.classList.add(emojiClass);
        elfDiv.textContent = content;
    
        renderElf(elfDiv);
        numElf += 1;
    }
}

btnElf
    .addEventListener("click", () =>  duplicate({
        emojiClass: 'elf', 
        emojiContent: '🧝'
    }));

btnCoffee.
    addEventListener('click', () =>  duplicate({
        emojiClass: 'coffee',
        emojiContent: '☕'
    }));

/** Stretch goals:
  - Write a function to give the elves some tools, or a cup of tea!
  - Limit the total number of elves to 100.
**/
