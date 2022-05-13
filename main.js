let palabras = ['ESPADA', 'HOGAR', 'COMPUTADORA', 'CELULAR', 'MESA', 'COLCHON', 'MUEBLE', 'PLATO', 'COMIDA', 'TIERRA', 'TELEVISOR', 'PLANCHA', 'QUESO', 'HAMBURGUESA', 'CALLE', 'AVENIDA', 'CUADERNO', 'TERMOTANQUE', 'BOTELLA', 'SILLA', 'HELADERA', 'ELEFANTE', 'HORMIGA', 'ZAPATILLA', 'ANCIANO', 'MOCHILA', 'PIZZA', ' AUTOMOVIL', 'ACEITE', 'PILETA', 'ALMOHADA'];

let palabra = palabras[Math.floor(Math.random()*palabras.length)];
console.log(palabra);


let empezar = document.querySelector('#empezar');
let nuevaPalabra = document.querySelector('#nueva-palabra');
let horca = document.querySelector('#horca');
let cabeza = document.querySelector('#prisoner-head');

empezar.addEventListener('click', ()=>{
  empezar.style.display = 'none';
  nuevaPalabra.style.display = 'none';
  horca.style.display = 'flex';



})

