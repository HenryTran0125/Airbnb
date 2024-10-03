/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import search from "../../assets/icon/search.svg";

function AddingGuest({ isHomePage }) {
  return (
    <div className={styles.addingGuest}>
      <div className={isHomePage ? styles.text : styles.textIsNotHomePage}>
        Thêm khách
      </div>

      <div className={styles.imageContainer}>
        <img src={search} className={styles.search} />
      </div>
    </div>
  );
}

export default AddingGuest;
