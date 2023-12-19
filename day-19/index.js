import JSConfetti from 'js-confetti';
import WordAPI from './api';


// Instantiate new word instance, and make a new call to the API
const wordapi = new WordAPI();
let word = 'santa'
let wordArr = word.split('');

console.log(word);
const wordDisplayEl = document.getElementById('word-display');
const inputEl = document.getElementById('user-input');

function renderSpaces() {
    const wordHtml = wordArr.map( () => {
        return `<span class="letter">-</span>`;
    });
    
    wordDisplayEl.innerHTML = wordHtml.join('');
}
renderSpaces();

function renderGuess(arr) {
    const wordHtml = arr.map( (letter) => {
        return `<span class="letter">${letter}</span>`;
    });

    wordDisplayEl.innerHTML = wordHtml.join('');
}

function handleGuess(e) {
    e.preventDefault();
    const guess = inputEl.value;

    if(guess) {
        const currentState = [];
        const guessArr = guess.split('');

        wordArr.forEach( (letter, index) => {
            if(letter === guessArr[index]) {
                currentState.push(letter);

            } else {
                currentState.push('-');
            }
        });

        renderGuess(currentState);
        checkWin(guess);
        inputEl.value = '';
    }    
}

async function checkWin(guess) {
    if(word === guess) {
        // Generate a new word fro mthe API
        word = await wordapi
            .getWord()
                .then( word => word )
                
        
        wordArr = word.split('');
        renderSpaces();

        console.log(word);

        const jsConfetti = new JSConfetti();

        jsConfetti.addConfetti({
            emojis: ['🧑‍🎄', '🎉', '🎊', '🧨'],
            emojiSize: 50,
            confettiNumber: 70,
            confettiRadius: 6,
        });
        jsConfetti.addConfetti();
    }
}

// Listen for submitting the guess
document.addEventListener('submit', handleGuess);
