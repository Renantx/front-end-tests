document.addEventListener('DOMContentLoaded', getWeatherData);

async function getWeatherData() {
    const apiKey = 'f159b613d12085a5af1479bd0bc21a53'; // Substitua 'SEU_API_KEY' pela sua chave de API da OpenWeatherMap
    const city = 'Rio de Janeiro'; // Substitua 'Nome_da_cidade' pelo nome da cidade que você deseja obter a previsão
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeatherInfo(data);
    } catch (error) {
        console.error('Ocorreu um erro ao obter os dados da API:', error);
    }
}

function displayWeatherInfo(data) {
    const weatherInfoElement = document.getElementById('weather-info');

    const cityName = data.name;
    const temperature = data.main.temp;
    const weatherDescription = data.weather[0].description;

    const weatherInfoHTML = `
    <p><strong>City:</strong> ${cityName}</p>
    <p><strong>Temperature:</strong> ${temperature}°C</p>
    <p><strong>Description:</strong> ${weatherDescription}</p>
  `;

    weatherInfoElement.innerHTML = weatherInfoHTML;
}