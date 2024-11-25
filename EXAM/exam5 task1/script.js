let num1 = Number(prompt("sandy engiziniz: "));
let num2 = Number(prompt("ekinshi sandy engiziniz:"));
let mark = prompt("+, -, /, *,");

switch (mark) {
  case "+":
    alert(num1 + num2);
    break;
  case "-":
    alert(num1 - num2);
    break;
  case "*":
    alert(num1 * num2);
    break;
  case "/":
    alert(num1 / num2);
    break;
}
