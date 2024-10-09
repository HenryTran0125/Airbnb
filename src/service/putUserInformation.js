import { useMutation } from "@tanstack/react-query";
import apiToken from "../config/apiConfig";

/* eslint-disable no-unused-vars */
export async function putUserInformation(user) {
  const { id, name, email, phone, birthday, gender } = user;

  const userInformation = {
    id,
    name,
    email,
    phone,
    birthday,
    gender,
  };

  const response = await fetch(
    `https://airbnbnew.cybersoft.edu.vn/api/users/${id}`,
    {
      method: "PUT",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        tokenCybersoft: apiToken,
      },
      body: JSON.stringify(userInformation),
    }
  );

  const data = await response.json();

  return data;
}

export function usePutUserInformation() {
  return useMutation({
    mutationKey: ["information"],
    mutationFn: (user) => putUserInformation(user),

    onSuccess: (data) => {
      console.log("Put data successfully: ", data);
    },

    onError: (error) => {
      console.error(error.message);
    },
  });
}
