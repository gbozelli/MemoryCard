import { useState, useEffect } from 'react';
import './Card.css';

function capitalizeFirstLetter(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function Card(props) {
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (props.allFalse === true) {
      setClick(false); 
    }
  }, [props.allFalse]);

  const changeClick = () => {
    if (!click) {
      setClick(true);
      props.updateParent(true); 
    } else {
      setClick(false);
      props.updateParent(false);
    }
  };

  return (
    <div className='poke' onClick={changeClick}>
      <img src={props.img} alt={props.pokemon} />
      <div>{capitalizeFirstLetter(props.pokemon)}</div>
    </div>
  );
}

export default Card;