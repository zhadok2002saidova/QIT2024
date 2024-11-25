
let hideNumber = 88; 
let attempts = 0; 


let guess = 0; 
while (guess != hideNumber) {
  guess = hideNumber + (prompt("san engiziniz 1-den 100ge deyin:")); 
  attempts++; 

  
  if (hideNumber - guess <= 5 && hideNumber - guess > 0) {
    console.log("sal zhogary");
  } else if (hideNumber - guess > 0 && hideNumber - guess <= 5) {
    console.log("sal tomen");
  } else if (guess < hideNumber) {
    console.log("sal zhogary");
  } else if (guess > hideNumber) {
    console.log("sal tomen");
  }
}


console.log("siz zhasyrylgan sandy taptynyz " + hideNumber );
console.log(attempts + " areket zhasaldy ");



