import Card from "../Card/Card";
import styles from "./favorites.module.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFav, orderCards, filterCards } from "../../redux/actions/actions";
import { useState } from "react";

const Favorites = () => {
    const {divFondo, selectMenu, selectC} = styles;
    const dispatch = useDispatch();
    const myFavorites = useSelector((state) => state.myFavorites);
    const [aux,setAux] = useState(false);
    const onClose = (id) => {
      dispatch(removeFav(id));
    }

    const handleOrder = (event) => {
      const order = event.target.value;
      dispatch(orderCards(order));
      setAux(!aux);
    };
    
    const handleFilter = (event) => {
      const gender = event.target.value;
      dispatch(filterCards(gender));
      setAux(!aux);
    };

  return (
    <div className={divFondo}>
            <div className={selectMenu}>
        <select className={selectC} onChange={handleOrder}>
          <option value="" selected disabled>Order</option>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select className={selectC} onChange={handleFilter}>
        <option value="" selected disabled>Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      {myFavorites.map( ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
};

export default Favorites;