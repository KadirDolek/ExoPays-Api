import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './PaysDetails.css';
import axios from 'axios';


export default function PaysDetails() {
    const { countryCode } = useParams();
    const [country, setCountry] = useState(null);
    const navigate = useNavigate();
    const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const found = response.data.find(
          c => c.cca3.toLowerCase() === countryCode.toLowerCase()
        );
        setCountry(found);
      })
      .catch(error => {
        console.error(error);
      });
  }, [countryCode]);

  if (!country) return <p>Chargement...</p>;

  const getLanguages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
  const getCurrencies = country.currencies
    ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(', ')
    : 'N/A';

  return (
    <div className="pays-details">
      <div className="pays-wrapper">
        <div className="left-column">
          <img src={country.flags.svg} alt={`Drapeau de ${country.name.common}`} />
          <h2>{country.name.common}</h2>
          <h4>{country.name.official}</h4>
          <button className="back-button" onClick={() => navigate('/')}> Retour </button>
          {/* le bouton favoris */}
          
            <button
                className="favoris"
                onClick={() => {
                    const favoris = JSON.parse(localStorage.getItem('favoris')) || [];

                    const existe = favoris.some(f => f.cca3 === country.cca3);
                    if (!existe) {
                    favoris.push(country); 
                    localStorage.setItem('favoris', JSON.stringify(favoris));
                    setMessage(`${country.name.common} ajouté aux favoris !`);
                    } else {
                    setMessage(`${country.name.common} est déjà dans les favoris.`);
                    }

                    // Efface le message après 3 secondes :
                    setTimeout(() => setMessage(''), 3000);
                }}
                >
                Ajouter aux favoris
                </button>
                {message && <p className="notif">{message}</p>}
        
        </div>

        <div className="right-column">
          <div className="info-block">
            <strong>Capitale :</strong> <span>{country.capital ? country.capital[0] : 'N/A'}</span>
          </div>
          <div className="info-block">
            <strong>Population :</strong> <span>{country.population.toLocaleString()}</span>
          </div>
          <div className="info-block">
            <strong>Région :</strong> <span>{country.region}</span>
          </div>
          <div className="info-block">
            <strong>Sous-région :</strong> <span>{country.subregion || 'N/A'}</span>
          </div>
          <div className="info-block">
            <strong>Langues :</strong> <span>{getLanguages}</span>
          </div>
          <div className="info-block">
            <strong>Monnaie :</strong> <span>{getCurrencies}</span>
          </div>
          <div className="info-block">
            <strong>Domaine :</strong> <span>{country.tld ? country.tld.join(', ') : 'N/A'}</span>
          </div>
          <div className="info-block">
            <strong>Frontaliers :</strong>
            <span>
              {country.borders ? (
                country.borders.map(border => (
                  <button className='frontaliers-btn'
                    key={border}
                    onClick={() => navigate(`/pays/${border.toLowerCase()}`)}
                  >
                    {border}
                  </button>
                ))
              ) : (
                'Aucun'
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

