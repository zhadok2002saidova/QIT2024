
if (!localStorage.score) {
  localStorage.score = 0;
}


function checkAnswer(answer, nextPage) {
  if (answer == "correct") {
    localStorage.score = Number(localStorage.score) + 1;
  }
  location.href = nextPage;
}


function restartQuiz() {
  localStorage.score = 0;
  location.href = "index.html";
}


function showScore() {
  document.getElementById("score").textContent = localStorage.score || 0;
}
