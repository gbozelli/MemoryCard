import { useState , useEffect } from 'react'
import './Card.css'

function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

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

function Card(props) {
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [click, setClick] = useState(false);
  const updateParent = props.updateParent;
  
  useEffect(() => {
  if (props.allFalse === true) {
    setClick(false);
  }
}, [props.allFalse]);

  const changeClick = () => {
    if(click===false){
      setClick(true);
      updateParent(true);
    }
    if(click===true){
      setClick(false);
      updateParent(false);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(props.pokemon);
      setImg(getImg(data));
      setName(getName(data));
    };

    fetchData();
  }, []);

  return (
    <div className='poke' onClick={changeClick}>
      <img src={img}/>
      <div>{capitalizeFirstLetter(name)}</div>
    </div>
  )
}

export default Card
