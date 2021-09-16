import validator from './validator.js';


    

let validar = document.getElementById("validar");//presionar botton
validar.addEventListener("click", () =>{        // al escuchar click generar funcion

let inputValue= document.getElementById("number").value; //se creo variable, que tomara valor input
if(validator.isValid(inputValue)  === true){       //si esta funcion es %10
document.getElementById("regalo").style.display="block"; //aparezca regalo   
alert("Tarjeta valida");
}else{
    alert("Ingresa un número válido");
}

document.getElementById("number").value = ""; //desaparezca el valor input

validator.isValid(inputValue);// llame funcion de isValid  de validator.js
//console.log(validator.isValid(inputValue));
//console.log(validator.maskify(inputValue));//llamo funcion maskify(tomo ojeto con funcion mas valor)
let mostrarDigitos = document.getElementById("mostrarDigitos");//tomar id de parrafo
mostrarDigitos.innerHTML = "El número de su tarjeta es : " + validator.maskify(inputValue) ;//mostrar js en html

});

