// Componente UserCard que recibe nombre, imagen, descripcion
function UserCard(nombre, imagen, descripcion) {
    return `
      <div class="carta-perfil">
        <img src="${imagen}" alt="Foto de ${nombre}" class="foto-perfil">
        <h2>${nombre}</h2>
        <p>${descripcion}</p>
      </div>
    `;
  }
  
  const app = document.getElementById('app');
  
  document.getElementById('app').innerHTML = `
  ${UserCard('Susana Rodríguez', 'imagenes/presentaciom.png', 'Desarrolladora Web.')}
  ${UserCard('Carlos Martínez', 'imagenes/carlos.jpg', 'Diseñador Gráfico.')}
  ${UserCard('Laura Fernández', 'imagenes/laura.jpg', 'Especialista en marketing digital.')}
`;

  