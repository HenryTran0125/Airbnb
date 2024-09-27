/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import { categories } from "../../data/Categories";

function Categories() {
  return (
    <section className={styles.section}>
      <div>
        <div className={styles.sectionTitleContainer}>
          <h1 className={styles.sectionTitle}>Ở bất cứ đâu</h1>
        </div>

        <div>
          <ul className={styles.ul}>
            {categories.map((item, index) => (
              <li className={styles.li} key={index}>
                <div>
                  <img src={item.image} className={styles.image} />
                </div>

                <div className={styles.titleContainer}>
                  <div className={styles.title}>{item.title}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Categories;
