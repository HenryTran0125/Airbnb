/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { convertInformation } from "../../helpers/convertRoomInformation";
import Convenience from "../Convenience/Convenience";
import styles from "./page.module.css";

function RoomList({ data, city }) {
  const places = data.length;
  const data1 = Object.entries(data[1]).filter(
    ([key, value]) => value === true
  );
  const data2 = Object.entries(data[1]).filter(
    ([key, value]) =>
      key === "phongTam" || key === "giuong" || key === "phongNgu"
  );
  // console.log(data);
  // console.log(data1);
  console.log(data[0]);

  return (
    <div className={styles.container}>
      <div className={styles.textResult}>
        Hiện tại có {places} chỗ ở tại {city}
      </div>

      <div>
        <h1 className={styles.h1}>Chỗ ở tại khu vực bản đồ đã chọn</h1>

        <div>
          <ul>
            {data.map((item, index) => (
              <li key={index} className={styles.li}>
                <div
                  className={
                    item.id < 100
                      ? styles.imgContainer
                      : styles.specialImgContainer
                  }
                >
                  <img
                    src={item.hinhAnh}
                    className={item.id < 100 ? styles.img : styles.specialImg}
                  />
                </div>

                <Convenience item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RoomList;
