/* eslint-disable no-unused-vars */
import DashboardUserInformation from "../../components/DashboardUserInformation/DashboardUserInformation";
import LocationBackground from "../../components/LocationBackground/LocationBackground";
import { useDispatch } from "react-redux";

function Dashboard() {
  const dispatch = useDispatch();
  const savedUserInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <div>
      <LocationBackground user="Thông tin người dùng" />

      <DashboardUserInformation />
    </div>
  );
}

export default Dashboard;
