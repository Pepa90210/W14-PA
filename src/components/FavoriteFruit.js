import { useFavFruit } from "../context/FavFruitContext";
import { NavLink } from 'react-router-dom'

const FavoriteFruit = ({ fruits }) => {
  const {favFruitId, setFavFruitId} = useFavFruit()
  return (
    <div className="fav-fruit">
      <h2>Favorite Fruit</h2>
      <NavLink to={`/fruits/${favFruitId}`}>{fruits[favFruitId - 1].name}</NavLink>
    </div>
  );
}

export default FavoriteFruit;
