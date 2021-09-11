const validator = {//objeto
    isValid(inputValue){ //funcion que toma valor input
        let arrayNumber = inputValue.split(""); //convertir string en array
        //console.log(arrayNumber);
        let reverseNumber= arrayNumber.reverse();// convertir el array en reverso
        //console.log(reverseNumber);
        //return reverseNumber; //retornar el resultado
      
       let addNumber = 0 
       for(let i = 0; i<reverseNumber.length; i++){
           if(i % 2 === 1){
               let multiplicacionNumber = reverseNumber[i]*2;
               if(multiplicacionNumber >= 10){
                multiplicacionNumber = multiplicacionNumber-9;
                   addNumber+= multiplicacionNumber;
               }
           }
       }
       //variable que
       /*for(let i = 0; i < reverseNumber.length; i++){//recorrer los numeros
           const number = reverseNumber[i];
           const position = i + 1; //defino position para que me tome los pares

           if(position % 2 === 0){  //numero par
               const numberMultiplicado = number * 2;//multiplicarlo por 2
            if(numberMultiplicado >= 10){ // si es mayor o igual a 10
                const numeroSeparado = numberMultiplicado.toString().split(""); //pasarlo a string y despues convertirlo a array
                const firtNumber = parseInt(numeroSeparado[0]);//pasarlos a numeros
                const secondNumber = parseInt(numeroSeparado[1]);
                const amountNumber = firtNumber + secondNumber;// sumarlos 
                addNumber += amountNumber;

            }   else{
                addNumber += numberMultiplicado;
            }        
        }else{ 
            addNumber += parseInt(number);

            }
       }*/
   console.log(addNumber);
   console.log(reverseNumber);

   if(addNumber % 10 === 0){
       return true;
   }else{
       return false;
   }
},
  //maskify

     maskify(inputValue){
     const numeroInvertido = inputValue.split("").reverse(); //tomo el input original y convierto en array lo reverso
     console.log(numeroInvertido);

     let inputTarjeta = "";//tomara los valores
     for(let i = 0; i < numeroInvertido.length; i++){
         if(i < 4){
            inputTarjeta += numeroInvertido[i]
             
         }else{
             inputTarjeta += "#"
         }
         
     }
     const numberMaskify = inputTarjeta.split("").reverse().join("");
     return numberMaskify;
    }
     
}        
    


export default validator;

//dentro de un objeto tengo 2 funciones.}
