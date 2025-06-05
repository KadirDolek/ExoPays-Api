import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

export default function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        // Juste un échantillon pour ne pas surcharger la page
        const sample = response.data.slice(0, 10);
        setCountries(sample);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home">
      <h1>Liste des pays (extrait)</h1>
      <ul>
        {countries.map(country => (
          <li key={country.cca3}>
            <Link to={`/pays/${country.cca3.toLowerCase()}`}>
              {country.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
