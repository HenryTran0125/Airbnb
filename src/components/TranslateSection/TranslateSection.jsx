/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import translateIcon from "../../assets/icon/translateIcon.svg";

function TranslateSection({ data }) {
  return (
    <div className={styles.roomDescription}>
      <div className={styles.translate}>
        Dịch sang tiếng Anh{" "}
        <img src={translateIcon} height={"24px"} width={"24px"} />
      </div>

      <p className={styles.description}>{data.moTa}</p>

      <strong className={styles.strong}>Hiển thị thêm</strong>
    </div>
  );
}

export default TranslateSection;
