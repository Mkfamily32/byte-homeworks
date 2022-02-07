// Задание 1

let number1 = Number(prompt(`Введите число 1`));
let number2 = Number(prompt(`Введите число 2`));

if (number1 > number2) {
    alert(`Число ${number1} больше, чем число ${number2}`);

} else if (number1 < number2) {
    alert(`Число ${number1} меньше, чем число ${number2}`);
} else {
    alert("Числа равны");
} 


// Задание 2

const a = Number(prompt("Введите первое число"));
const action = prompt("Enter action (+, -, * or /)");
const b = Number(prompt("Введите второе число"));
let result;

switch (action) {
   case "+":
         result = a + b;
         break;

    case "-":
         result = a - b;
         break;

    case "*":
         result = a * b;
         break;

    case "/":
         result = a / b;
         break;

    default:
         result = "некорректная операция";
}
alert(result);


// Задание 3

const userAge = Number(prompt("Сколько вам лет?"));
if ((userAge >=12 && userAge < 18) || (userAge >=60 && userAge < 80)){
    const isAdults = confirm ("Вам родители разрешили?");
    if (isAdults){
        alert("Вход разрешен");
    }else{
        alert("Вход запрещен");
    }
}else if (userAge < 12 || userAge >= 80){
    alert("Вход запрещен");
}else{
    alert("Вход разрешен");
}