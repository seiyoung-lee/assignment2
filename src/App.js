import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <AboutPage /> } />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
