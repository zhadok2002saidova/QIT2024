let correctPassword = "amjilt_the_best";
let login;

for (let i = 0; i < 5; i++) {
  do {
    login = prompt("Парольді енгізіңіз:");

    if (login == correctPassword) {
      alert("Қош келдіңіз!");
      attempts = 5;
      break;
    } else {
      alert("Қате!");
    }
  } while (attempts < 5);
}

if (login) {
  alert("Too many attempts");
}
