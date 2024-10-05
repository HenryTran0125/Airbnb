import { useQuery } from "@tanstack/react-query";
import apiToken from "../config/apiConfig";

/* eslint-disable no-unused-vars */
async function getUser() {
  try {
    const response = await fetch(
      `https://airbnbnew.cybersoft.edu.vn/api/users`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          tokenCybersoft: apiToken,
        },
      }
    );

    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useGetInformation() {
  return useQuery({
    queryKey: ["Information"],
    queryFn: () => getUser(),
    staleTime: 0,
    cacheTime: 0,
    refetchOnWindowFocus: true,
    retry: 1,
  });
}
