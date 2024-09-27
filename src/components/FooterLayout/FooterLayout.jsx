/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";

function FooterLayout({ title, array }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.h2}>{title}</h2>
      </div>

      <ul className={styles.ul}>
        {array.map((item, index) => (
          <li className={styles.li} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLayout;
