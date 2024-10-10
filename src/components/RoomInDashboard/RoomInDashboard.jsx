/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import { useGetRoomInformationInDashboard } from "../../service/getRoomInformationInDashboard";
import RoomDescription from "../RoomDescription/RoomDescription";

function RoomInDashboard({ roomId, content }) {
  const {
    data: roomData,
    error: roomError,
    isLoading: loadingData,
  } = useGetRoomInformationInDashboard(roomId);

  if (loadingData) {
    return <div>Loading...</div>;
  }

  if (roomError) {
    return <div>Error: {roomError.message}</div>;
  }

  const realData = roomData.map((item) => item.content);

  return (
    <div>
      <h2 className={styles.h2}>Phòng đã thuê</h2>

      <div>
        {content.length > 0 ? (
          <RoomDescription data={realData} />
        ) : (
          <div className={styles.notBooking}>Bạn chưa đặt phòng nào.</div>
        )}
      </div>
    </div>
  );
}

export default RoomInDashboard;
