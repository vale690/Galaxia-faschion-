let contador = 0;
const botones = document.querySelectorAll(".agregar");
const contadorElemento = document.getElementById("contador");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    contador++;
    contadorElemento.textContent = contador;
    boton.textContent = "Agregado ✅";
    setTimeout(() => {
      boton.textContent = "Agregar al carrito";
    }, 1500);
  });
});
