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
const rainbow = document.getElementById("rainbow");
const clear = document.querySelector("#clear");
const eraser = document.querySelector("#eraser");
const sketchContainer = document.querySelector("#sketch-container");
const gridSlider = document.querySelector("#grid-slider");

/* -------------Functions------------------*/

//Function for the grid Slider.

gridSlider.addEventListener('change', () => {
    while (sketchContainer.firstChild) {
        sketchContainer.removeChild(sketchContainer.firstChild);
    }
    createGrid(gridSlider.value);
});

let gridSize = gridSlider.value;

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
    createGrid(gridSlider.value);
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

// Rainbow Button

/* This function picks a random color from a array */
function randomColor() {
    const color = ['#FF0000', '#FFA500', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8F00FF'];
    const rainbow = color[Math.floor(Math.random() * color.length)];
    return rainbow;
};

/* This function adds a event listener to all the divs and applies the random color from the function above */
function random() {
    const divs = document.querySelectorAll("#sketch-container > div");
    divs.forEach((div) => {
        div.addEventListener('mouseover', function (e){
        // console.log(e);
        e.target.style.backgroundColor = randomColor();
        });
    });
};

rainbow.addEventListener('click', random);

// Pencil Color option

//Function that detects the color the user picked
function colorPencil() {
    const divs = document.querySelectorAll("#sketch-container > div");
    divs.forEach ((div) => {
        div.addEventListener('mouseover', function (e){
            let color = pencilColor.value;
            e.target.style.backgroundColor = color;
        })
    })
};

pencilColor.addEventListener('input', colorPencil); 

