import { useQuery } from "@tanstack/react-query";
import apiToken from "../config/apiConfig";

/* eslint-disable no-unused-vars */
export async function getRoomInformationInDashboard(roomIds) {
  try {
    const promises = roomIds.map((id) =>
      fetch(`https://airbnbnew.cybersoft.edu.vn/api/phong-thue/${id}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          tokenCybersoft: apiToken,
        },
      }).then((response) => response.json())
    );

    const result = await Promise.all(promises);

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useGetRoomInformationInDashboard(roomIds) {
  return useQuery({
    queryKey: ["Id", roomIds],
    queryFn: () => getRoomInformationInDashboard(roomIds),
    staleTime: 0,
    cacheTime: 0,
    retry: 1,
    refetchOnWindowFocus: true,
    enabled: !!roomIds,
  });
}
