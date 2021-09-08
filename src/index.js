import validator from './validator.js';


let validar = document.getElementById("validar");//presionar botton
validar.addEventListener("click", () =>{        // al escuchar click generar funcion
let inputValue= document.getElementById("number").value; //se creo variable, que tomara valor input
if(validator.isValid(inputValue)  === false){       //si esta funcion es %10
document.getElementById("regalo").style.display="block"; //aparezca regalo
    
}
validator.isValid(inputValue) // llame funcion de isValid  de validator.js
console.log(validator.isValid(inputValue));

//aparezca regalo



});
 
