import "./Home.css";
import Searchbar from "../components/Searchbar";
import { useNavigate } from "react-router-dom";

export default function Home({ data }) {
  
  const navigate = useNavigate();

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
              <Searchbar />
            </div>
            <button id="voir-fav-btn" onClick={() => navigate('/favoris')}>Voir les favoris</button>
            <div id="Tri">(tri ici)</div>
          </div>
          <div id="pays">
            {data ? (
              data.map((element, index) => (
                <div
                  id="leMap"
                  key={index}
                  onClick={() => navigate(`/pays/${element.cca3.toLowerCase()}`)}
                  style={{ cursor: "pointer" }} 
                >
                  <img
                    id="image"
                    src={element.flags.png}
                    alt={`Flag of ${element.name.official}`}
                />
                  <p><strong>{element.name.official}</strong></p>
                  <p><strong>Population:</strong>&nbsp;{element.population}</p>
                  <p><strong>Region:</strong>&nbsp;{element.region}</p>
                  <p><strong>Capital:</strong> &nbsp;{element.capital}</p>
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
