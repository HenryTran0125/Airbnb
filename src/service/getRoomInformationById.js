import { useQuery } from "@tanstack/react-query";
import apiToken from "../config/apiConfig";

/* eslint-disable no-unused-vars */
export async function getRoomInformationById(id) {
  try {
    const response = await fetch(
      `https://airbnbnew.cybersoft.edu.vn/api/phong-thue/${id}`,
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

export function useGetRoomInformationById(id) {
  return useQuery({
    queryKey: ["Id", id],
    queryFn: () => getRoomInformationById(id),
    staleTime: 0,
    cacheTime: 0,
    retry: 1,
    refetchOnWindowFocus: true,
    enabled: !!id,
  });
}
