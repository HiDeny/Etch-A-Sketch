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
const size = 16*16;



function createGrid () {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.setAttribute('class', 'row');
        container.appendChild(row);
        for (let y = 0; y < 16; y++) {
            const cell = document.createElement('div');
            cell.setAttribute('class', 'cell');
            // cell.textContent = y+1;
            row.appendChild(cell);
            console.log(y);
        }
        console.log(i);
        
        // div.textContent = "";
        // div.style.color = "pink";
    }
}

createGrid();


