"use strict";

// Table Display //

let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

let inputName = document.querySelector('#input-name');
let inputRoast = document.querySelector('#input-roast');
let CoffeeButton = document.querySelector('#input-submit');
CoffeeButton.addEventListener("click", addCoffees);

function addCoffees () {
    let addID = coffees.length + 1;
    let addName = inputName.value.toString();
    let addRoast = inputRoast.value.toString();
    let input = {id: addID, name: addName, roast: addRoast};
    coffees.push(input);
    coffeeList.innerHTML = renderCoffees(coffees);
}

// Generates HTML code to display the coffee's name and roast level.
function renderCoffee(coffee) {
    let html = '<div class="product-container">';
    html += '<h1 class="product-name">' + coffee.name + '</h1>';
    html += '<p class="product-roast">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

// Retrieves the values from the input fields, creates a new coffee object, pushes it to the coffees array and updates the coffee list in the HTML by calling renderCoffees.
function renderCoffees(coffees) {
    let html = "";
    for(let i = 0; i < coffees.length; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}


let coffeeList = document.querySelector('#coffees');
coffeeList.innerHTML = renderCoffees(coffees);

// Submit Section //
let roastSelection = document.querySelector('#roast-selection');


// Filters the coffees array based on the selected roast.
function updateCoffees(x) {
    x.preventDefault();
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast || selectedRoast === "all") {
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

let submitButton = document.querySelector('#submit');
submitButton.addEventListener("click", updateCoffees);

// Live Search //

// Function called whenever a key is pressed in the search box. Filters the array based on the coffee names that match the search term.
function searchCoffees() {
    let searchRoast = searchBox.value.toUpperCase();
    let filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().includes(searchRoast)) {
            filteredCoffees.push(coffee);
        }
    });
    coffeeList.innerHTML = renderCoffees(filteredCoffees);
}

let searchBox = document.querySelector('#searchBox');
searchBox.addEventListener("keyup", searchCoffees);