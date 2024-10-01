/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import avatar from "../../assets/icon/avatar.png";
import Stars from "../Stars/Stars";

function WritingReview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <img src={avatar} className={styles.img} />

          <div className={styles.userName}>Quân</div>
        </div>

        <div className={styles.starsContainer}>
          <Stars />
        </div>

        <div>
          <textarea
            className={styles.textingField}
            placeholder="Cảm nhận của bạn ở đây như thế nào?"
          />
        </div>

        <div>
          <button className={styles.button}>Đánh giá</button>
        </div>
      </div>
    </section>
  );
}

export default WritingReview;
