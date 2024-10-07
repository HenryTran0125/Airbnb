/* eslint-disable no-unused-vars */
import DashboardUserInformation from "../../components/DashboardUserInformation/DashboardUserInformation";
import LocationBackground from "../../components/LocationBackground/LocationBackground";
import styles from "./page.module.css";

function Dashboard() {
  return (
    <div>
      <LocationBackground user="Thông tin người dùng" />

      <DashboardUserInformation />
    </div>
  );
}

export default Dashboard;
