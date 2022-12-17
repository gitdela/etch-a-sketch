// declared this way in order to change the value of color easily
let color = 'black';


function populateBoard(size) {
// size = 16 here on default

    const easDrawSpace = document.querySelector('.eas-draw-space');

// setting the grid style using js
// so we can change the grid size easily with the size argument
// grids not created yet, just setting the template for it
    easDrawSpace.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

// this only checks to see if there are divs there already
// if there are, it will remove all of it 
// if not, it'll skip next 2 lines of code
    const squares = easDrawSpace.querySelectorAll('div');
    squares.forEach((square) => square.remove());

// now let's start creating the divs
// we need size * size amount of divs
// that will be distributed according to the grid template style set above
    let amount = size * size;

// right after every div created, it listens for a mouseover event
// if the event happens, the colorSquare function gets called
// this function determines which color to paint the div
    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        easDrawSpace.appendChild(square);
        square.addEventListener('mouseover', colorSquare);
    }   
}

// we need a default 16 x 16 div when the page loads
populateBoard(16);

// this function determines which color to paint the div
// the default color = black
// but value of color can change if changeColor function is called
// changeColor function gets called by the eas-buttons
function colorSquare() {
    if(color === 'random') {

// if random is clicked, the code randomly styles each div with a new color
// notice that to use Math.random(), hsl is the best color system to use
// because it deals with numbers, obviously
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
// notice how we brought 'this' here
// it brought the newly created div from the populateBoard()
// to be worked on
    } else {

// if not, the hard coded colors are used straight forward
        this.style.backgroundColor = color;
    }

// note that random was eliminated first
}

// called depending on which eas-button clicked
// value of color changes
// this new color is what is used to color that individual div
function changeColor(newColor) {
    color = newColor;
}


// we need one button to clear out the whole board
// this reset() is called using the onclick set on the reset button
function reset() {
    const easDrawSpace = document.querySelector('.eas-draw-space');
    const squares = easDrawSpace.querySelectorAll('div');
    squares.forEach((square) => {

// i want to reserve the white color for the eraser
// and i like how the default black looks on the blue
        square.style.backgroundColor = '#0151CC';
    })
}

// regulate the input grid size to equal or less than 100
// this function gets called anytime the user inputs a new grid size
// a quick check is done before the populateBoard() gets called
function changeSize(newSize) {
    if (newSize <= 100) {
        populateBoard(newSize);
    } else {
        alert('Size is too large');
    }
}