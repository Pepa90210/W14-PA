import React from 'react'
import { useParams } from 'react-router-dom'

function FruitShow({ fruits }) {
  const { fruitId } = useParams();
  const fruit = fruits.find(fruit => fruit.id === fruitId)
  return (
    <div className="fruit-show">
      <h2>{fruit.name}</h2>
      <h3>{fruit.color}</h3>
      <h3>{fruit.sweetness}</h3>
      <h3>{fruit.seeds}</h3>
    </div>
  );
}

export default FruitShow;
