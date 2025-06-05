import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Favoris.css';
import '../Home.css'; // On réutilise le CSS de Home

export default function Favoris() {
  const [favoris, setFavoris] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem('favoris');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // On filtre les pays valides (avec flags et name)
        const cleaned = parsed.filter(p =>
          p && p.flags && p.flags.png && p.name && p.name.official
        );
        setFavoris(cleaned);
      } catch (e) {
        console.error("Erreur de parsing des favoris", e);
        setFavoris([]);
      }
    }
  }, []);

  if (favoris.length === 0) {
    return <p style={{ padding: '2rem' }}>Aucun pays en favori</p>;
  }

  return (
    <div id="bg">
    <div id='bloc-txt'>
      <h1 style={{ padding: '1rem' }}>Mes pays favoris</h1>
      <button id='acceuil-btn' onClick={() => navigate('/')}>Retour à l'accueil</button>
    </div>
      <div id="pays">
        {favoris.map((element, index) => (
          <div
            id="leMap"
            key={index}
            onClick={() => navigate(`/pays/${element.cca3.toLowerCase()}`)}
            style={{ cursor: "pointer" }}
          >
            <img
              id="image"
              src={element.flags.png}
              alt={`Drapeau de ${element.name.official}`}
            />
            <p><strong>{element.name.official}</strong></p>
            <p><strong>Population:</strong>&nbsp;{element.population}</p>
            <p><strong>Region:</strong>&nbsp;{element.region}</p>
            <p><strong>Capital:</strong> &nbsp;{element.capital}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
