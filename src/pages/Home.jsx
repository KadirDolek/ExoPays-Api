import "./Home.css";
import Searchbar from "../components/Searchbar";
import Tri from "../components/Tri";
import { useState } from "react";


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
            <div id="Tri">
              <Tri data={data} regionFiltre={regionFiltre} setRegionFiltre={setRegionFiltre} />
            </div>
          </div>
          <div id="pays">
            {data ? (
              listeFiltre.map((element, index) => (
                <div id="leMap" key={index}>
                  <img
                    id="image"
                    src={element.flags.svg}
                    alt={`${element.name.official}`}
                  />
                  <p>
                    <strong>{element.name.official}</strong>
                  </p>
                  <p>
                    <strong>Population:</strong>&nbsp;{element.population.toLocaleString("en-EN")}
                  </p>
                  <p>
                    <strong>Region:</strong>&nbsp;{element.region}
                  </p>
                  <p>
                    <strong>Capital:</strong> &nbsp;{element.capital}
                  </p>
                </div>
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
