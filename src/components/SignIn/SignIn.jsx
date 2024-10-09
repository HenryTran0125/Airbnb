/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Modal from "../Modal/Modal";
import styles from "./page.module.css";
import CloseButton from "../../assets/icon/closeButton";
import { Controller, useForm } from "react-hook-form";
import { usePostUserAccount } from "../../service/postUserAccount";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveBirthday,
  saveEmail,
  saveGender,
  saveId,
  savePhone,
  saveUserName,
} from "../../store/slices/storeUserInformation";
import toast from "react-hot-toast";

function SignIn({ setSignIn, setSignUp, signIn }) {
  const { register, handleSubmit, control } = useForm();
  const mutation = usePostUserAccount();
  const dataResponse = mutation.data?.content?.user;
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.storeInformation);

  useEffect(() => {
    if (mutation.isSuccess && dataResponse.name) {
      dispatch(saveUserName(dataResponse.name));
      dispatch(saveEmail(dataResponse.email));
      dispatch(saveId(dataResponse.id));
      dispatch(savePhone(dataResponse.phone));
      dispatch(saveBirthday(dataResponse.birthday));
      dispatch(saveGender(dataResponse.gender));

      toast.success(
        <span style={{ fontSize: "1.4rem", color: "green" }}>
          Login successfully!
        </span>
      );
    }
  }, [mutation.isSuccess, mutation.data, dispatch]);

  useEffect(() => {
    if (mutation.isSuccess && dataResponse.name) {
      dispatch(saveUserName(dataResponse.name));
      dispatch(saveEmail(dataResponse.email));
      dispatch(saveId(dataResponse.id));
      dispatch(savePhone(dataResponse.phone));
      dispatch(saveBirthday(dataResponse.birthday));
      dispatch(saveGender(dataResponse.gender));

      // Lưu vào localStorage
      localStorage.setItem(
        "userInfo",
        JSON.stringify(mutation.data?.content?.user)
      );

      toast.success(
        <span style={{ fontSize: "1.4rem", color: "green" }}>
          Login successfully!
        </span>
      );
    }
  }, [mutation.isSuccess, mutation.data?.content?.user]);

  // Lấy lại dữ liệu từ localStorage khi trang được tải lại
  useEffect(() => {
    const savedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (savedUserInfo) {
      dispatch(saveUserName(savedUserInfo.name));
      dispatch(saveEmail(savedUserInfo.email));
      dispatch(saveId(savedUserInfo.id));
      dispatch(savePhone(savedUserInfo.phone));
      dispatch(saveBirthday(savedUserInfo.birthday));
      dispatch(saveGender(savedUserInfo.gender));
    }
  }, []);

  if (mutation.isLoading) {
    return <div>Loading...</div>;
  }

  if (mutation.isError) {
    toast((t) => (
      <span style={{ fontSize: "1.6rem" }}>
        ❌ Email or password is incorrect
      </span>
    ));
  }

  if (mutation.isSuccess) {
    console.log("Get data successfully!");
  }

  function signInSubmission(data) {
    mutation.mutate(data);
    console.log(data);

    setSignIn(false);
  }

  function handleNavigateRegister() {
    setSignIn(false);
    setSignUp(true);
  }

  return (
    <>
      {signIn && (
        <Modal>
          <div className={styles.container}>
            <div className={styles.alignment}>
              <h1 className={styles.h1}>Đăng nhập Airbnb</h1>

              <form onSubmit={handleSubmit(signInSubmission)}>
                {[
                  {
                    label: "Email",
                    type: "email",
                    register: "email",
                    holder: "Vui lòng nhập tài khoản",
                  },
                  {
                    label: "Mật khẩu",
                    type: "password",
                    register: "password",
                    holder: "Vui lòng nhập mật khẩu",
                  },
                ].map((item, index) => (
                  <div className={styles.fieldContainer} key={index}>
                    <label className={styles.label}>{item.label}</label>

                    <Controller
                      name={item.register}
                      control={control} // Lấy từ useForm
                      defaultValue=""
                      render={({ field }) => (
                        <input
                          {...field} // Đặt giá trị input từ field của Controller
                          type={item.type}
                          placeholder={item.holder}
                          className={styles.input}
                          // value={}
                        />
                      )}
                    />
                  </div>
                ))}

                <button className={styles.signInButton} type="submit">
                  Đăng nhập
                </button>

                <div className={styles.createAccountContainer}>
                  <button
                    onClick={() => handleNavigateRegister()}
                    className={styles.createAccount}
                  >
                    Tạo tài khoản
                  </button>
                </div>
              </form>

              <button
                className={styles.closeButton}
                onClick={() => setSignIn(false)}
              >
                <CloseButton fill="black" stroke="black" />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default SignIn;
