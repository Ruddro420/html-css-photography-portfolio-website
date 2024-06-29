// get calculate button
let sum = document.getElementById('sum').innerHTML;
let minus = document.getElementById('minus').innerHTML;
let mul = document.getElementById('mul').innerHTML;
let divi = document.getElementById('divi').innerHTML;

//console.log(sum);

let firstInput = document.getElementById('first-input').value;
let secondInput = document.getElementById('second-input').value;

let operator; 

document.getElementById('sum').addEventListener('click', function () {
   operator = '+';
})
document.getElementById('minus').addEventListener('click', function () {
   operator = '-';
})




/* document.getElementById('minus').addEventListener('click', function () {
   let result = parseInt(firstInput) - parseInt(secondInput);
   console.log(result);
}) */




document.getElementById('calculate-button').addEventListener('click', function () {


   console.log(operator);

   //console.log(sum);

/* 
   if (sum == '+') {
      console.log('sumhere');
   } else if (minus == '-') {
      console.log('minushere');
   } else if (mul == '*') {
      console.log('mulhere');
   } else if (divi == '/') {
      console.log('divihere');
   } else {
      console.log('error');
   }
 */

   //console.log(typeof(firstInput),secondInput);
})