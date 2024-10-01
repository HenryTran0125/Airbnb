/* eslint-disable no-unused-vars */
import { useLocation, useParams } from "react-router-dom";
import styles from "./page.module.css";
import RoomInformation from "../../components/RoomInformation/RoomInformation";
import { useGetRoomInformationById } from "../../service/getRoomInformationById";

function RoomDetail() {
  const location = useLocation();
  const id = location.state?.id;
  const {
    data: roomData,
    error: roomError,
    isLoading: roomLoading,
  } = useGetRoomInformationById(id);

  if (roomLoading) {
    return <div>Loading...</div>;
  }

  if (roomError) {
    return <div>Error: {roomError.message || "An error occurred"}</div>;
  }

  const room = roomData?.content;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <RoomInformation id={id} data={room} />
      </div>
    </section>
  );
}

export default RoomDetail;
