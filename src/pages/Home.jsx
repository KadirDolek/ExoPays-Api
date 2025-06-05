import "./Home.css";
import Searchbar from "../components/Searchbar";
import Tri from "../components/Tri";
import { useState } from "react";
import { Link } from 'react-router-dom';
// petit test

export default function Home({ data }) {
  const [recherche, setRecherche] = useState("");
  const [regionFiltre, setRegionFiltre] = useState("");

const listeFiltre = data
  ? data.filter((pays) => {
      const matchRecherche = pays.name.official.toLowerCase().includes(recherche.toLowerCase());
      const matchRegion = regionFiltre === "" || pays.region === regionFiltre;
      return matchRecherche && matchRegion;
    })
  : [];

  return (
    <>
      <div>
        <div id="bg">
          <div id="gestion">
            <div id="Searchbar">
              <Searchbar recherche={recherche} setRecherche={setRecherche} />
            </div>
            <div>
            </div>
            <div id="Tri">
            <Link to="/favoris">
              <button id="btn-voir-fav">Voir les favoris</button>
            </Link>
              <Tri data={data} regionFiltre={regionFiltre} setRegionFiltre={setRegionFiltre} />
            </div>
          </div>
          <div id="pays">
            {data ? (
            listeFiltre.map((element, index) => (
              <Link to={`/pays/${element.cca3.toLowerCase()}`} key={index} className="carte-link">
                <div id="leMap">
                  <img
                    id="image"
                    src={element.flags.png}
                    alt={`${element.name.official}`}
                  />
                  <p><strong>{element.name.official}</strong></p>
                  <p><strong>Population:</strong>&nbsp;{element.population.toLocaleString("en-EN")}</p>
                  <p><strong>Region:</strong>&nbsp;{element.region}</p>
                  <p><strong>Capital:</strong> &nbsp;{element.capital}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>Chargement des pays...</p>
          )}

          </div>
        </div>
      </div>
    </>
  );
}
