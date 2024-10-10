/* eslint-disable no-unused-vars */
import { Outlet, useLocation } from "react-router-dom";
import { useGetRoomListById } from "../../service/getRoomListById";
import LocationBackground from "../../components/LocationBackground/LocationBackground";
import styles from "./page.module.css";
import SearchingArea from "../../components/SearchingArea/SearchingArea";
import RoomListContainer from "../../components/RoomListContainer/RoomListContainer";
import { useEffect } from "react";

function Location() {
  const location = useLocation();
  const id = location.state?.id;
  const city = location.state?.city;

  const {
    data: roomListData,
    error: roomListError,
    isLoading: roomListLoading,
    refetch,
  } = useGetRoomListById(id);

  useEffect(() => {
    if (id) {
      refetch(id);
    }
  }, [id, refetch]);

  if (roomListLoading) {
    return <div>Loading...</div>;
  }

  if (roomListError) {
    return <div>Error: {roomListError.message || "An error occurred"}</div>;
  }

  const contentRoomListData = roomListData?.content;
  // console.log(id, city, contentRoomListData);

  return (
    <div className={styles.container}>
      <LocationBackground city={city} />

      <SearchingArea isHomePage={false} />

      <RoomListContainer data={contentRoomListData} city={city} />

      <Outlet />
    </div>
  );
}

export default Location;
