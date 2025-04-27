import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div style={{ padding: '20px' }}>
      <Link to="/">← Back to Pokedex</Link>
      <h1>About This App</h1>
      <p>This is a simple app showing information for pokemons, built with react. All information are from pokeapi</p>
    </div>
  );
}

export default AboutPage;
