import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchPokemonDetails } from '../api/pokeapi';

function PokemonDetailPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const data = await fetchPokemonDetails(id);
        setPokemon(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadPokemon();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!pokemon) return <p>Pokémon not found.</p>;

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">← Back to Pokedex</Link>
      <h1 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p><strong>Height:</strong> {pokemon.height}</p>
      <p><strong>Weight:</strong> {pokemon.weight}</p>
      <p><strong>Types:</strong> {pokemon.types.map(t => t.type.name).join(', ')}</p>
      <h3>Stats:</h3>
      <ul>
        {pokemon.stats.map(stat => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonDetailPage;
