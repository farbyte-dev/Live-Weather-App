const API_KEY = "e3c5b9c9a0fbb03b668fc0d1342eb729";

async function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("result");

  result.innerHTML = "⏳ Loading...";

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},PK&appid=${API_KEY}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      result.innerHTML = "❌ City not found!";
      return;
    }

    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const humidity = data.main.humidity;

    result.innerHTML = `
      <div class="weather-box">
        <h2>${city}</h2>
        <p>🌡 Temperature: ${temp}°C</p>
        <p>☁ Weather: ${weather}</p>
        <p>💧 Humidity: ${humidity}%</p>
      </div>
    `;

  } catch (error) {
    result.innerHTML = "⚠ Error fetching data";
    console.error(error);
  }
}
