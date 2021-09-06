import validator from './validator.js';


let validar = document.getElementById("validar");//presionar botton
validar.addEventListener("click", () =>{        // al escuchar click generar funcion
let inputValue= document.getElementById("number").value; //se creo variable, que tomara valor input

validator.isValid(inputValue) // llame funcion de isValid  de validator.js




});
 
