/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styles from "./page.module.css";
import CloseButton from "../../assets/icon/closeButton";
import Modal from "../Modal/Modal";
import { useForm } from "react-hook-form";
import { signUpData } from "../../data/SignUp";
import { useState } from "react";
import { usePostUserInformation } from "../../service/postUserInformation";

function SignUp({ signUp, setSignUp }) {
  const [gender, setGender] = useState(null);
  const { register, handleSubmit, watch } = useForm();
  const mutation = usePostUserInformation();

  if (mutation.isLoading) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    return <div>Error: {mutation.error.message}</div>;
  }

  if (mutation.isSuccess) {
    return alert("User successfully registered!");
  }

  function handleChange(e) {
    setGender(e.target.value);
  }

  function subMission(data) {
    const submitData = { ...data, gender: true };
    console.log("Submitting data:", submitData);
    mutation.mutate(submitData);
  }

  return (
    <>
      {signUp && (
        <Modal>
          <div className={styles.container}>
            <h1 className={styles.h1}>Đăng ký tài khoản Airbnb</h1>

            <form onSubmit={handleSubmit(subMission)}>
              {signUpData.map((item, index) => (
                <div className={styles.fieldContainer} key={index}>
                  <label className={styles.label}>{item.label}</label>

                  <input
                    type={item.type}
                    className={styles.input}
                    {...register(item.register)}
                    placeholder={item.holder}
                  />
                </div>
              ))}

              <div className={styles.selectionContainer}>
                <div className={styles.birthOfDateContainer}>
                  <label className={styles.birthOfDateLabel}>Ngày sinh</label>

                  <input
                    type="date"
                    className={styles.inputDateOfBirth}
                    {...register("birthOfDate")}
                    placeholder="Ngày sinh của bạn là?..."
                  />
                </div>

                <div className={styles.selectionGenderContainer}>
                  <label className={styles.selectionLabel}>Giới tính</label>

                  <select
                    onChange={(e) => handleChange(e)}
                    className={styles.selectingOptions}
                  >
                    <option value="" className={styles.options}>
                      Chọn giới tính
                    </option>

                    <option value="nam" className={styles.options}>
                      Nam
                    </option>

                    <option value="nữ" className={styles.options}>
                      Nữ
                    </option>
                  </select>
                </div>
              </div>

              <button className={styles.registerButton} type="submit">
                Đăng ký
              </button>
            </form>

            <button
              className={styles.closeButton}
              onClick={() => setSignUp(false)}
            >
              <CloseButton fill="black" stroke="black" />
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

export default SignUp;
