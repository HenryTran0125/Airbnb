/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const addingGuestInRoomDetailSlice = createSlice({
  name: "guestInRoomDetail",
  initialState: { guest: 1 },
  reducers: {
    increment: (state) => {
      state.guest += 1;
    },

    decrement: (state) => {
      state.guest -= 1;
    },
  },
});

export const { increment, decrement } = addingGuestInRoomDetailSlice.actions;
export default addingGuestInRoomDetailSlice.reducer;
