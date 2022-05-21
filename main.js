let palabras = ['NARANJA', 'PERA', 'MANDARINA', 'POMELO', 'MANZANA', 'TOMATE', 'CEBOLLA', 'BANANA', 'PEREJIL', 'AJO', 'ZANAHORIA', 'MELON', 'SANDIA', 'HAMBURGUESA', 'ASADO', 'PASTA', 'TARTA', 'LIMON', 'LASAGNA', 'MILANESA', 'ZAPALLO', 'PAPA', 'BATATA', 'CHOCLO', 'LECHUGA', 'ACELGA', 'KIWI', 'PIMIENTO', 'BROCOLI', 'BERENJENA', 'PALTA', 'CIRUELA', 'DAMASCO', 'DURAZNO'];

let palabra = '';
let letraElegida = '';
let maxDesaciertos = 7;
let desaciertos = 0;
let respuestas = [];
let espacioLetras = null;

function elegirPalabra(){
  palabra = palabras[Math.floor(Math.random()*palabras.length)];
}

let empezar = document.querySelector('#empezar');
let nuevaPalabra = document.querySelector('#nueva-palabra');
let agregar = document.querySelector('#agregar');
let horca = document.querySelector('#horca');
let final = document.querySelector('#final');
let reset = document.querySelector('#reset');

empezar.addEventListener('click', ()=>{
  empezar.style.display = 'none';
  nuevaPalabra.style.display = 'none';
  agregar.style.display = 'none';
  horca.style.display = 'flex';
  
  elegirPalabra();
  mostrarLetras();

  document.addEventListener('keydown', (e)=>{
    letraElegida = e.key.toUpperCase();
    procesarLetras(letraElegida);
  })
})

nuevaPalabra.addEventListener('click', ()=>{
  palabras.push(agregar.value);
  agregar.value = '';
})

function mostrarLetras(){
  espacioLetras = palabra.split('').map(letra => (respuestas.indexOf(letra) >= 0 ? letra : ' _ ')).join(''); 
  document.querySelector('#secreto').textContent = espacioLetras;
  }

function procesarLetras(letra){
  respuestas.indexOf(letra) === -1 ? respuestas.push(letra) : null;

  if(palabra.indexOf(letra) >= 0){
    mostrarLetras();
    checkWinner();
  } else if(palabra.indexOf(letra) === -1){
    desaciertos++;
    actualizarHorca();
    checkGameOver();
  }
}

function checkWinner(){
  if(espacioLetras === palabra){
    final.style.display = 'flex';
    final.textContent = 'Muy bien, ganaste!';
    reset.style.display = 'flex';
  }
}

function checkGameOver(){
  if(maxDesaciertos === desaciertos){
    final.style.display = 'flex';
    final.textContent = 'Perdiste!, la palabra era: ' + palabra;
    reset.style.display = 'flex';
  }
}

function actualizarHorca(){
  horca.src = `images/horca${desaciertos}.png`;
}

reset.addEventListener('click', ()=>{
  reset.style.display = 'none';
  final.style.display = 'none';
  horca.src = 'images/horca0.png';
  palabra = '';
  letraElegida = '';
  maxDesaciertos = 7;
  desaciertos = 0;
  respuestas = [];
  espacioLetras = null;
  elegirPalabra();
  mostrarLetras();
})