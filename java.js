/*  The following is the main concept that the code does:
1: The user picks a color from the Pencil Color<
2: Grid size (made from divs) can be selected:
    2.1 Default is 24x24
    2.2 Range between 1x1-64*64
3: There a button Eraser that returns the modified div to default
4: There is a button that returns all the modified divs to default
5: Bellow the pencil color there is a button that makes the Pencil Color
   change randomly (rainbow). 
*/

/* Table of contents:
    1. Variables
    2. Functions
 */


/*---------------Variables--------------- */


const pencilColor = document.getElementById("color-picker");
const rainbow = document.querySelector("rainbow");
const clear = document.querySelector("#clear");
const eraser = document.querySelector("#eraser");
const sketchContainer = document.querySelector("#sketch-container");



/* -------------Functions------------------*/

// Size of the grid

function size(size) {
    size = prompt("Please define your grid size", 24)
    size = Number(size);
    while (size > 100) {
        alert("Please insert a number between 2-100");
        size = prompt("Please define your grid size", 24);
    }
    return size;
};

let gridSize = size();

// Creates the grid



function createGrid (gridSize) {
    for (let i = 0; i < Math.pow(gridSize, 2); i++) {
        div = document.createElement('div');
        sketchContainer.appendChild(div);
        div.classList.add('square');
        let width = 600/gridSize;
        let height = 600/gridSize;
        div.style.height = `${height}px`;
        div.style.width += `${width}px`;
        div.addEventListener('mouseover', function (e){
            e.target.style.backgroundColor = 'black';
        })
    }
};

createGrid(gridSize);


// Clear button


function erase() {
    while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.firstChild);
    }
    createGrid(gridSize);
};

clear.addEventListener('click', erase);

// Eraser Button

function clean() {
            const divs = document.querySelectorAll("#sketch-container > div");
            divs.forEach((div) => {
            div.addEventListener('mouseover', function (e){
            // console.log(e);
            e.target.style.backgroundColor = 'white';
        });
    });
};
eraser.addEventListener('click', clean);
