function createGrid (size = 16) {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';
    for (let i = 0; i < size * size; i++){
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.style.height = '${960 / size}px';
        div.style.width = '${960 / size}px';
        container.appendChild(div);
    }
}

createGrid();

document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('grid-item')) {
        e.target.style.backgroundColor = 'black';
    }
});

document.getElementById ('grid-size').addEventListener('click', () => {
    let newSize = prompt ('Enter new grid size (max 100)');
    newSize = parseInt (newSize);
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert('Invalid Size');
    }
    });