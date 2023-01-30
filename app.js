let number1;
let number2;
let number3;
let arrayOfNumbers;
let copyArray;

alert('Bienvenido a la práctica número 1 de lógica de programación')

number1 = Number (prompt('Ingrese el número 1'));
number1 = validateNumber(number1);

number2 = Number (prompt('Ingrese el número 2'));
number2 = validateNumber(number2);

number3 = Number (prompt('Ingrese el número 3'));
number3 = validateNumber(number3);

arrayOfNumbers =[number1, number2,number3];

copyArray = structuredClone (arrayOfNumbers);

if (arrayOfNumbers[0] === arrayOfNumbers [1]  && arrayOfNumbers [1] === arrayOfNumbers[2]){
    alert ("Los números son iguales y esta es la única salida ["+arrayOfNumbers+"]");
}else{
    arrayOfNumbers.sort();
    alert("Los números ["+copyArray+"] de Mayor a menor: ["+arrayOfNumbers.reverse()+"] Y los números de menor a menor es ["+arrayOfNumbers.sort()+"]");
}


function validateNumber(num){
    if (typeof(num) === 'number' && !Number.isNaN(num)){
        return num;
    }else {
        num = Number(prompt("Ingresó un dato no valido como número, por favor vuelva e ingrese un número: "))
        return validateNumber(num);
    }
}