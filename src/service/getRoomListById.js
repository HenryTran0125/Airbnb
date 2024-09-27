import { useQuery } from "@tanstack/react-query";
import apiToken from "../config/apiConfig";

/* eslint-disable no-unused-vars */
async function getRoomListById(id) {
  try {
    const response = await fetch(
      `https://airbnbnew.cybersoft.edu.vn/api/phong-thue/lay-phong-theo-vi-tri?maViTri=${id}`,
      {
        headers: {
          accept: "application/json",
          tokenCybersoft: apiToken,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export function useGetRoomListById(id) {
  return useQuery({
    queryKey: ["Id", id],
    queryFn: () => getRoomListById(id),
    staleTime: 300000,
    refetchOnWindowFocus: true,
    retry: 1,
  });
}
