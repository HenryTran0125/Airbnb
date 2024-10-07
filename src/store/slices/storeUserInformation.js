/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const storeUserInformation = createSlice({
  name: "userName",
  initialState: { name: undefined, email: undefined, id: undefined },
  reducers: {
    saveUserName: (state, action) => {
      console.log(action.payload);
      state.name = action.payload;
    },

    saveEmail: (state, action) => {
      console.log(action.payload);
      state.email = action.payload;
    },

    saveId: (state, action) => {
      console.log(action.payload);
      state.id = action.payload;
    },
  },
});

export const { saveUserName, saveEmail, saveId } = storeUserInformation.actions;
export default storeUserInformation.reducer;
