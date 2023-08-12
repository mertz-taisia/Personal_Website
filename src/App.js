import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import USCMakers from './components/USCMakers';
import Pltw from './components/Pltw';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/uscmakers" element={<USCMakers />} />
            <Route path="/pltw" element={<Pltw />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
