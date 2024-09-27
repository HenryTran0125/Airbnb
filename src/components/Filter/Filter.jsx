/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";

function Filter({ isHomePage }) {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {[
          "Loại nơi ở",
          "Giá",
          "Đặt ngay",
          "Phòng và phòng ngủ",
          "Bộ lọc khác ",
        ].map((item, index) => (
          <li
            className={isHomePage ? styles.li : styles.liIsNotHomePage}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;
