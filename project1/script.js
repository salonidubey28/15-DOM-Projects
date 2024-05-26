const btn = document.getElementById('btn');
const color = document.getElementById('color');

btn.addEventListener('click', function() {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    color.textContent = newColor;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
