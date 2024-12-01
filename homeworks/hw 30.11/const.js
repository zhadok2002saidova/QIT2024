//1 tapsyrma
const numbers = [12, 45, 55, 70, 89, 30, 60];

const result = numbers
  .filter((number) => number >= 50) 
  .map((number) => number * 2); 

console.log(result); 



//2 tapsyrma
const numbers = [10, 20, 30];

numbers.push(40, 50);

let num = 0;
numbers.forEach(number => {
  num += number;
}
);
console.log(numbers); 
console.log("Қосынды:", num);    



//3 tapsyrma
const numbers = [20, 30, 40, 50, 60];

const result = numbers
  .map(number => number * 3)       
  .filter(number => number <= 100); 

console.log(result); 
