function cambiarColor() {
    const tarjeta = document.getElementById('tarjeta');
    const colores = ['#ffadad', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff']; 
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    tarjeta.style.backgroundColor = colorAleatorio; 
}
