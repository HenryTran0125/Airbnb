/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { FormatDate } from "../../helpers/formattedDate";
import Modal from "../Modal/Modal";
import styles from "./page.module.css";
import { officialPrice } from "../../helpers/officialPrice";
import { usePostBooking } from "../../service/postBooking";
import { convertDate } from "../../helpers/convertDate";
import toast from "react-hot-toast";

function ModalConfirmation({
  setCheckingBookingButton,
  startDateInDetailRoom,
  endDateInDetailRoom,
  price,
  realNightsBooking,
  id,
  maViTri,
}) {
  const guests = useSelector((state) => state.addGuestInRoom.guest);
  const priceConfirmation = officialPrice(price) * realNightsBooking + 8;
  const idInformation = useSelector((state) => state.storeInformation.id);
  const mutation = usePostBooking();

  if (mutation.isLoading) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    console.log(`Error: ${mutation.error.message}`);
  }

  if (mutation.isSuccess) {
    return console.log("Successful Data: ", mutation.data);
  }

  const dataBooking = {
    id: maViTri,
    maPhong: id,
    ngayDen: startDateInDetailRoom,
    ngayDi: endDateInDetailRoom,
    soLuongKhach: guests,
    maNguoiDung: idInformation,
  };

  function handleConfirmation(dataConfirmation) {
    console.log(dataBooking);
    mutation.mutate(dataConfirmation);
    setCheckingBookingButton(false);
    toast.success(
      <span style={{ fontSize: "1.4rem", color: "green" }}>
        Great! Successfully Added this beautiful place.
      </span>,
      { duration: 7000 }
    );
  }

  return (
    <Modal>
      <div className={styles.container}>
        <div>
          <h2 className={styles.h2}>Bạn có chắc muốn đặt phòng này?</h2>
        </div>

        <div>
          <div className={styles.informationConfirmation}>
            Lịch đặt phòng: {FormatDate(startDateInDetailRoom)} -{" "}
            {FormatDate(endDateInDetailRoom)}
          </div>

          <div className={styles.informationConfirmation}>
            Số khách: 0{guests}
          </div>

          <div className={styles.officialPriceConfirmation}>
            Tổng tiền: ${priceConfirmation}
          </div>

          <div className={styles.buttonContainer}>
            <button
              onClick={() => handleConfirmation(dataBooking)}
              className={styles.button}
            >
              Xác nhận
            </button>

            <button
              onClick={() => setCheckingBookingButton(false)}
              className={styles.buttonCancel}
            >
              Hủy
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalConfirmation;
