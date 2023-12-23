'use strict';


// getElementsByClassName => HTMLCollection(12) 
// Array.from(HTMLCollection(12) ) =>  [..., ..., ...]
const lightsArrEl = document.querySelectorAll('.lights');

// Toggle lights on and off alternativley
let toggleLight = true;

// Lights the tree
function treeLights() {

    if(toggleLight) {
        lightsArrEl.forEach( light => {
            if(light.classList.contains('red')) {
                light.classList.toggle('lights-on');

            } else if(light.classList.contains('blue')) {
                light.classList.remove('lights-on');
            }
        });

        toggleLight = !toggleLight;

    } else {
        lightsArrEl.forEach( light => {
            if(light.classList.contains('blue')) {
                light.classList.toggle('lights-on');

            } else if(light.classList.contains('red')) {
                light.classList.remove('lights-on');
            }
        });

        toggleLight = !toggleLight;
    }
}

setInterval(treeLights, 800);



/**
 * 🎄 Challenge: 
 * 1. The Christmas tree's lights should switch 
 *    on and off every 800 miliseconds.
 * 
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/ 
