/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import star from "../../assets/icon/ratingStar.svg";
import { useState } from "react";

function Stars() {
  const [currentStar, setCurrentStar] = useState(0);
  const [click, setClick] = useState(0);
  const array = Array.from({ length: 5 });
  function handleHover(index) {
    console.log(index, currentStar);
    setCurrentStar(index);
  }

  function handleClick(index) {
    setClick((currClick) => (currClick == index ? 0 : index));
    setCurrentStar(index);
  }

  console.log(currentStar);

  return (
    <div className={styles.imgContainer}>
      {array.map((_, index) => (
        <div
          key={index}
          onMouseEnter={() => handleHover(index + 1)}
          onMouseLeave={() => setCurrentStar(click)}
          onClick={() => handleClick(index + 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={
              index + 1 <= click || index + 1 <= currentStar
                ? "#fe6b6e"
                : "none"
            }
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke={
              index + 1 <= click || index + 1 <= currentStar
                ? "#fe6b6e"
                : "currentColor"
            }
            className={styles.img}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export default Stars;
