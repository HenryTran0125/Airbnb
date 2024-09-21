/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import image from "../../assets/carousel/1.jpg";

function Carousel() {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.image} />
    </div>
  );
}

export default Carousel;
