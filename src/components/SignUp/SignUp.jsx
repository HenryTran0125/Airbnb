/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import CloseButton from "../../assets/icon/closeButton";
import Modal from "../Modal/Modal";
import { useForm } from "react-hook-form";

function SignUp({ signUp, setSignUp }) {
  const { register, handleSubmit } = useForm();

  function subMission(data) {
    console.log(data);
  }

  return (
    <>
      {signUp && (
        <Modal>
          <div className={styles.container}>
            <h1>Đăng ký tài khoản Airbnb</h1>

            <form onSubmit={handleSubmit(subMission)}>
              {[
                { label: "Tên", type: "text", register: "name" },
                { label: "Email", type: "email", register: "email" },
                { label: "Mật khẩu", type: "password", register: "password" },
                { label: "Số điện thoại", type: "tel", register: "number" },
                { label: "Ngày sinh", type: "date", register: "birthOfDate" },
              ].map((item, index) => (
                <div key={index}>
                  <label>{item.label}</label>

                  <input {...register(item.register)} type={item.type} />
                </div>
              ))}
            </form>

            <button className={styles.button} onClick={() => setSignUp(false)}>
              <CloseButton fill="black" stroke="black" />
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default SignUp;
