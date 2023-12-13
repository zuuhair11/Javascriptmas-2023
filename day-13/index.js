'use strict';


const foodEl = document.querySelector('#food');
const guestsEl = document.querySelector('#guests')
const optionsEl = document.querySelectorAll('input[type="radio"]');
const btnEl = document.querySelector('#btn');


const normalMeal = [
    'Classic Roast Turkey Extravaganza', 
    'Honey Glazed Ham Delight', 
    'Rosemary Garlic Roast Chicken Feast', 
    'Grilled Salmon with Lemon Dill Sauce', 
    'Beef Wellington Spectacle'
];

const vegetarianMeals = [
    'Festive Stuffed Bell Peppers', 
    'Mushroom Wellington Extravaganza', 
    'Spinach and Feta Spanakopita', 
    'Lentil Shepherd\'s Pie Delight',
    'Pesto Pasta Primavera Feast'
];

const dietaryMeals = [
    'Vegetarian Winter Squash Risotto', 
    'Vegan Chickpea and Quinoa Salad', 
    'Gluten-Free Grilled Vegetable Skewers', 
    'Low-Carb Cauliflower Crust Pizza', 
    'Keto Zucchini Noodles with Pesto' 
];


const renderMeal = function(chosenMeal) {
    foodEl.textContent = chosenMeal;
}

const generateNumber = function(guests) {
    let number;

    switch (guests) {
        case 1: 
            number = 0;
            break;

        case 2: 
            number = 1;
            break;
        
        case 3: 
            number = 2;
            break;
        
        case 4:
            number = 3;
            break;
        case 5:
            number = 4;
            break;

        default:
            number = Math.trunc(Math.random() * 5);
    }

    return number;
}

const generateMeal = function(guests, options) {
    const number = generateNumber(+guests);
    const whichOption = options.find( ({ isChecked }) => isChecked );
    let chosenMeal;

    
    if(whichOption.value === 'vegetarian') {
        chosenMeal = vegetarianMeals[number];

    } else if(whichOption.value === 'dietary') {
        chosenMeal = dietaryMeals[number];

    } else if(whichOption.value === 'normal') {
        chosenMeal = normalMeal[number];
    }

    renderMeal(chosenMeal);
}


// Listen for calculate click
btnEl.addEventListener('click', () => {
    const guests = guestsEl.value;
    let options = [];

    for(const { value, checked } of optionsEl) {
        options.push({
            value,
            isChecked: checked
        });
    }
    console.log(options)

    if(guests) {
        // Display the meal
        generateMeal(guests, options);

    } else {
        // Display an error
        alert('First you have to fill how many guest');
    }
});



/**
    Task:
    - Write the code to help a user choose the perfect Christmas dinner idea
    based on the number of people attending.

    - Include a checkbox for the user to specify the meal 
    should be vegetarian-friendly.

    Dinner suggestions (or choose your own!):
        Vegetarian: Winter Squash Risotto
        4 people or less: Ham
        5+ people: Turkey

    Stretch goals:
    - Add more dietary options.
    - Show recipes when the meal has been selected.
*/
