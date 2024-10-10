/* eslint-disable no-unused-vars */
import styles from "./page.module.css";

import { useSelector } from "react-redux";
import RoomInDashboard from "../RoomInDashboard/RoomInDashboard";
import { useGetBookingByUser } from "../../service/getBookingByUser";
import { useState } from "react";
import EditForm from "../EditForm/EditForm";
import CertifiedInformation from "../CertifiedInformation/CertifiedInformation";

function DashboardUserInformation() {
  const [edit, setEdit] = useState(false);
  const { id, name } = useSelector((state) => state.storeInformation);

  const userInfo = localStorage.getItem("userInfo");
  let userId;

  if (userInfo) {
    const parsedUserInfo = JSON.parse(userInfo);

    userId = parsedUserInfo.id;

    console.log("User ID:", userId);
  } else {
    console.log("No user info found in localStorage");
  }
  const { data, error, isLoading, refetch } = useGetBookingByUser(userId);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  if (!id) refetch;

  if (!data?.content) return;

  const content = data?.content;

  const roomId = content.map((item) => item.maPhong);

  return (
    <div className={styles.container}>
      <CertifiedInformation />

      <div className={styles.roomContainer}>
        <p className={styles.welcome}>Xin chào {name}</p>

        <p className={styles.joining}>Bắt đầu tham gia vào 2023</p>

        <p onClick={() => setEdit(true)} className={styles.editProfile}>
          Chỉnh sửa hồ sơ
        </p>

        <RoomInDashboard content={content} roomId={roomId} />
      </div>

      <EditForm edit={edit} setEdit={setEdit} />
    </div>
  );
}

export default DashboardUserInformation;
