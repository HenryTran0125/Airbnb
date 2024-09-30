/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import { convertInformation } from "../../helpers/convertRoomInformation";
import { officialPrice } from "../../helpers/officialPrice";

function ContentConvenience({ keyword, data }) {
  return (
    <>
      {keyword === "Tiện nghi" && (
        <div className={styles.convenience}>
          <h4 className={styles.h4}>{keyword}:</h4>

          <ul className={styles.ul}>
            {Object.entries(data)
              .filter(([key, value]) => value === true)
              .map(([key, value], index, arr) => (
                <li className={styles.text} key={index}>
                  {convertInformation(key)}
                  {index === arr.length - 1 ? "." : ","}
                </li>
              ))}
          </ul>
        </div>
      )}

      {keyword === "Phòng" && (
        <div className={styles.convenience}>
          <h4 className={styles.h4}>{keyword}:</h4>

          <ul className={styles.ul}>
            {Object.entries(data)
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
      )}

      {keyword === "Số lượng khách" && (
        <div className={styles.convenience}>
          <h4 className={styles.h4}>{keyword}:</h4>

          <ul className={styles.ul}>
            {Object.entries(data)
              .filter(([key]) => key === "khach")
              .map(([key, value], index, arr) => (
                <li className={styles.text} key={index}>
                  {value} {convertInformation(key)}
                </li>
              ))}
          </ul>
        </div>
      )}

      {keyword === "Giá" && (
        <div className={styles.convenience}>
          <h4 className={styles.h4}>{keyword}:</h4>

          <ul className={styles.ul}>
            {Object.entries(data)
              .filter(([key]) => key === "giaTien")
              .map(([key, value], index, arr) => (
                <li
                  style={{ fontWeight: "700" }}
                  className={styles.text}
                  key={index}
                >
                  ${officialPrice(value)} / đêm
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default ContentConvenience;
