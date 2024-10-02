/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.svg";
import avatar from "../../assets/icon/avatar.png";
import Button from "../../common/Button/Button";
import { useEffect, useState } from "react";
function Navigation() {
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  if (location.pathname !== "/") console.log("different");

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

        <Button borderRadius={"2rem"}>
          <img src={avatar} className={styles.avatar} />
        </Button>
      </div>
    </nav>
  );
}

export default Navigation;
