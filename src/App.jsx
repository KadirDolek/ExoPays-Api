import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PaysDetails from './components/PaysDetails/PaysDetails'
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pays/:countryCode" element={<PaysDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
