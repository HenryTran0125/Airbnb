/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.svg";
import avatar from "../../assets/icon/avatar.png";
import Button from "../../common/Button/Button";
import { useEffect, useState } from "react";
import { useGetInformation } from "../../service/getUser";
import Modal from "../Modal/Modal";
import CloseButton from "../../assets/icon/closeButton";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

function Navigation() {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [isCheckLogin, setIsCheckLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

  const { data, error, isLoading } = useGetInformation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
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
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  function handleCheckLogin() {
    setIsCheckLogin(!isCheckLogin);
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
    <nav className={scrolling ? styles.activeNav : styles.nav}>
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
                  to={item.toLowerCase()}
                  className={
                    scrolling ? styles.linkElementScrolling : styles.linkElement
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
              <button
                onClick={() => handleCheckSignIn()}
                className={styles.action}
              >
                Đăng nhập
              </button>

              <button
                onClick={() => handleCheckSignUp()}
                className={styles.action}
              >
                Đăng ký
              </button>
            </div>
          )}

          <SignUp signUp={signUp} setSignUp={setSignUp} />

          <SignIn signIn={signIn} setSignIn={setSignIn} setSignUp={setSignUp} />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
