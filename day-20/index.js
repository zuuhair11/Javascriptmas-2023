'use strict';


const dangerArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧌", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
];


// Render the santa to the DOM
function renderSanta(allSanta) {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
        body {
            background-image: url('https://images.unsplash.com/photo-1607715150652-6c4a5dd185e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
            background-position: center;
            background-size: cover;
            
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2em;
        }

        p {
            color: red;
        }
    
    `;
    document.head.appendChild(styleEl)
    document.body.innerHTML = allSanta.join('') + `<p>(${allSanta.length})</p>`;
} 


function recursiveSanta(arr, santaArr = []) {
    // If it's not an array, just return 
    if(typeof arr !== 'object') {
        return;
    }

    // For each iteration:
    for(const item of arr) {
        // Check if it's a string and a santa, if so save it
        if(typeof item === 'string' && item === '🎅') {
            santaArr.push(item);

        // 1: New nested array
        // 2: Old santa array, this time it's not gonna be the default []
        } else {
            recursiveSanta(item, santaArr);
        }
    }

    return santaArr;
}


function saveSanta(arr) {
    const sanataSave = recursiveSanta(arr, []);

    // Update the DOM
    renderSanta(sanataSave);    

    return sanataSave;
}

// Check the returned results from saveSanta()
console.log(saveSanta(dangerArray));
