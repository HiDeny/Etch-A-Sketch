// Plan:

// Create an 16x16 grid of squares divs.
// 
//      
// Set up a “hold” effect so that the grid divs change color when your mouse passes and hold over them.
//      
// 
// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.
//
//
// Add eraser button
//
//
//
// Have each pass through with the mouse change color to a completely random RGB value. 
// Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.


// Query Selectors
const randomNumber = () => Math.floor(Math.random() * 255);

const container = document.querySelector('.container');
const body = document.querySelector('body');


const divBtns = document.createElement('div');
divBtns.setAttribute('class', 'divBtns');
const btnSizeChange = document.createElement('button');
const btnEraser = document.createElement('button');
const btnRainbowColor = document.createElement('button');
const btnClear = document.createElement('button');

const colorPicker = document.createElement('input');
colorPicker.setAttribute('type', 'color');



// Default
let currentModeNormal = true;
let currentColor = 'black';
let mouseDown = false;


// Mouse hold 
body.onmousedown = () => mouseDown = true;
body.onmouseup = () => mouseDown = false;


// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.
btnSizeChange.textContent = 'Change Size';
btnSizeChange.addEventListener('click', changeSize);

let option = 16;

function changeSize() {
    option = window.prompt('Select Size (no bigger then 100)');
    option == null || option == '' ? option = 16 : option = option;
    if (option <= 100) {
        container.innerHTML = '';
        console.log(option);
        createGrid(option)
    } else {
        console.log(option);
        changeSize();
    }
 }


// Create 16x16 grid.
function createGrid (size = 16) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        for (let y = 0; y < size; y++) {
            const cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            cell.addEventListener('mouseover', changColor);
            cell.addEventListener('mousedown', changColor);
            row.appendChild(cell);
        }
    }
}

createGrid();

// Set up a “hover” effect so that the grid divs change color when your mouse passes over them.
function changColor (event) {
    if (event.type === 'mouseover' && !mouseDown) return;
    if (currentModeNormal === true) {
        event.target.style.backgroundColor = currentColor;
    } else {
        currentColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
        event.target.style.backgroundColor = currentColor;
    }
}


// Add eraser button
btnEraser.innerText = 'Eraser';
btnEraser.addEventListener('click', () => {
    if (currentColor != 'white') {
        currentColor = 'white';
        currentModeNormal = true;
    }
});

// Color mode 
colorPicker.addEventListener('change', (e) => {
    currentColor = e.target.value;
    currentModeNormal = true;
});




// Have each pass through with the mouse change color to a completely random RGB value. 
// Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.



btnRainbowColor.innerText = 'RAINBOW!';
btnRainbowColor.addEventListener('click', () => currentModeNormal = false);

btnClear.innerText = 'Clear';
btnClear.addEventListener('click', () => {
    container.innerHTML = '';
    createGrid(option);
});





// Add elements
body.insertBefore(divBtns, container);
divBtns.appendChild(btnSizeChange);
divBtns.appendChild(colorPicker);
divBtns.appendChild(btnEraser);
divBtns.appendChild(btnClear);
divBtns.appendChild(btnRainbowColor);




