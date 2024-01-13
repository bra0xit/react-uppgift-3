import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import styles from '../../app/page.module.css';
import Footer from '../../components/Footer';
import JacketSuggestion from '../../components/JacketSuggestion';
import RoundingButton from '../../components/RoundingButton';

export async function getStaticPaths() {
  // Definierar de statiska vägarna vi vill generera

  return {
    paths: [
      { params: { city: 'stockholm' } },
      { params: { city: 'paris' } },
      { params: { city: 'london' } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const apiKey = process.env.WEATHER_API_KEY;
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=75b313b5633ec93ab09601b0af1d4a68&units=metric`);
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
  
  const [temperature, setTemperature] = useState(weather.main.temp);

  // Funktion för att avrunda temp
  const roundTemperature = () => {
    setTemperature(Math.round(temperature));
  };

  if (router.isFallback || !weather) {
    return <div>Laddar...</div>;
  }

  return (
    <Layout>
          <main className={styles.citypage}>
            <Card title={`Väder i ${weather.name}`} description={`Temperatur: ${temperature}°C`} />
            <RoundingButton onClick={roundTemperature} />
            <JacketSuggestion temp={temperature} />
          </main>
    </Layout>
  );
}

export default WeatherPage;