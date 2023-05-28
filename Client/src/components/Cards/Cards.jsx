import Card from '../Card/Card';
import styles from './cards.module.css';

export default function Cards({ characters, onClose }) {
  const {divFondo} = styles;
  return (
    <div className={divFondo}>
      {characters.map(
        ({ id, name, status, species, gender, origin, image },index) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              status={status}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              onClose={onClose}
            />
          );
        }
      )}
    </div>
  );
}
