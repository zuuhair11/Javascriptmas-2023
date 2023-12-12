'use strict';


const xmasGifts = [
    'guitar 🎸', 
    'skates ⛸️', 
    'bear 🧸', 
    'magnet 🧲', 
    'laptop 💻', 
    'games console 🎮 ', 
    'jewellery 💍', 
    'kite 🪁'
];

/**
 * Challenge:
 * 1. Sort the array twice. Alphabetically and reverse alphabetically.  
 **/

// First attempt using only sort()
console.group('Only sort()');

const sortedAZ = xmasGifts.sort();
console.log('A-Z: ', sortedAZ);

const sortedZA = xmasGifts.sort( () => -1 );
console.log('Z-A: ', sortedZA);

console.groupEnd();



// Second attempt using only forEach()
console.group('Only forEach()');

let done1 = false;
while(!done1) {
    done1 = true;

    xmasGifts.forEach( (item, index, arr) => {
        if(index < arr.length - 1) {
            if(item.charCodeAt(0) > arr[index + 1].charCodeAt(0)) {
                [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
                done1 = false;

            } else if(item.charCodeAt(0) === arr[index + 1].charCodeAt(0)) {
                if(item.charCodeAt(1) > arr[index + 1].charCodeAt(1)) {
                    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
                    done1 = false;
                }
            }
        }
    });
}
console.log('A-Z: ', xmasGifts);

let done2 = false;
while(!done2) {
    done2 = true;

    xmasGifts.forEach( (item, index, arr) => {
        if(index < arr.length - 1) {
            if(item.charCodeAt(0) < arr[index + 1].charCodeAt(0)) {
                [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
                done2 = false;

            } else if(item.charCodeAt(0) === arr[index + 1].charCodeAt(0)) {
                if(item.charCodeAt(1) < arr[index + 1].charCodeAt(1)) {
                    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
                    done2 = false;
                }
            }
        }
    });
}
console.log('Z-A: ', xmasGifts);

console.groupEnd();
//["bear 🧸", "games console 🎮 ", "guitar 🎸", "jewellery 💍", "kite 🪁", "laptop 💻", "scarf 🧣", "skates ⛸️"]
//["skates ⛸️", "scarf 🧣", "laptop 💻", "kite 🪁", "jewellery 💍", "guitar 🎸", "games console 🎮 ", "bear 🧸"]
