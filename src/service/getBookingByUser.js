import { useQuery } from "@tanstack/react-query";
import apiToken from "../config/apiConfig";

/* eslint-disable no-unused-vars */
export async function getBookingByUser(id) {
  try {
    const response = await fetch(
      `https://airbnbnew.cybersoft.edu.vn/api/dat-phong/lay-theo-nguoi-dung/${id}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          tokenCybersoft: apiToken,
        },
      }
    );

    if (!response.ok) throw new Error(`Error: ${response.status}`);

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useGetBookingByUser(id) {
  return useQuery({
    queryKey: ["idUser", id],
    queryFn: () => getBookingByUser(id),
    enabled: !!id,
    cacheTime: 5000,
    staleTime: 5000,
  });
}
