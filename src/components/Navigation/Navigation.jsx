/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.svg";
import avatar from "../../assets/icon/avatar.png";
import Button from "../../common/Button/Button";
import { useEffect, useState } from "react";
function Navigation() {
  const location = useLocation();
  // console.log(location.pathname);
  // const [isScrolled, setIsScrolled] = useState(false);

  // const handleScroll = () => {
  //   const scrollY = window.scrollY; // Lấy vị trí cuộn
  //   setIsScrolled(scrollY > 100); // Thay đổi giá trị 100 theo khoảng cách bạn muốn
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll); // Dọn dẹp sự kiện khi component unmount
  //   };
  // }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.link}>
          <img src={logo} className={styles.image} alt="Logo" />
          <span className={styles.text}>airbnb</span>
        </Link>

        <ul className={styles.ul}>
          {["Home", "About", "Services", "Pricing", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <Link to={item.toLowerCase()} className={styles.linkElement}>
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
