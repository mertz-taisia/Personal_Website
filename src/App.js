import './App.css';
import MainPage from './components/MainPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import USCMakers from './components/USCMakers';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/uscmakers" element={<USCMakers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
