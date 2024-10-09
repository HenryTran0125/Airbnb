import { useMutation } from "@tanstack/react-query";
import apiToken from "../config/apiConfig";

/* eslint-disable no-unused-vars */
export async function postUserInformation(userInformation) {
  const { name, email, password, phone, birthOfDate, gender } = userInformation;

  const userData = {
    id: 0,
    name,
    email,
    password,
    phone,
    birthDay: birthOfDate,
    gender,
    role: "USER",
  };

  const response = await fetch(
    `https://airbnbnew.cybersoft.edu.vn/api/auth/signup`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        tokenCybersoft: apiToken,
      },
      body: JSON.stringify(userData),
    }
  );

  if (!response.ok) throw new Error(`HTTP Error! status: ${response.status}`);

  const data = await response.json();

  return data;
}

export function usePostUserInformation() {
  return useMutation({
    mutationKey: ["postInformation"],

    mutationFn: (userInformation) => postUserInformation(userInformation),

    onSuccess: (data) => {
      // Thực hiện hành động khi POST thành công
      console.log("Success! User information posted:", data);
      //   alert("User successfully signed up!");
    },

    onError: (error) => {
      // Thực hiện hành động khi có lỗi xảy ra
      // console.error("Error:", error.message);
      // alert(`Error occurred: ${error.message}`);
    },
  });
}
