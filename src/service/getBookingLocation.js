/* eslint-disable no-unused-vars */

import { useQuery } from "@tanstack/react-query";
import apiToken from "../config/apiConfig";
export async function getBookingLocation() {
  try {
    const response = await fetch(
      "https://airbnbnew.cybersoft.edu.vn/api/vi-tri",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          tokenCybersoft: apiToken,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useLocation() {
  return useQuery({
    queryKey: ["location"],
    queryFn: () => getBookingLocation(),
    staleTime: 300000,
    refetchOnWindowFocus: true,
    retry: 1,
  });
}
