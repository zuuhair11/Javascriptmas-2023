'use strict';


import { HfInference } from '@huggingface/inference';
const hf = new HfInference('****************************');
const jokeDisplayEl = document.querySelector('#joke-display');


document.getElementById('window-container').addEventListener('click', function () {
    setTimeout(function() {
        (async () => {
            const response = await hf.conversational({
                model: 'facebook/blenderbot-400M-distill',
                inputs: 'Tell me another a joke'
            });
            
            document.querySelector('img[alt="spinner"]').classList.add('loading')
            jokeDisplayEl.textContent = response.generated_text;
        })();
    }, 1000);
    /**
     * 🎄 Challenge:
     * 1. When clicked, the doors should open
     *    to reveal a festive joke.
     * 
     * 🎁 hint.md for help!
     **/
    document.querySelector('.left-door').style = "animation: left-open 0.3s forwards"
    document.querySelector('.right-door').style = "animation: right-open 0.3s forwards"
    document.querySelector('.joke-display').style = "animation: display-joke 0.3s forwards"
});

document.body.addEventListener('click', function(e) {
    if(e.target.classList.contains('body-container')) {
        document.querySelector('.left-door').style = "animation: left-open 0.3s backwords"
        document.querySelector('.right-door').style = "animation: right-open 0.3s backwords"
        document.querySelector('.joke-display').style = "animation: display-joke 0.3s backwords"
        document.querySelector('img[alt="spinner"]').classList.remove('loading');
        jokeDisplayEl.textContent = '';
    }
});
