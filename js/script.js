let number = +prompt("Put your number");
if(number < 1 || isNaN(number)) {
  console.log('NaN');
} else {
  for(let i = 2; i <= number; i++) {
     if(number % i === 0) {
     console.log(i);
     break;
   }
 }
}
