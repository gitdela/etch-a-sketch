
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

function colorSquare() {
        this.style.backgroundColor = 'black';
}

populateBoard(16); 

function changeSize(newSize) {
    populateBoard(newSize);
}