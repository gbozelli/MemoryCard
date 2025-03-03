import { useState } from 'react';
import Card from './Card.jsx';
import './App.css';

const initialPokemons = [
  'pikachu', 'bulbasaur', 'squirtle', 'charmander', 'pidgey', 'rattata', 
  'snorlax', 'nidorina', 'vulpix', 'jigglypuff', 'zubat', 'oddish', 
  'diglett', 'meowth', 'psyduck', 'mankey', 'abra', 'bellsprout', 
  'geodude', 'voltorb',
];

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
  const [pokemons, setPokemons] = useState([
    'pikachu', 'bulbasaur', 'squirtle', 'charmander', 'pidgey', 'rattata', 
    'snorlax', 'nidorina', 'vulpix', 'jigglypuff', 'zubat', 'oddish', 
    'diglett', 'meowth', 'psyduck', 'mankey', 'abra', 'bellsprout', 
    'geodude', 'voltorb',
  ]);
  const [count, setCount] = useState(0);
  const [record, setRecord] = useState(0);
  const [allFalse, setAllFalse] = useState(false);

  const updateParent = (state) => {
    if (state === true) {
      setAllFalse(false);
      setCount((prevCount) => prevCount + 1); // Atualiza o contador
      setPokemons(shuffle(pokemons)); // Embaralha e atualiza o array
    }
    if (state === false) {
      if(count > record){
        setRecord(count);
      }
      setCount(0); 
      setPokemons(shuffle(initialPokemons));
      setAllFalse(true);
    }
  };

  return (
    <>
      <div className='header'>
        <div>Pokemon Card Game</div>
        <div>Count: {count}</div>
        <div>Record: {record}</div>
      </div>
      <div className='cards'>
        {pokemons.map((pokemon) => (
          <Card key={pokemon} pokemon={pokemon} updateParent={updateParent} allFalse={allFalse}/>
        ))}
      </div>
    </>
  );
}

export default App;