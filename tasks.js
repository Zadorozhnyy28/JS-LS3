task 1
alert ('task1');

let red = prompt ("Введите первое число задания 1");
let blue =prompt ("Введите второе число задания 1");

if (red%2!==0 && blue%2!==0) {
  alert( 'Оба числа нечетные' );
} 
if (blue%2!==0 && red%2==0 ) {
    alert( 'Только второе число нечетеое' );
  } 
  if (blue%2==0 && red%2!==0 ) {
    alert( 'Только первое число нечетеое' );
  } 
  
else {
  alert( 'Оба числа четные' ); 
}

alert ('task2');

  let year = prompt('Введите количество дней для задания 2', '');

if (year == 366) {
  alert( 'высокосный' );
} 

if  (year == 365) {
    alert( 'обычный' );
  } 

else {
  alert( 'такого года нет' ); 
}

alert ('task3');

var point = prompt ("Введите первое число для задания 3");
var crew = prompt ("Введите второе число для задания 3");
var game = prompt ("Введите третье число для задания 3");

if ( point > crew && point < game) {alert ( "Первое число является средним числом");  } 
if ( crew > point && crew < game) {alert ( "Второе число является средним числом");   } 
else {alert ("Третье число является средним числом");} 

alert ('task4');

var bat = prompt ("Введите первое число для задания 4");
var eye = prompt ("Введите второе число для задания 4");
var top= prompt ("Введите третье число для задания 4");

if (bat > eye && bat > top) {alert ("Переменная bat является наибольшим числом");}
if (eye > eye && eye > top) {alert ("Переменная eye является наибольшим числом");}
else { alert ("Переменная top является наибольшим числом");}

//task5

// let hour =24;

// if (hour < 18) {
//     greeting = "Good day";
//   } else {
//     greeting = "Good evening";
//   }