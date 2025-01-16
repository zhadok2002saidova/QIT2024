
function displayUsers(users) {
  const container = document.getElementById("users-container");
  users.forEach((user) => {
    const userBlock = document.createElement("div");
    userBlock.className = "user-block";
    userBlock.innerHTML = `
            <p>Қолданушы аты: ${user.name}</p>
            <p>Email: ${user.email}</p>
        `;
    container.appendChild(userBlock);
  });
}


function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Деректерді алу кезінде қате орын алды.");
      }
      return response.json();
    })
    .then((users) => displayUsers(users))
    .catch((error) => console.error("Қате орын алды!", error));
}

fetchUsers();
