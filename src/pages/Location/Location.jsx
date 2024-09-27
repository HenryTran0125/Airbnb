/* eslint-disable no-unused-vars */
import {
  Outlet,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useGetRoomListById } from "../../service/getRoomListById";
import LocationBackground from "../../components/LocationBackground/LocationBackground";
import styles from "./page.module.css";
import SearchingArea from "../../components/SearchingArea/SearchingArea";
import RoomListContainer from "../../components/RoomListContainer/RoomListContainer";

function Location() {
  const location = useLocation();
  const id = location.state?.id;
  const city = location.state?.city;
  const { data, error, isLoading } = useGetRoomListById(id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const realData = data.content;

  return (
    <div className={styles.container}>
      <LocationBackground city={city} />

      <SearchingArea isHomePage={false} />

      <RoomListContainer data={realData} city={city} />
    </div>
  );
}

export default Location;
