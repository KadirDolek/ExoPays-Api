import './App.css'
import  axios  from 'axios'
import Home from './pages/Home'
import { useEffect } from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'






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
    </Routes>

    </>
  )
}

export default App
