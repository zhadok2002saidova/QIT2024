let number = prompt("Сан енгізіңіз:");

function EvenOdd(num) {
  if (num % 2 == 0) {
    return " жұп сан .";
  } else {
    return "тақ сан .";
  }
}

console.log(EvenOdd(number));
