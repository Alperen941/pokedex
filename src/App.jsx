import { HashRouter, Routes, Route } from 'react-router-dom';
import PokedexPage from './pages/PokedexPage';
import PokemonDetailPage from './pages/PokemonDetailPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PokedexPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
