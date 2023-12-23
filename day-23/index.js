'use strict';
import JSConfetti from 'js-confetti';


// Instantiate new instance from the JS Confetti for styling
const jsConfetti = new JSConfetti();

// Grab the toggle circle
const toggleSwitchEl = document.querySelector('.toggle-switch');
const toggleWrap = document.querySelector('.toggle-wrap');
const audioEl = document.querySelector('audio');


// Listen for switching the toggle
toggleSwitchEl.addEventListener('click', (e) => {
    const { checked } = e.target.previousElementSibling;

    if(checked) {
        toggleWrap.style.background = '#00FF89';
        jsConfetti.addConfetti({
            emojis: ['🇳🇴'],
            emojiSize: 40,
            confettiNumber: 100,
            confettiRadius: 6,
        });

    } else {
        toggleWrap.style.backgroundColor = '#333';
        jsConfetti.addConfetti({
            emojis: ['🇬🇧'],
            emojiSize: 40,
            confettiNumber: 100,
            confettiRadius: 6,
        });
    }
});
