// Определяем базовое число
var currentNumber = 2;

//Продолжаем функцию c циклом до тех пор пока количество требуемых для отображения чисел не достигнет нуля 
function simple_number(n) {
    while(n != 0) {
        if(isNatural(currentNumber)) {
            console.log(currentNumber);
            n--;  
        } 
        currentNumber++;
    }
}


// Определяем функцию которая проверяет натурайное ли число или нет
function isNatural(number) {
    for (var i = 2; i <= number/2; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

console.time();
console.log(simple_number(process.argv[2]));
console.timeEnd();