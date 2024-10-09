/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import styles from "./page.module.css";
import { useState } from "react";

function UserSetting({ userName, email, setIsCheckUserSetting, setSignOut }) {
  function handleSetting(keyword) {
    if (keyword === "Sign out") {
      setSignOut(true);
      setIsCheckUserSetting(false);
    } else {
      setIsCheckUserSetting(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.userInformationContainer}>
        <div className={styles.userName}>{userName}</div>

        <div className={styles.email}>{email}</div>
      </div>

      <div className={styles.buttonContainer}>
        {["Dashboard", "Settings", "Earnings", "Sign out"].map(
          (item, index) => (
            <Link
              key={index}
              to={item.toLowerCase() === "dashboard" ? "/dashboard" : "/"}
              className={styles.action}
              onClick={() => handleSetting(item)}
            >
              <button className={styles.action}>{item}</button>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default UserSetting;
