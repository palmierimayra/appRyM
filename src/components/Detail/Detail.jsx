import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  const { divPrinc, title, datos, img } = styles;

  return (
    <div className={divPrinc}>
      {character.name ? (
        <>
          <div className={datos}>
            <h1 className={title}>{character.name}</h1>
            <h2>STATUS | {character.status}</h2>
            <h2>SPECIES | {character.species}</h2>
            <h2>GENDER | {character.gender}</h2>
            <h2>ORIGIN | {character.origin?.name}</h2>
          </div>
          <div>
            <img className={img} src={character.image} alt={character.name} />
          </div>
        </>
      ) : (
        <p>Cargando pagina...</p>
      )}
    </div>
  );
}
