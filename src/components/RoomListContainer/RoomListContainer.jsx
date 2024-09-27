/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Map from "../Map/Map";
import RoomList from "../RoomList/RoomList";
import styles from "./page.module.css";

function RoomListContainer({ data, city }) {
  return (
    <div className={styles.container}>
      <div className={styles.alignment}>
        <RoomList data={data} city={city} />

        <Map />
      </div>
    </div>
  );
}

export default RoomListContainer;
