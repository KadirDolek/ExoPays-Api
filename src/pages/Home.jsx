import './Home.css'
import Searchbar from '../components/Searchbar'

export default function Home({data}){



    return(

        <>
            <div>
                <div id='header'>
                    <p>Where in the world?</p>
                    <button id='darkmode'><strong>&#127769;&nbsp;&nbsp;Dark Mode</strong></button>
                </div>
                <div id='gestion'>
                    <div id='Searchbar'>
                        <Searchbar/>
                    </div>
                    <div id='Tri'>
                        (tri ici)
                    </div>
                </div>
                <div id='pays'>
                {data ? (
                    data.map((element, index) => (
                    <div id='leMap' key={index}>
                        <img id='image' src={element.flags.png} alt={`Flag of ${element.name.official}`} />
                        <p><strong>{element.name.official}</strong></p>
                        <p>Population:&nbsp;{element.population}</p>
                        <p>Region:&nbsp;{element.region}</p>
                        <p>Capital: &nbsp;{element.capital}</p>
                    </div>
                    ))
                ) : (
                    <p>Chargement des pays...</p>
                )}
                </div>

            </div>
        
        </>
    )
}