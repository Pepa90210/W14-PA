import { useFavFruit } from "../context/FavFruitContext";
import { NavLink } from 'react-router-dom'

const FavoriteFruit = ({ fruits }) => {
  const {favFruitId, setFavFruitId} = useFavFruit();
  const favFruit = fruits.find(fruit => favFruitId === fruit.id)
  return (
    <div className="fav-fruit">
      <h2>Favorite Fruit</h2>
      <NavLink to={`/fruits/${favFruitId}`}>{favFruit.name}</NavLink>
    </div>
  );
}

export default FavoriteFruit;
