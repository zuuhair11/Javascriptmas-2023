'use strict';
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'


const inputEl = document.querySelector('#new-wish-input');
const listEl = document.querySelector('#wishs');

let wishListArray = [
    {
        id: nanoid(),
        name: 'Santa Secret',
        description: 'Macbook Air M2🫣❤️',
        link: 'https://scrimba.com/learn/javascriptmas',
    }
];

// Clear the input
const clearWishInput = function() {
    inputEl.value = '';
}

// Display all wishes
const renderAllWishes = function(wishes) {
    listEl.innerHTML = '';

    for(const { id, description: wish, link } of wishes) {
        // Create wish container
        const wishEl = document.createElement('div');
        wishEl.classList.add('wish');

        // Wish content
        const wishContentEl = document.createElement('div');
        wishContentEl.classList.add('content');

        const wishInputEl = document.createElement('input');
        wishInputEl.classList.add('text');
        wishInputEl.type = 'text';
        wishInputEl.value = wish;
        wishInputEl.id = id;
        wishInputEl.setAttribute('readonly', 'readonly');

        wishContentEl.appendChild(wishInputEl);


        // Wish actions (delete, edit)
        const wishActionsEl = document.createElement('div');
        wishActionsEl.classList.add('actions');

        const wishEditEl = document.createElement('button');
        wishEditEl.classList.add('edit');
        wishEditEl.setAttribute('data-name', id);
        wishEditEl.id = id;
        wishEditEl.innerHTML = 'Edit';

        const linkEl = document.createElement('a');
        linkEl.setAttribute('href', link);
        linkEl.setAttribute('target', '_blank');
        linkEl.textContent = 'Buy';

        const wishDeleteEl = document.createElement('button');
        wishDeleteEl.classList.add('delete');
        wishDeleteEl.setAttribute('data-name', id);
        wishDeleteEl.innerHTML = 'Delete';

        wishActionsEl.appendChild(wishEditEl);
        wishActionsEl.appendChild(wishDeleteEl);
        wishActionsEl.appendChild(linkEl);

        wishEl.appendChild(wishContentEl);
        wishEl.appendChild(wishActionsEl);
        listEl.appendChild(wishEl);
    }
    
    // Clear the input value
    clearWishInput();
}
renderAllWishes(wishListArray);


const editWish = function(id) {
    const wishEditEl = document.querySelector(`.edit#${id}`);
    const wishEditInputEl = document.querySelector(`input#${id}`);

    wishEditEl.textContent = 'Save';
    wishEditInputEl.removeAttribute('readonly');
}

const saveWish = function(id) {
    const wishEditEl = document.querySelector(`.edit#${id}`);
    const wishEditInputEl = document.querySelector(`input#${id}`);
    console.log(wishEditInputEl.value)
    wishEditEl.textContent = 'Edit';
    
    wishListArray = wishListArray.map( wish => {
        if(wish.id === id) {
            return {
                ...wish,
                description: wishEditInputEl.value
            }
        } else {
            return wish;
        }
    });

    renderAllWishes(wishListArray);
}

const removeWish = function(id) {
    wishListArray = wishListArray.filter( wish => wish.id !== id);
    renderAllWishes(wishListArray);
}


// Listen for all actions
document.addEventListener('click', (e) => {
    // Listen for adding a new wish
    if(e.target.id === 'new-wish-submit') {
        e.preventDefault();

        const wish = inputEl.value;
        if(!wish) {
            alert('Please fill out the input');
            return;
        }
        
        // Push into the wishlist array
        wishListArray.push({
            id: nanoid(),
            name: 'Santa Secret',
            description: wish,
            link: 'https://scrimba.com/learn/javascriptmas'
        });

        // Display all wishes in the array
        renderAllWishes(wishListArray);
    }

    // Listen for edit wish
    if(e.target.textContent.toLowerCase() === 'edit') {
        editWish(e.target.dataset.name);

    // Listen for save wish
    } else if(e.target.textContent.toLowerCase() === 'save') {
        saveWish(e.target.dataset.name);

    // Listen for remove wish
    } else if (e.target.textContent.toLowerCase() === 'delete') {
        removeWish(e.target.dataset.name);
    
    // Listen for buy wish
    } else if (e.target.textContent.toLowerCase() === 'buy') {
        confirm('Just start solving the challenges on Scrimba, and there\'s plenty of gifts at the end');
    }
});
