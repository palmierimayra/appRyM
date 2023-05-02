import styles from './searchBar.module.css'

export default function SearchBar({ onSearch }) {
  const {btn, input, divsch} = styles;
  return (
    <div className={divsch}>
      <input className={input} type="search" />
      <button className={btn} onClick={onSearch}>Agregar</button>
    </div>
  );
}
