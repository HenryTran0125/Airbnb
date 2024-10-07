import { useMutation } from "@tanstack/react-query";
import apiToken from "../config/apiConfig";

/* eslint-disable no-unused-vars */
export async function postBooking(dataBooking) {
  const { idRoom, startDate, endDate, guest, idUser, idLocation } = dataBooking;

  const bookingInformation = {
    idRoom,
    idLocation,
    startDate,
    endDate,
    guest,
    idUser,
  };

  const response = await fetch(
    `https://airbnbnew.cybersoft.edu.vn/api/dat-phong`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        tokenCybersoft: apiToken,
      },
      body: JSON.stringify(bookingInformation),
    }
  );

  if (!response.ok) throw new Error(`Error: ${response.status}`);

  const data = await response.json();

  return data;
}

export function usePostBooking() {
  return useMutation({
    mutationKey: ["dataBooking"],
    mutationFn: (dataBooking) => postBooking(dataBooking),

    onSuccess: (data) => {
      console.log(data);
    },

    onError: (error) => {
      console.error(error.message);
    },
  });
}
