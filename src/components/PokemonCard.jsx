import { Link } from 'react-router-dom';

function PokemonCard({ name }) {
  return (
    <Link 
      to={`/pokemon/${name}`} 
      style={{ 
        textDecoration: 'none', 
        color: 'black'
      }}
    >
      <div style={{
        width: '200px',
        height: '250px',
        border: '1px solid #ddd',
        padding: '10px',
        borderRadius: '8px',
        textAlign: 'center',
        backgroundColor: '#fff',
        transition: 'transform 0.2s', // Smooth animation på hover
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        <img 
          src={`https://img.pokemondb.net/sprites/home/normal/${name}.png`} 
          alt={name} 
          style={{ width: '100px', height: '100px', objectFit: 'contain' }}
        />
        <h3 style={{ textTransform: 'capitalize', marginTop: '10px' }}>{name}</h3>
      </div>
    </Link>
  );
}

export default PokemonCard;
