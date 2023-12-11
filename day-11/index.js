'use strict';


const flagEl = document.querySelector('.flag');

setTimeout( () => {
    if(confirm('You want some animation?')) {
        flagEl.classList.add('flag-swiss');

    }
    
}, 2000);
