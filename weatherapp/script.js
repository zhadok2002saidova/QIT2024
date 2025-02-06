const apiKey = "fb2cff02b71168e9f0c68fd3f83d168a";

function updateWeather() {
  let city = document.getElementById("search").value.trim();

  if (!city) {
    alert("Введите название города!");п
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ru`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new error("Город не найден !");
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("cityName").innerHTML = data.name;
      document.getElementById(
        "temperature"
      ).innerHTML = `Температура: ${data.main.temp}°C`;
      document.getElementById(
        "description"
      ).innerHTML = `Описание: ${data.weather[0].description}`;
      document.getElementById(
        "humidity"
      ).innerHTML = `Влажность: ${data.main.humidity}%`;
      document.getElementById(
        "windSpeed"
      ).innerHTML = `Скорость ветра: ${data.wind.speed} м/с`;
    })
    .catch((error) => {
      console.error("Ошибка:", error);
      alert(
        "Ошибка загрузки данных!"
      );
    });
}

document.getElementById("submit").addEventListener("click", updateWeather);
