'use strict';


// import OpenAI from "openai";
import { HfInference } from '@huggingface/inference';
const inference = new HfInference('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');

const headerEl = document.querySelector('header');
const dialogModalEl = document.getElementById('dialog-modal');
const imageContainerEl = document.getElementById('image-container');
const formEl = document.querySelector('#dialog-modal form');
const userInputEl = document.querySelector('#user-input');


const loadingContent = function() {
    imageContainerEl
        .firstElementChild
        .setAttribute('src', 'https://i.gifer.com/g0R9.gif');
}

const updateImageElement = function ({ src, alt }) {
    // const image = imageContainerEl.firstElementChild;
    const image = imageContainerEl.querySelector('img');
    image.setAttribute('src', src);
    image.alt = alt;
}

const blobToBase64 = async function(blob) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
}

const generateImage = async function(value) {
    const blob = await inference.textToImage({
        model: 'stabilityai/stable-diffusion-2',
        inputs: value,
        parameters: {
            negative_prompt: 'blurry',
        },
    });

    const imageUrl = await blobToBase64(blob);
    const imageAlt = await inference.imageToText({
        data: await (await fetch(imageUrl)).blob(),
        model: 'Salesforce/blip-image-captioning-base'
    });

    console.log(imageAlt.generated_text);

    updateImageElement({ 
        src: imageUrl, 
        alt: imageAlt.generated_text 
    });

    displayMessage(imageAlt.generated_text, 'success-message', 7000);
}

const displayMessage = function(message, classType, messageDelay) {
    const p = document.createElement('p');
    headerEl.appendChild(p);

    headerEl.classList.remove('hidden');
    headerEl.classList.add(classType);
    headerEl.firstElementChild.textContent = message;

    setTimeout( () => {
        headerEl.classList.remove(classType);
        headerEl.classList.add('hidden');
        headerEl.firstElementChild.remove();
    }, messageDelay);
}

// Show dialog when the content load
document.addEventListener('DOMContentLoaded', () => dialogModalEl.show());

function handleSubmit(e) {
    // Prevent the form from submitting
    e.preventDefault();

    // Get the user input
    const userValue = userInputEl.value.trim();
    if(userValue) {
        // Generate an image based on the user value
        generateImage(userValue);

        // Display a loading spinner while request fulfilled
        loadingContent();

        // Close the modal 
        dialogModalEl.close();
    } else {
        // Display an error
        displayMessage('Please enter a value before submitting.', 'error-message', 2000);
        console.log('Please enter a value before submitting.');
    }
}

// Listen for submitting the form
formEl.addEventListener('submit', handleSubmit);

document.addEventListener('click', function(e) {
    // Open the modal when the user click the button
    if(e.target.classList.contains('imagine')) {
        userInputEl.value = '';
        dialogModalEl.show();

    // Close the modal if the user clicked outside the box
    } else if(e.target.classList.contains('body')) {
        dialogModalEl.close();
    }
});


// Detect escape key press, close the modal
document.addEventListener('keydown', e => e.key === 'Escape' && dialogModalEl.close()); 

/**
 * 🎄 Challenge:
 * 1. When a user hits submit, dialogModal 
 *    should be hidden.
 * 2. Use the inputted text to generate an image 
 *    for the e-card using an AI model. 
 *    ⚠️ Make sure the image is square.
 * 3. Render the image to imageContainer.
 * 
 * 🎁 hint.md for help!
 **/   

