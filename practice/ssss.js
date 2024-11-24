// sandardy kosu

function FindNum() {
   let num = 0; 
   for (let i = 1; i <= 100; i++) {
     num += i;
   }
   return num ;
}

console.log("1 den 100 ge deyingi sandar kosyndysy" , FindNum());


// sandardy keri sanau

let countSum = +prompt("san engiz");

function num(number) {
    for (let i = number; i >= 1; i--) console.log(i) ;
}

console.log(num(countSum));   


//ortasha man tabu

let sum = 0;
function calculator() {
  for (let i = 1; i <= 5; i++) {
    let num = Number(prompt("5 ке дейінгі санды енгізіңіз"));
    sum += num ;
  }
  alert("Орташа мән: " + sum / 5);
}
calculator();


// tak nemese zhup 

let number = prompt("Сан енгізіңіз:");

function EvenOdd(num) {
  if (num % 2 == 0) {
    return " жұп сан .";
  } else {
    return "тақ сан .";
  }
}
console.log(EvenOdd(number));


// factorial tabu

function calculateFactorial() {
  let num = Number(prompt("Санды енгізіңіз:"));
  let factorial = 1;

  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }

  alert("енгізген санның факториалы " + factorial);
}

calculateFactorial();
