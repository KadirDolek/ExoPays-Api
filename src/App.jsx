import './App.css'
import  axios  from 'axios'
import Home from './pages/Home'
import { useEffect } from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import PaysDetails from './components/PaysDetails/PaysDetails';





function App() {
      const [data, setData] = useState(null);

      useEffect(() => {
            axios.get("https://restcountries.com/v3.1/all") 
              .then((response) => setData(response.data))
              .catch((error) => console.log(error));


        }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<Home data={data}/>}></Route>
      <Route path="/pays/:countryCode" element={<PaysDetails />} />
    </Routes>

    </>
  )
}

export default App
