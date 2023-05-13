import React from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export function Card(props) {

  const [isFav, setIsFav] = useState(false);
  const { h2, btn, div, img, nameid, favorite } = styles;

const handleFavorite = () => {
  if(isFav) {
    setIsFav(false);
    props.removeFav(props.id);
  } else {
    setIsFav(true);
    props.addFav(props);
  }
}

useEffect(() => {
  props.myFavorites.forEach((fav) => {
     if (fav.id === props.id) {
        setIsFav(true);
     }
  });
}, [props.myFavorites]);

  return (
    <div className={div} key={props.id}>
      {
   isFav ? (
      <button className={favorite} onClick={handleFavorite}>❤️</button>
   ) : (
      <button className={favorite} onClick={handleFavorite}>🤍</button>
   )
}
      <button className={btn} onClick={() => {props.onClose(props.id);}} > X</button>
      <img className={img} src={props.image} alt="" />
      <Link to={`/detail/${props.id}`}>
        <h2 className={nameid}>{props.name}</h2>
      </Link>
      <h2 className={h2}>{props.status}</h2>
      <h2 className={h2}>{props.species}</h2>
      <h2 className={h2}>{props.gender}</h2>
      <h2 className={h2}>{props.origin}</h2>
    </div>
  );
  }

  export function mapDispatchToProps(dispatch) {
    return {
      addFav: (char) => {
        dispatch(addFav(char));
      },

      removeFav: (id) => {
        dispatch(removeFav(id));
      },
    };
  }

  export function mapStateToProps(state) {
    return {
      myFavorites: state.myFavorites,
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Card);

