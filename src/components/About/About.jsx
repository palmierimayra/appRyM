import styles from "./about.module.css";

export default function About() {
  const { h2, img, div } = styles;
  return (
    <div className={div}>
      <h2 className={h2}>El motivo por el cual hago esto</h2>
      <img className={img} src="https://scontent.feze10-1.fna.fbcdn.net/v/t39.30808-6/296011850_10227992651151186_3949494798029679382_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEzb2pzkzlac5W2T-UcJhyGYWolBzkaG6phaiUHORobqnWxSzMz5L_-DbUECYv8opU&_nc_ohc=F9q6Fec5gCAAX_4YGzo&_nc_ht=scontent.feze10-1.fna&oh=00_AfAExLpP-jUccQexYbzFwMOH8ro4IhR9K7JUHz2ZAwv4Sw&oe=645BF304" alt="" />
    </div>
  );
}
