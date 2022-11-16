let color = 'black';

function populateBoard(size) {

    const easDrawSpace = document.querySelector('.eas-draw-space');
    easDrawSpace.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    const squares = easDrawSpace.querySelectorAll('div');
    squares.forEach((square) => square.remove());

    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let square = document.createElement('div');
        // let squares = document.querySelectorAll('div');
        // easDrawSpace.style.gridTemplateRows = 'repeat(16, 1fr)';
        easDrawSpace.appendChild(square);
        square.addEventListener('mouseover', colorSquare);
    }   
}

populateBoard(16);

function colorSquare() {
    if(color === 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}

function changeColor(newColor) {
    color = newColor;
}

function reset() {
    const easDrawSpace = document.querySelector('.eas-draw-space');
    const squares = easDrawSpace.querySelectorAll('div');
    squares.forEach((square) => {
        square.style.backgroundColor = '#0151CC';
    })
}

function changeSize(newSize) {
    if (newSize <= 100) {
        populateBoard(newSize);
    } else {
        alert('Size is too large');
    }
}