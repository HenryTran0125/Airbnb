/* eslint-disable no-unused-vars */
import { useMutation } from "@tanstack/react-query";
import apiToken from "../config/apiConfig";

export async function postUserAccount(userAccount) {
  const { email, password } = userAccount;

  const dataInformation = {
    email,
    password,
  };

  const response = await fetch(
    `https://airbnbnew.cybersoft.edu.vn/api/auth/signin`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        tokenCybersoft: apiToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataInformation),
    }
  );

  if (!response.ok) throw new Error(`HTTP Error! status: ${response.status}`);

  const data = await response.json();

  return data;
}

export function usePostUserAccount() {
  return useMutation({
    mutationKey: ["account"],
    mutationFn: (userAccount) => postUserAccount(userAccount),

    onSuccess: (data) => {
      // setUserData(data);0
      console.log(`Congratulations!, You get data: `, data);
    },

    onError: (error) => {
      console.error(`Error: ${error.message}`);
    },
  });
}
