import styles from "./card.module.css";
import { Link } from "react-router-dom";

export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  const { h2, btn, div, img, nameid } = styles;
  return (
    <div className={div} key={id}>
      <button
        className={btn}
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      <img className={img} src={image} alt="" />
      <Link to={`/detail/${id}`}>
        <h2 className={nameid}>{name}</h2>
      </Link>
      <h2 className={h2}>{status}</h2>
      <h2 className={h2}>{species}</h2>
      <h2 className={h2}>{gender}</h2>
      <h2 className={h2}>{origin}</h2>
    </div>
  );
}
