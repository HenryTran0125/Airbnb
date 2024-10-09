/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.svg";
import avatar from "../../assets/icon/avatar.png";
import { useEffect, useState } from "react";
import { useGetInformation } from "../../service/getUser";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import { useSelector } from "react-redux";
import DropdownSetting from "../DropdownSetting/DropdownSetting";
import UserSetting from "../UserSetting/UserSetting";
import Modal from "../Modal/Modal";
import SignOut from "../Sign Out/SignOut";

function Navigation() {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [isCheckLogin, setIsCheckLogin] = useState(false);
  const [isCheckUserSetting, setIsCheckUserSetting] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [signOut, setSignOut] = useState(false);

  const userName = useSelector(
    (state) => state.updateInformation.name || state.storeInformation.name
  );
  const email = useSelector(
    (state) => state.updateInformation.email || state.storeInformation.email
  );
  const id = useSelector(
    (state) => state.updateInformation.id || state.storeInformation.id
  );

  const { data, error, isLoading } = useGetInformation();
  const locationPage = location.pathname.includes("/location");
  const locationRoomDetail = location.pathname.includes("/room-detail");
  const dashboardPage = location.pathname.includes("/dashboard");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setScrolling(true);
      } else if (
        (dashboardPage && window.scrollY > 300) ||
        (locationPage && window.scrollY > 300)
      ) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [locationPage, dashboardPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function handleCheckLogin() {
    if (userName) {
      setIsCheckUserSetting(!isCheckUserSetting);
    } else {
      setIsCheckLogin(!isCheckLogin);
    }
  }

  function handleCheckSignUp() {
    setSignUp(true);
    setIsCheckLogin(false);
  }

  function handleCheckSignIn() {
    setSignIn(true);
    setIsCheckLogin(false);
  }

  return (
    <nav
      className={
        locationRoomDetail || scrolling ? styles.activeNav : styles.nav
      }
    >
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          <img src={logo} className={styles.image} alt="Logo" />
          <span className={styles.text}>airbnb</span>
        </Link>

        <ul className={styles.ul}>
          {["Home", "About", "Services", "Pricing", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link
                  to={item.toLowerCase() === "home" && "/"}
                  className={
                    locationRoomDetail || scrolling
                      ? styles.linkElementScrolling
                      : styles.linkElement
                  }
                >
                  {item}
                </Link>
              </li>
            )
          )}
        </ul>

        <div className={styles.avatarContainer}>
          <button onClick={() => handleCheckLogin()} className={styles.button}>
            <img src={avatar} className={styles.avatar} />
          </button>

          {isCheckLogin && (
            <div className={styles.logContainer}>
              <DropdownSetting
                setSignIn={setSignIn}
                handleCheckSignIn={handleCheckSignIn}
                handleCheckSignUp={handleCheckSignUp}
              />
            </div>
          )}

          {isCheckUserSetting && (
            <div className={styles.logContainer}>
              <UserSetting
                setIsCheckUserSetting={setIsCheckUserSetting}
                userName={userName}
                email={email}
                setSignOut={setSignOut}
              />
            </div>
          )}

          <SignUp signUp={signUp} setSignUp={setSignUp} />

          <SignIn signIn={signIn} setSignIn={setSignIn} setSignUp={setSignUp} />

          <SignOut signOut={signOut} setSignOut={setSignOut} />

          {userName ? (
            <div
              onClick={() => handleCheckLogin()}
              className={
                locationRoomDetail || scrolling
                  ? styles.userNameScrolling
                  : styles.userName
              }
            >
              {userName}
            </div>
          ) : (
            <div
              onClick={() => handleCheckLogin()}
              className={
                locationRoomDetail || scrolling
                  ? styles.logInLogOutScrolling
                  : styles.logInLogOut
              }
            >
              Login/ Logout
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
