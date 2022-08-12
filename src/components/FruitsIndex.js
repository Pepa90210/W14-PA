import { Link } from 'react-router-dom'

const indexStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
}

function FruitsIndex({ fruits }) {
  return (
    <div className="fruits-index" style={indexStyle}>
      <h2>Fruits Index</h2>
      {fruits.map((fruit) => (
        <Link to={`/fruits/${fruit.id}`} key={fruit.id}>{fruit.name}</Link>
      ))}
    </div>
  )
}

export default FruitsIndex;
