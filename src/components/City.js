import { useRouter } from 'next/router';

export async function getStaticPaths() {
  // Här definierar vi de statiska vägarna vi vill generera.
  return {
    paths: [
      { params: { city: 'stockholm' } },
      { params: { city: 'goteborg' } },
      { params: { city: 'malmo' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Använd params.city för att göra API-anropet till väder-API:t
  const apiKey = process.env.WEATHER_API_KEY;
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=${apiKey}&units=metric`);
  const data = await res.json();

  // Om API-anropet misslyckas, returnera tomt data
  if (!data || data.cod !== 200) {
    return { props: { weather: null } };
  }

  // Returnera väderdata som props
  return { 
    props: { weather: data }, 
    revalidate: 3600, // Uppdatera sidan varje timme
  };
}

function WeatherPage({ weather }) {
  const router = useRouter();

  if (router.isFallback || !weather) {
    return <div>Laddar...</div>;
  }

  return (
    <div>
      <h1>Väder i {weather.name}</h1>
      <p>Temperatur: {weather.main.temp}°C</p>
      <p>Himmel: {weather.weather[0].description}</p>
      {/* Ytterligare väderinformation */}
    </div>
  );
}

export default WeatherPage;