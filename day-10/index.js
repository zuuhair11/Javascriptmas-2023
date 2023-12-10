'use strict';


const playerEl = document.querySelector('#player');



function playSong(id) {
    const currentSong = playerEl.getAttribute('src');
    const song = `https://www.youtube.com/embed/${id}?autoplay=1`;
    
    currentSong !== song && playerEl.setAttribute('src', song);
}
