/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import DashboardUserInformation from "../../components/DashboardUserInformation/DashboardUserInformation";
import LocationBackground from "../../components/LocationBackground/LocationBackground";
import styles from "./page.module.css";
import { useDispatch } from "react-redux";
import {
  saveBirthday,
  saveEmail,
  saveGender,
  saveId,
  savePhone,
  saveUserName,
} from "../../store/slices/storeUserInformation";

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
