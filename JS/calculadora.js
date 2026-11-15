
  


//escribimos la función pra escribir

function escribir(valor) 

{
    const pantalla = document.getElementById("pantalla");

    if (pantalla.value === "0" || pantalla.value === "") {
        pantalla.value = valor;
    } else {
        pantalla.value += valor;
    } 

    
}

//funcion para sumar 

function sumar() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value += "+";
}

//funcion para restar

function restar() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value += "-";
}

//funcion para multiplicar

function multiplicar() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value += "*";
}

//funcion para dividir

function dividir() {
    const pantalla = document.getElementById("pantalla");
    pantalla.value += "/";
}



//funcion para calcular el resultado final

function calcularResultado() {
    const pantalla = document.getElementById("pantalla");

    try {
        pantalla.value = eval(pantalla.value);
    } catch (error) {
        pantalla.value = "Error";
    }

}

alert("ejecutando calculadora.js");




//funcion para borrar

function borrarPantalla() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "0";
}