/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import image from "../../assets/LocationBackground/anton-sharov-_kkx1WekVRY-unsplash.jpg";

function LocationBackground({ city }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={image} className={styles.img} />
      </div>

      <div className={styles.h1Container}>
        <h1 className={styles.h1}>{city}</h1>
      </div>
    </div>
  );
}

export default LocationBackground;
