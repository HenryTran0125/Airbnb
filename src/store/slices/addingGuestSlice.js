/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const addGuestSlice = createSlice({
  name: "guest",
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

export const { increment, decrement } = addGuestSlice.actions;
export default addGuestSlice.reducer;
