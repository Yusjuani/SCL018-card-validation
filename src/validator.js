const validator = {
    isValid(inputValue){ //funcion que toma valor input
        let arrayNumber = inputValue.split(""); //convertir string en array
        //console.log(arrayNumber);
        let reverseNumber= arrayNumber.reverse();// convertir el array en reverso
        //console.log(reverseNumber);
        //return reverseNumber; //retornar el resultado
      
       let addNumber = 0 //variable que
       for(let i = 0; i < reverseNumber.length; i++){
           const number = reverseNumber[i];
           const position = i + 1;

           if(position % 2 === 0){
               const numberMultiplicado = number * 2;
            if(numberMultiplicado >= 10){
                const numeroSeparado = numberMultiplicado.toString().split("");
                const firtNumber = parseInt(numeroSeparado[0]);
                const secondNumber = parseInt(numeroSeparado[1]);
                const amountNumber = firtNumber + secondNumber;
                addNumber += amountNumber;

            }   else{
                addNumber += numberMultiplicado;
            }        
        }else{ 
            addNumber += parseInt(number);

            }
       }
   console.log(addNumber);
   console.log(reverseNumber);

   if(addNumber % 10 === 0){
       return true;
   }else{
       return false;
   }
   
   function maskify(cc) {
    for(let i = 0; i < cc.length; i++){
        
    
   
  
}}}








export default validator;

