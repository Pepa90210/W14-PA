import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {

  const [name, setName] = useState('')
  const [sweetness, setSweetness] = useState(1)
  const [color, setColor] = useState('red')
  const [seeds, setSeeds] = useState('yes')
  const [validationErrors, setValidationErrors] = useState([]);

  useEffect(() => {
    const errors = [];
    if (name.length < 3) errors.push("Name must be 3 or more characters");
    if (name.length > 20) errors.push("Name must be 20 characters or less");
    if (fruits.map((fruit) => fruit.name).includes(name)) errors.push("Name already exists.");
    if(sweetness < 1 || sweetness > 10) errors.push("Sweetness must be between 1 and 10")
    setValidationErrors(errors);
  }, [name, sweetness]);

  const history = useHistory();
  const onSubmit = (e) => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();
    // Create a new object for the contact us information.
    const fruitInformation = {
      name,
      sweetness,
      color,
      seeds
    };
    // Ideally, we'd persist this information to a database using a RESTful API.
    // For now, though, just log the contact us information to the console.
    console.log(fruitInformation);

    // Reset the form state.
    setName("");
    setSweetness(1);
    setColor("red");
    setSeeds("yes");
    setValidationErrors([]);

    history.push('/')
  };

  return (
    <form
      className="fruit-form"
      onSubmit={onSubmit}
    >
      <h2>Enter a Fruit</h2>
      {validationErrors.length > 0 &&
      <ul className="errors">
        {validationErrors.map((error, i) => (
          <li key={i}>{error}</li>
         ))}
      </ul>
      }
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <label>
        Select a Color
        <select
          onChange={(e) => setColor(e.target.value)}
          value={color}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          onChange={(e) => setSweetness(e.target.value)}
          value={sweetness}
        />
      </label>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          checked={ seeds === 'no' }
          onChange={() => setSeeds('no')}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          checked={ seeds === 'yes' }
          onChange={() => setSeeds('yes')}
        />
        Seeds
      </label>
      <button
        type="submit"
        disabled={validationErrors.length > 0}
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
