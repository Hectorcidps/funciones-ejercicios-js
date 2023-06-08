// Ejercicio 1 funcion general
function cuadradoDeUnNumero (num1, num2 ){
    let cuadrado = num1 * num2; 
    return " El cuadrado de este número es " + cuadrado;   
}

console.log(cuadradoDeUnNumero(3, 3)); 


//Ejercicio 1.1 flecha 

const cuadradoDeUnNumero2 = (nume1, nume2) =>{
    let cuadrado2 = nume1 * nume2;
    return "El cuadrado de este numero es = " + cuadrado2;
}
console.log(cuadradoDeUnNumero2(7,7)); 

// ==========================

//Ejercicio 2  Escribir un código que convierta de grados celsius a grados farenheit

function gradosFarenheit (gradosCelsius){
    let convertir = (gradosCelsius * 2.5) + 32; 
    return " La conversion de ºC a ºF es " + convertir;
}
console.log(gradosFarenheit(40)); 

// Ejercicio 2.2  Flecha

const gradosFarenFlechas = (gradosCelsius2) =>{
    let  convertir2 = (gradosCelsius2 * 3.8) + 32;
    return " La conversión de ºC a ºF es " + convertir2; 
}
console.log(gradosFarenFlechas(60)); 

// ==========================


// Ejercicio 3  Realizar una función que calcule el valor de Voltaje, recibiendo como entradas o parámetros Resistencia y Corriente.

function voltaje1 (Resistencia, Corriente){
    let calcular3 = (Resistencia * Corriente);
    return " El voltaje es igual a " + calcular3; 
 }
 console.log(voltaje1(24, 19)); 

 //Ejercicio 3.3 Flecha

 const voltajeFlecha = (Ohms, Amperes) => {
    let calcular1 = (Ohms * Amperes);
    return " El volts es igual a " + calcular1; 
 }
 console.log (voltajeFlecha(1.5, 3.2)); 


// ==========================

// Ejercicio 4 Elaborar una función que calcule el volumen de un cubo, recibiendo como dato de entrada Lado.

function volumenCubo (lado1, lado2, lado3){
    let calcula = (lado1 + lado2 + lado3); 
    return " El volumen de un lado del cubo es " + calcula; 
}
console.log(volumenCubo(5, 6 , 7)); 

// Ejercicio 4.4 Funcion Flecha 
const volumenFlecha = (L1, L2, L3) =>{
    let sumarLados = (L1 + L2 + L3);
    return " El volumen es " + sumarLados; 
}
console.log(volumenFlecha(26, 30, 47)); 


// ==========================


//5. Calcular el área de un triángulo

function calculaArea (Base, Altura){
    let areaTriangulo = (Base * Altura) /2; 
    return " EL area es " +areaTriangulo; 
}
console.log(calculaArea (23, 10)); 

// Ejercicio 5.5 funcion flecha

const calcularArea2 = (base, altura) => {
    let area = (base * altura) / 2;
    return " El area del triangulo es " + area ;
  };
  console.log(calcularArea2 (18,19)); 

// ==========================

//6. Calcular el volumen de una esfera = 4/3 π r³

function calcularVolumenEsfera (radio){
    let volumenEsfera = (4/3) * 3.1416 * radio; 
    return " El volumen de la esfera es = " + volumenEsfera;
}
console.log(calcularVolumenEsfera(6));


// Ejercicio 6.6 Funcion Flecha 

const calcularVolumenEsfera1 = (radio) => {
    let volumenEsfera2 = (4/3) * 3.1416 * radio; 
    return "El volumen de la esfera es = " + volumenEsfera2;
  };
  
  console.log(calcularVolumenEsfera1(9));


// ==========================

//7. Convertir una cadena de texto a mayúsculas, usando el método .toUpperCase()

 function textoMayusculas(texto) {
    return texto.toUpperCase();
}
console.log(textoMayusculas("Hola que Hace")); 

// 7.7 Funcion flecha 
  
const mayusculasFlechas = texto => texto.toUpperCase(); 
    console.log(mayusculasFlechas("nada aqui aburrido")); 