import { useState, useEffect } from 'react';
import Card from './Card.jsx';
import './App.css';

const initialPokemons = [
  'pikachu', 'bulbasaur', 'squirtle', 'charmander', 'pidgey', 'rattata', 
  'snorlax', 'nidorina', 'vulpix', 'jigglypuff', 'zubat', 'oddish', 
  'diglett', 'meowth', 'psyduck', 'mankey', 'abra', 'bellsprout', 
  'geodude', 'voltorb',
];

async function getData(pokemon) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await response.json();
  return data;
}

function shuffle(array) {
  const shuffledArray = array; 
  let currentIndex = shuffledArray.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [shuffledArray[currentIndex], shuffledArray[randomIndex]] = [
      shuffledArray[randomIndex], shuffledArray[currentIndex],
    ];
  }

  return shuffledArray; 
}

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(0);
  const [record, setRecord] = useState(0);
  const [allFalse, setAllFalse] = useState(false);
  const [isLoading, setIsLoading] = useState(true); 

  const updateParent = (state) => {
    if (state === true) {
      setAllFalse(false);
      setCount((prevCount) => prevCount + 1); 
      setPokemons(shuffle(pokemons));
    }
    if (state === false) {
      if(count > record){
        setRecord(count);
      }
      setCount(0); 
      setPokemons(shuffle(pokemons));
      setAllFalse(true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
       const pokemonData = await Promise.all(
        initialPokemons.map((pokemon) => getData(pokemon))
      );
      setPokemons(pokemonData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      
      {isLoading ? (
        <div className='loading'>
          <div className='spinner'></div>
          <p>Carregando cartas...</p>
        </div>
      ) : (<>
        <div className='header'>
        <div>Pokemon Card Game</div>
        <div>Count: {count}</div>
        <div>Record: {record}</div>
      </div>
        <div className='cards'>
          {pokemons.map((pokemon, index) => (
            <Card key={pokemon.name} pokemon={pokemon.name} img={pokemon.sprites.front_default} updateParent={updateParent} allFalse={allFalse} />
          ))}
        </div>
        </>
      )}
    </>
  );
}

export default App;