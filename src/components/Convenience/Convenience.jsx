/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { convertInformation } from "../../helpers/convertRoomInformation";
import styles from "./page.module.css";
function Convenience({ item }) {
  return (
    <div className={styles.contentContainer}>
      <div>
        <h3 className={styles.h3}>{item.tenPhong}</h3>

        <div className={styles.convenience}>
          <h4 className={styles.h4}>Tiện nghi:</h4>

          <ul className={styles.ul}>
            {Object.entries(item)
              .filter(([key, value]) => value === true)
              .map(([key, value], index, arr) => (
                <li className={styles.text} key={index}>
                  {convertInformation(key)}
                  {index === arr.length - 1 ? "." : ","}
                </li>
              ))}
          </ul>
        </div>

        <div className={styles.convenience}>
          <h4 className={styles.h4}>Phòng:</h4>

          <ul className={styles.ul}>
            {Object.entries(item)
              .filter(
                ([key]) =>
                  key === "phongNgu" || key === "giuong" || key === "phongTam"
              )
              .map(([key, value], index, arr) => (
                <li className={styles.text} key={index}>
                  {value} {convertInformation(key)}
                  {index === arr.length - 1 ? "." : ","}
                </li>
              ))}
          </ul>
        </div>

        <div className={styles.convenience}>
          <h4 className={styles.h4}>Số lượng khách:</h4>

          <ul className={styles.ul}>
            {Object.entries(item)
              .filter(([key]) => key === "khach")
              .map(([key, value], index, arr) => (
                <li className={styles.text} key={index}>
                  {value} {convertInformation(key)}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Convenience;
