import { useState } from "react";
import styles from "./searchBar.module.css";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const { btn, input, divsch } = styles;

  return (
    <div className={divsch}>
      <input
        className={input}
        type="search"
        onChange={handleChange}
        value={id}
      />
      <button
        className={btn}
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
}
