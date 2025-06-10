import './App.css'
import  axios  from 'axios'
import Home from './pages/Home'
import { useEffect } from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import PaysDetails from './components/PaysDetails/PaysDetails';
import Favoris from './pages/Favoris/Favoris'






function App() {
      const [data, setData] = useState(null);

      useEffect(() => {
            axios.get("https://restcountries.com/v3.1/all?fields=name,cca3,flags,population,region,subregion,capital,currencies,languages,borders") 
              .then((response) => setData(response.data))
              .catch((error) => console.log(error));
        }, []);

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<Home data={data}/>}/>
          <Route path="pays/:countryCode" element={<PaysDetails />} />
          <Route path='favoris' element={<Favoris />} />
      </Route>
    </Routes>

    </>
  )
}

export default App
