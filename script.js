// Carrito funcional
let contador = 0;
const botones = document.querySelectorAll('.agregar');
const contadorElemento = document.getElementById('contador');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    contador++;
    contadorElemento.textContent = contador;
    boton.textContent = 'Agregado ✅';
    setTimeout(() => {
      boton.textContent = 'Agregar al carrito';
    }, 1500);
  });
});

// Corazones animados
const corazonesContainer = document.getElementById('corazones');
const colores = ['#6ec1ff', '#33a6ff', '#0099ff', '#7fd3ff'];

function crearCorazon() {
  const corazon = document.createElement('div');
  corazon.classList.add('corazon');
  corazon.textContent = '💙';
  corazon.style.left = Math.random() * 100 + 'vw';
  corazon.style.animationDuration = 6 + Math.random() * 4 + 's';
  corazon.style.color = colores[Math.floor(Math.random() * colores.length)];
  corazonesContainer.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 10000);
}

setInterval(crearCorazon, 300);
