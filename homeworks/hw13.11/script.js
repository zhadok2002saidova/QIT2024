//1-tapsyrma
var num = 1;

while (num <= 20) {
  if (num % 2 === 0) {
    num++;
    continue;
  }
  if (num % 3 === 0 && num % 5 === 0) {
    console.log(num + ": FizzBuzz");
  } else if (num % 3 === 0) {
    console.log(num + ": Fizz");
  } else if (num % 5 === 0) {
    console.log(num + ": Buzz");
  } else {
    console.log(num);
  }

  num++;
}

//2-tapsyrma
let score = 5;

do {
  var question1 = prompt("Қазақстанның астанасы қай қала?");
  if (question1 = "Астана") {
    score++;
    break;
  } else {
    alert("Қате жауап");
  }
} while (question1 != "Астана"); 

do {
  var question2 = prompt("Қазақстан қай жылы тәуелсіздігін алды?");
  if (question2 = "1991") {
    score++;
    break;
  } else {
    alert("Қате жауап");
  }
} while (question2 != "1991"); 

do {
  var question3 = prompt("Елімізде қанша облыс бар?");
  if (question3 = "17") {
    score++;
    break;
  } else {
    alert("Қате жауап");
  }
} while (question3 != "17"); 


alert("жинаған ұпайыңыз: " + score);

//3-tapsyrma

var  number= prompt("Бірінші санды енгізіңіз");
var number1 = prompt("Екінші санды енгізіңіз");

var num4 = 1; 
var num7 = 1; 

var num = number;


do {
    if (num % 4 == 0) {
        num4 *= num;
    }
    num++;
} while (num <= number);

num = number;

do {
    if (num % 7 == 0) {
        num7 *= num;
    }
    num++;
} while (num <= number1);


alert("4-ке қалдықсыз бөлінетін санның көбейтіндісі " + num4);
alert("7-ге қалдықсыз бөлінетін санның көбейтіндісі " + num7);
