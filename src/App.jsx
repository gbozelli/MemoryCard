import { useState , useEffect } from 'react'
import './App.css'

async function getData(pokemon) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await response.json();
  return data;
}

function getImg(data){
  return data.sprites.front_default;
}

function getName(data){
  return data.name;
}

function App() {
  const [pokemon, setPokemon] = useState('pikachu');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(pokemon);
      console.log(getImg(data));
    };

    fetchData();
  }, []);

  return (
    <>
     
    </>
  )
}

export default App
