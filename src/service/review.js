import { useQuery } from "@tanstack/react-query";
import apiToken from "../config/apiConfig";

/* eslint-disable no-unused-vars */
export async function review(roomId) {
  const response = await fetch(
    `https://airbnbnew.cybersoft.edu.vn/api/binh-luan/lay-binh-luan-theo-phong/${roomId}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        tokenCybersoft: apiToken,
      },
    }
  );

  const data = await response.json();

  return data;
}

export function useReview(roomId) {
  return useQuery({
    queryKey: ["review"],
    queryFn: () => review(roomId),
  });
}
