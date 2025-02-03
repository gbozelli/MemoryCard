import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

async function getData(pokemon) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`)
  const data = await response.json();
  return data;
}

function getImg(data){
  return data.img;
}

function getName(data){
  return data.name;
}

function App() {
  const pokemon = 'pikachu';
  const data = getData(pokemon);
  console.log(getName(data));

  return (
    <>
     
    </>
  )
}

export default App
