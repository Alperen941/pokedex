import { useState, useEffect } from 'react';
import { fetchPokemonList } from '../api/pokeapi';
import PokemonCard from '../components/PokemonCard';
import PaginationControls from '../components/PaginationControls';
import { Link } from 'react-router-dom';

function PokedexPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPokemon() {
      setLoading(true);
      try {
        const data = await fetchPokemonList(20, page * 20);
        setPokemonList(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadPokemon();
  }, [page]);

  return (
    <div style={{ padding: '20px', width: '100%' }}>
      <h1>Pokédex</h1>
      <Link to="/about">About</Link>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, 200px)',
          justifyContent: 'center',
          gap: '20px'
        }}>
          {pokemonList.map((pokemon, index) => (
            <PokemonCard key={index} name={pokemon.name} />
          ))}
        </div>
      )}
      <PaginationControls
        page={page}
        onPrevious={() => setPage(prev => Math.max(prev - 1, 0))}
        onNext={() => setPage(prev => prev + 1)}
      />
    </div>
  );
}

export default PokedexPage;
