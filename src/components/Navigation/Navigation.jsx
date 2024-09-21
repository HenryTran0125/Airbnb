/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import avatar from "../../assets/icon/avatar.png";
import Button from "../../common/Button/Button";
function Navigation() {
  function testClick(string) {
    console.log(string);
  }
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
              <li className={styles.li} key={index}>
                <Link
                  to={item.toLowerCase()}
                  onClick={() => testClick(item.toLowerCase())}
                  className={styles.linkElement}
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
