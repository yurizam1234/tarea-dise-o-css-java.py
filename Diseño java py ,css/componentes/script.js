// COMPONENTE: Header
function Header() {
    return `
      <header>
        <h1>Tarjetas de Presentación</h1>
      </header>
    `;
  }
  
  // COMPONENTE: UserCard
  function UserCard(nombre, imagen, descripcion) {
    return `
      <div class="carta-perfil">
        <img src="${imagen}" alt="Foto de ${nombre}" class="foto-perfil">
        <h2>${nombre}</h2>
        <p>${descripcion}</p>
      </div>
    `;
  }
  
  // COMPONENTE: MainContent con múltiples tarjetas
  function MainContent() {
    return `
      <main>
        ${UserCard('Susana Rodríguez', 'imagenes/presentaciom.png', 'Desarrolladora web.')}
        ${UserCard('Carlos Martínez', 'imagenes/carlos.jpg', 'Diseñador gráfico.')}
        ${UserCard('Laura Fernández', 'imagenes/laura.jpg', 'Marketing digital.')}
      </main>
    `;
  }
  
  // COMPONENTE: Footer
  function Footer() {
    return `
      <footer>
        <p>© 2025 Mi Sitio Web. Todos los derechos reservados.</p>
      </footer>
    `;
  }
  
  // Renderizar todo
  document.getElementById('app').innerHTML = `
    ${Header()}
    ${MainContent()}
    ${Footer()}
  `;
  