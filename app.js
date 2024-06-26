let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();

// JERECICIOS DE PRACTICAS - LISTAS O ARRAYS

/*
let listaGenerica = [];
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];
lenguajesDeProgramacion.push('Java','Ruby','GoLang');

function muestraLista() {
console.log(lenguajesDeProgramacion);
}
muestraLista();
// muestra la lista por separado
function muestraListaPorSeparado(){
    for (let i = 0; i < lenguajesDeProgramacion.length; i++){
        console.log(lenguajesDeProgramacion[i]);
    }
}
muestraListaPorSeparado()

// muuestra la lista inversa

function muestraListaInversa(){
    for (let i = lenguajesDeProgramacion.length - 1; i >=0; i--){
        console.log(lenguajesDeProgramacion[i]);
    }
}
muestraListaInversa();

// promedio lista de numeros

function promedioLista(lista){
    let suma = 0;
    for (let i = 0; i < lista.length; i++){
        suma += lista[i];
    }
    return suma / lista.length
}

let numero = [10,25,48,74,56];
let promedio = promedioLista(numero);
console.log('El promedio es: ' + promedio);

// numero mas grande y pequeño de la lista

function mayorArreglo(lista){
    let mayor = lista[0];
    let menor = lista[0];
    for (let i = 1; i < lista.length; i++){
        if (lista[i] > mayor){
            mayor = lista[i];
        }
        if (lista[i] < menor){
            menor = lista[i];
        }
    }   
    console.log('El numero mayor es: ' + mayor);
    console.log('El numero menor es: ' + menor);
}

let numeros = [12,25,69,14];
mayorArreglo(numeros);

// suma de todos los elementos de una lista

function sumaTodosElementosLista(lista){
    let suma = 0;
    for(let i = 0; i < lista.length; i++){
        suma += lista[i];
    }
    console.log('La suma de todos los elemntos de la lista es: ' + suma);
}

let numeros2 = [25,58,54,78,26];
sumaTodosElementosLista(numeros2);

// función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }

let lista = ['a', 'b', 'c', 'd', 'e'];
let elemento = 'd';
encontrarIndiceElemento(lista,elemento);


// Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) { 
    let nuevaLista = []; 
    let suma1 = 0;
    let suma2 = 0;
    for (let i = 0; i < lista1.length; i++) {
        suma1 += lista1[i];
    } 
    for ( let i =0; i < lista2.length; i++) {
        suma2 += lista2[i];
    }
    nuevaLista.push(suma1,suma2);
    return nuevaLista;    
      
   
}

let x = [1,2,3];
let y = [4,5,6];
let nuevaLista = sumarListas(x,y);
console.log(nuevaLista);

// Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

function cuadradoLista(lista){
    let listaCuadrado = [];
    for(let i= 0; i < lista.length; i++){
        listaCuadrado[i] = lista[i] * lista[i];
        
    }
    return listaCuadrado;
}

let lista5 = [2,4,5];
let listaCuadrado = cuadradoLista(lista5);
console.log(`El cuadrado de la lista ${lista5} es ${listaCuadrado}`);

*/




































