// Задание 1

function getSum(a, b) {
  let result = a + b;
  return result;
}
let sum = getSum(102, 103);
 sum = getSum(18, 13);
console.log(sum);

let getSum = (a, b)=> a + b;
let res1 = getSum(16, 8);
res1 = getSum(105, 106);
console.log('res1', res1);

// Задание 2

function getUserData() {
    let userName = prompt("Your name");
         userAge = +prompt("Your age");
    if(userAge >= 30) {
        alert("Hello!" + userName);
    } else {
        alert("Hi!" + userName);
    }
}
getUserData();
    
// Задание 3


const result = Math.pow(7, 2);
console.log(result);