/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import bep from "../../assets/icon/kitchen.svg";
import wifi from "../../assets/icon/wifi.svg";
import tivi from "../../assets/icon/tv.svg";
import dieuHoa from "../../assets/icon/AC.svg";
import mayGiat from "../../assets/icon/washingMachine.svg";
import banLa from "../../assets/icon/iron.svg";
import banUi from "../../assets/icon/iron.svg";
import hoBoi from "../../assets/icon/swimmingPool.svg";
import doXe from "../../assets/icon/parking.svg";
import { convertInformation } from "../../helpers/convertRoomInformation";

function ConvenienceInRoom({ data }) {
  const convenienceFurniture = Object.entries(data).filter(
    ([key, value]) => value === true
  );
  return (
    <div className={styles.iconContainer}>
      <h2 className={styles.h2}>Các tiện ích đi kèm</h2>

      <ul className={styles.ulIcon}>
        {convenienceFurniture.map(([key, value], index) => (
          <li className={styles.liIcon} key={index}>
            {key === "mayGiat" && (
              <img src={mayGiat} height={"24px"} width={"24px"} />
            )}
            {key === "banLa" && (
              <img src={banLa} height={"24px"} width={"24px"} />
            )}
            {key === "tivi" && (
              <img src={tivi} height={"24px"} width={"24px"} />
            )}
            {key === "dieuHoa" && (
              <img src={dieuHoa} height={"24px"} width={"24px"} />
            )}
            {key === "wifi" && (
              <img src={wifi} height={"24px"} width={"24px"} />
            )}
            {key === "bep" && <img src={bep} height={"24px"} width={"24px"} />}
            {key === "banUi" && (
              <img src={banUi} height={"24px"} width={"24px"} />
            )}
            {key === "hoBoi" && (
              <img src={hoBoi} height={"24px"} width={"24px"} />
            )}
            {key === "doXe" && (
              <img src={doXe} height={"24px"} width={"24px"} />
            )}

            <div className={styles.textIcon}>{convertInformation(key)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ConvenienceInRoom;
