import styles from "./about.module.css";

export default function About() {
  const { h2, img, div } = styles;
  return (
    <div className={div}>
      <h2 className={h2}>Todo sea por mi gordita ♥</h2>
      <img className={img} src="https://scontent.feze10-1.fna.fbcdn.net/v/t39.30808-6/273439048_10227055908053194_8157582576993941652_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFDK7MmbF5MIbnTPHozLDrwm4z4lO3wY3WbjPiU7fBjdURDzWhLnwLixZkwGCO_Www&_nc_ohc=7qsx4UL6m8gAX--Amoc&_nc_ht=scontent.feze10-1.fna&oh=00_AfCpyIPxGUlEsYX58jSR-FJxXqegol7gzs7lOJ5asTqYSA&oe=646F9AC3" alt="" />
    </div>
  );
}
