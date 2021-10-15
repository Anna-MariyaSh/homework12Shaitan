let number = +prompt("Put your number");
if(number < 1) {
  console.log('NaN');
}

for(let i = 2; i <= number; i++) {
   if(number % i === 0) {
   console.log(i);
   break;
 }
 console.log(number);
}
