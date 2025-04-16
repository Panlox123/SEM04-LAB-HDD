const boton = document.getElementById('boton-Cambiar');
const titulo = document.getElementById('titulo');

boton.addEventListener('click', () => {
    const colores = ['red', 'green', 'blue', 'purple', 'orange'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    titulo.style.color = colorAleatorio;
});
