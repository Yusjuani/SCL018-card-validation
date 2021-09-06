const validator = {
    isValid(inputValue){ //funcion que toma valor input
        let arrayNumber = inputValue.split(""); //convertir string en array
        console.log(arrayNumber);
        let reverseNumber= arrayNumber.reverse();// convertir el array en reverso
        console.log(reverseNumber);
        return reverseNumber; //retornar el resultado
        

}}






export default validator;

