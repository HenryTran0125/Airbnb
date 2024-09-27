/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";

function RoomList({ data, city }) {
  const places = data.length;
  console.log(places);
  console.log(data);

  return (
    <div className={styles.container}>
      <div>
        Hiện tại có {places} chỗ ở tại {city}
      </div>

      <div>
        <h1>Chỗ ở tại khu vực bản đồ đã chọn</h1>

        <div>
          <ul>
            {data.map((item, index) => (
              <li key={index}>
                <div>
                  <img src={item.hinhAnh} />
                </div>

                <div>
                  <div>
                    <h3>{item.tenPhong}</h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RoomList;
