import React from 'react'
import { useParams } from 'react-router-dom'

function FruitShow({ fruits }) {
  const params = useParams()
  const { fruitId } = params;
  const fruit = fruits[fruitId - 1];
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
