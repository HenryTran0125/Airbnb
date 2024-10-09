/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const storeUserInformation = createSlice({
  name: "user",
  initialState: {
    name: undefined,
    email: undefined,
    id: null,
    phone: undefined,
    birthday: undefined,
    gender: undefined,
  },
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
      console.log("id: ", action.payload);
      state.id = action.payload;
    },

    savePhone: (state, action) => {
      console.log(action.payload);
      state.phone = action.payload;
    },

    saveBirthday: (state, action) => {
      console.log(action.payload);
      state.birthday = action.payload;
    },

    saveGender: (state, action) => {
      console.log(action.payload);
      state.gender = action.payload;
    },

    cleanUserInformation: (state, action) => {
      state.name = action.payload;
      state.email = action.payload;
      state.id = action.payload;
      state.phone = action.payload;
      state.birthday = action.payload;
      state.gender = action.payload;
    },
  },
});

export const {
  saveUserName,
  saveEmail,
  saveId,
  savePhone,
  saveBirthday,
  saveGender,
  cleanUserInformation,
} = storeUserInformation.actions;
export default storeUserInformation.reducer;
