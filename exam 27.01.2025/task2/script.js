const cityList = document.getElementById("cityList");
const searchInput = document.getElementById("searchInput");
const errorDiv = document.getElementById("error");

function searchCity() {
  const query = searchInput.value.toLowerCase();
  const items = [cityList.children];
  let found = false;

  items.forEach((item) => {
    const match = item.textContent.toLowerCase().includes(query);
    item.style.display = match ? "" : "none";
    if (match) found = true;
  });

  errorDiv.textContent = found ? "" : "Қала табылмады.";
}

document.getElementById("searchButton")
document.addEventListener("click", searchCity);

