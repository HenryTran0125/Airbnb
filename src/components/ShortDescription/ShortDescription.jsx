/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { convertInformation } from "../../helpers/convertRoomInformation";
import styles from "./page.module.css";

function ShortDescription({ quickInformation }) {
  return (
    <div className={styles.wrapperQuickContent}>
      <h3 className={styles.h3}>Toàn bộ căn hộ. Chủ nhà NHATSANG</h3>

      <ul className={styles.ul}>
        {quickInformation.map(([key, value], index) => (
          <li className={styles.li} key={index}>
            {value} {convertInformation(key)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShortDescription;
