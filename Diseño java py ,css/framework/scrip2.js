// Definición de la función Header
function Header() { 
    return `
        <header>
            <h1>Mi Tarjeta de Usuario</h1>
        </header>
    `;
}

function UserCard() {
    return `
        <div class="user-card" id="user-card">
            <img src="imagenes/presentaciom.png" class="foto-perfil">
            <h2>Susana Rodríguez</h2>
            <p>Desarrolladora Web apasionada por el diseño moderno.</p>
            <button onclick="cambiarColor()">Cambiar Color</button>
        </div>
    `;
}

function MainContent() {
    return `
        <main class="main-content">
            ${UserCard()}
        </main>
    `;
}


function Footer() {
    return `
        <footer class="footer">
            <p>&copy; 2025 Susana Rodríguez. </p>
        </footer>
    `;
}

function cambiarColor() {
    const tarjeta = document.getElementById('user-card');
    const colores = ['#ffd6a5', '#caffbf', '#a0c4ff', '#bdb2ff', '#ffc6ff'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    tarjeta.style.backgroundColor = colorAleatorio;
}
document.getElementById('app').innerHTML = `
    ${Header()}
    ${MainContent()}
    ${Footer()}
`;