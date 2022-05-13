let palabras = ['ESPADA', 'HOGAR', 'COMPUTADORA', 'CELULAR', 'MESA', 'COLCHON', 'MUEBLE', 'PLATO', 'COMIDA', 'TIERRA', 'TELEVISOR', 'PLANCHA', 'QUESO', 'HAMBURGUESA', 'CALLE', 'AVENIDA', 'CUADERNO', 'TERMOTANQUE', 'BOTELLA', 'SILLA', 'HELADERA', 'ELEFANTE', 'HORMIGA', 'ZAPATILLA', 'ANCIANO', 'MOCHILA', 'PIZZA', ' AUTOMOVIL', 'ACEITE', 'PILETA', 'ALMOHADA'];

let palabra = palabras[Math.floor(Math.random()*palabras.length)];
let numeroLetras = palabra.length;

let palabraSecreta = document.querySelector('.letras');
let espacio = document.querySelector('#secreto');
let letra = document.createElement('span');

let empezar = document.querySelector('#empezar');
let nuevaPalabra = document.querySelector('#nueva-palabra');
let horca = document.querySelector('#horca');

empezar.addEventListener('click', ()=>{
  empezar.style.display = 'none';
  nuevaPalabra.style.display = 'none';
  horca.style.display = 'flex';

  console.log(palabra);

  let espaciosLetras = '';

  for(let i=0; i<palabra.length; i++){
    espaciosLetras += ' _ ';
  }

  palabraSecreta.textContent = espaciosLetras;

  


})

