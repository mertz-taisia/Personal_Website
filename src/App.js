import './App.css';
import MainPage from './components/MainPage';
import { Helmet } from 'react-helmet';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Cua from './components/Cua';
import EcoFarms from './components/EcoFarms';
import Bah from './components/Bah';
import USCMakers from './components/USCMakers';
import Pltw from './components/Pltw';
import Paintings from './components/Paintings';
import Sculptures from './components/Sculptures';
import MixedMedia from './components/MixedMedia';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cua" element={<Cua />} />
            <Route path="/ecoFarms" element={<EcoFarms />} />
            <Route path="/bah" element={<Bah />} />
            <Route path="/uscmakers" element={<USCMakers />} />
            <Route path="/pltw" element={<Pltw />} />
            <Route path="/paintings" element={<Paintings />} />
            <Route path="/sculptures" element={<Sculptures />} />
            <Route path="/mixedMedia" element={<MixedMedia />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
