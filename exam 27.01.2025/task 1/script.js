 document.getElementById("fetchDataButton")
 document.addEventListener("click", async () => {
    const message = document.getElementById("message");
    const taskList = document.getElementById("taskList");
    message.textContent = "Деректер алынуда...";
    taskList.innerHTML = "";

try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    );
      if (!response.ok) throw new Error("API қате!");
        const data = await response.json();

        message.textContent = "Деректер сәтті алынды!";
        const randomTask = data[Math.floor(Math.random() * data.length)];
        taskList.innerHTML = `<li>${randomTask.title}</li>`;
      } catch (error) {
        message.textContent = "Қате орын алды: " + error.message;
  }
 });
