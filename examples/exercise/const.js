let order = ""
let total = "0"
 
var burger = prompt("burger :"  + "\n" + "a)" + "chicken"  + "\n" + "b)"+ "beef" + "\n" + "c)" + "meatless" )

switch(burger){
  case "a":
    order += " \n chicken";
    total += 2500
    break;
  case "b":
    order += " \n beef";
    total += 3500
    break;
  case "c":
    order += " \n meatless";
    total += 2000
    break;
}

var drink = prompt("drink :" +"\n" +"a)" +"cola" +  "\n" + "b)" +  "sprite"  +  "\n"  +"c)"  +  "fanta");

switch (drink) {
  case "a":
    order += " \n cola";
    break;
  case "b":
    order += " \n sprite";
    break;
  case "c":
    order += " \n fanta";
    break;
}

var free = prompt("free :" +"\n" +"a)" +"small" +"\n" +"b)" + "medium" +"\n" +"c)" +"large");

switch (free) {
  case "a":
    order += " \n small";
    break;
  case "b":
    order += " \n medium";
    break;
  case "c":
    order += " \n large";
    break;
}

var sauce = prompt("sauce :" + "\n" + "a)" + "cheese" + "\n" + "b)" + "ketchup" + "\n" + "c)" + "bbq")

switch (sauce) {
  case "a":
    order += " \n cheese";
    break;
  case "b":
    order += " \n ketchup";
    break;
  case "c":
    order += " \n bbq";
    break;
}

alert(order + '\n' + 'total')

alert(order)  