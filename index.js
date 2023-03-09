// Plan:

// Create an 16x16 grid of squares divs.
// 
//      
// Set up a “hover” effect so that the grid divs change color when your mouse passes over them.
//      
// 
// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.

// Query Selectors
const container = document.querySelector('.container');


// Create 16x16 grid.
function createGrid (size = 16) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        for (let y = 0; y < size; y++) {
            const cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            cell.addEventListener('mouseover', insertHi);
            row.appendChild(cell);
        }
    }
}

createGrid();

// Set up a “hover” effect so that the grid divs change color when your mouse passes over them.
function insertHi (event) {
    const node = event.target;
    node.style.backgroundColor = 'black';
}


// Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid.

const body = document.querySelector('body');
const btn = document.createElement('button');


function changeSize() {
   let option = window.prompt('Select Size (no bigger then 100)');
   if (option <= 100) {
    container.innerHTML = '';
    createGrid(option)
   } else {
    changeSize();
   }
}

btn.textContent = 'Change Size';
btn.addEventListener('click', changeSize);



body.appendChild(btn);