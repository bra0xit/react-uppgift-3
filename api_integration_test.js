const apiKey = process.env.WEATHER_API_KEY; // Replace with your actual API key
const city = 'stockholm'; // Example city

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=75b313b5633ec93ab09601b0af1d4a68&units=metric`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));


// fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=75b313b5633ec93ab09601b0af1d4a68`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));