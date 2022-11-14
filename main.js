
for (let i = 0; i < 256; i++) {
    const easDrawSpace = document.querySelector('.eas-draw-space');
    let square = document.createElement('div');
    // let squares = document.querySelectorAll('div');
    easDrawSpace.style.gridTemplateColumns = 'repeat(16, 1fr)';
    // easDrawSpace.style.gridTemplateRows = 'repeat(16, 1fr)';
    easDrawSpace.appendChild(square);
    // squares.forEach(square) {'mouseover', }
}