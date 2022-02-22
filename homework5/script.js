// Задание 1

// const LOGIN = 'ADMIN';
// const PASSWORD = '1q2w3e';

// const authorize = () => {
//   let userPassword;
//   let userLogin; 
//   let isAuthSuccess = false;
//   let tries = 3;

//   do {
//     userLogin = prompt('Логин:');
//     if(!userLogin) {
//        alert('Введите логин');
//        continue;   
//     }
//     userPassword = prompt('Пароль:');
//     if(!userPassword) {
//        alert('Введите пароль');
//        continue;
//     }
//     if(userPassword === PASSWORD || userLogin === LOGIN) {
//         isAuthSuccess = true
//     } else {
//        tries--;
//       alert('Данные не верны! Осталось попыток:${tries}');
//    }

//    } while (!isAuthSuccess && tries > 0);
//     if (!tries){
//       console.log('Доступ запрещен!');
//       return;
//     }
//    alert('Welcome!');
// }
// authorize ();


// Задание 2

function getPrimes(start, end){

    nextPrime:
    for (let i = start = 2; i <= end; i++) { 
      for (let j = 2; j < i; j++) { 
        if (i % j == 0) continue nextPrime; 
      }

      console.log( i ); 
    }
   }
      console.log(getPrimes(1, 260));