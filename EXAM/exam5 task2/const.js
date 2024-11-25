
let price = 1500; 
let sum = 15; 


function TotalDiscount(price, count) {
  let total = price * count; 
  let discount = 0; 

 
  if (total > 20000) {
    discount = 30;
  } else if (total > 10000) {
    discount = 20;
  } else if (total > 5000) {
    discount = 10;
  }

  let discountTotal = total - (total * discount) / 100;
  return discountTotal;
}


let Total = TotalDiscount(price, sum);
console.log("barlygy " + Total + " tg" );

