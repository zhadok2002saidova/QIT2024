


async function getWeather() {
    const city = document.getElementById('city').value.trim(); 
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; 

   
    if (!city) {
        resultDiv.innerHTML = '<p class="error">Қала атауын енгізіңіз!</p>';
        return;
    }


    const url = "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=kk&appid=${apiKey}"

    try {
   
        const response = await fetch(url);

      
        if (!response.ok) {
            throw new Error('Ауа райы деректерін жүктеу мүмкін болмады.');
        }

    
        const data = await response.json();

        const cityName = data.name;
        const temp = data.main.temp;
        const description = data.weather[0].description;


        resultDiv.innerHTML = `
            <p class="success"><strong>Қала:</strong> ${cityName}</p>
            <p class="success"><strong>Температура:</strong> ${temp}°C</p>
            <p class="success"><strong>Ауа райы:</strong> ${description}</p>
        `;
    } catch (error) {

        resultDiv.innerHTML = <p class="error">${error.message}</p>;
    }
}


document.getElementById('getWeather').addEventListener('click', getWeather);