import "./Home.css";
import Searchbar from "../components/Searchbar";
import Tri from "../components/Tri";
import { useState } from "react";


export default function Home({ data }) {
  const [recherche, setRecherche] = useState("");

  const listeFiltre = data
    ? data.filter((pays) =>
        pays.name.official.toLowerCase().includes(recherche.toLowerCase())
      ):[];

  return (
    <>
      <div>
        <div id="header">
          <p>Where in the world?</p>
          <button id="darkmode">
            <strong>&#127769;&nbsp;&nbsp;Dark Mode</strong>
          </button>
        </div>
        <div id="bg">
          <div id="gestion">
            <div id="Searchbar">
              <Searchbar recherche={recherche} setRecherche={setRecherche} />
            </div>
            <div id="Tri">
              <Tri data={data} />
            </div>
          </div>
          <div id="pays">
            {data ? (
              listeFiltre.map((element, index) => (
                <div id="leMap" key={index}>
                  <img
                    id="image"
                    src={element.flags.png}
                    alt={`${element.name.official}`}
                  />
                  <p>
                    <strong>{element.name.official}</strong>
                  </p>
                  <p>
                    <strong>Population:</strong>&nbsp;{element.population}
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
