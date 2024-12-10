// H1 элементінің текстін өзгерту
document.querySelector("h1").textContent = "DOM әлеміне қош келдіңіз!";

// Бірінші параграфтың текстін өзгерту
document.querySelector("p").textContent =
  "JavaScript веб-беттерді интерактивті ете алады.";

// Екінші параграфтың текстін өзгерту
document.querySelectorAll("p")[1].textContent =
  "DOM-ды үйрену - веб-қа апарар алғашқы қадам!";

// "Fun fact" класына сәйкес текстті өзгерту
document.querySelector(".fun-fact").textContent =
  " DOM - Document Object Model дегенді білдіреді.";

// Батырманың текстін өзгерту
document.querySelector("button").textContent = 'Сіздің атыңыз';
