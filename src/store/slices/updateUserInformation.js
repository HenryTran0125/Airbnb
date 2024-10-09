/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const updateInformation = createSlice({
  name: "updateInfo",
  initialState: {
    name: undefined,
    email: undefined,
    id: undefined,
    phone: undefined,
    birthday: undefined,
    gender: undefined,
    password: undefined,
  },
  reducers: {
    updateUserName: (state, action) => {
      console.log(action.payload);
      state.name = action.payload;
    },

    updateEmail: (state, action) => {
      console.log(action.payload);
      state.email = action.payload;
    },

    updateId: (state, action) => {
      console.log(action.payload);
      state.id = action.payload;
    },
    updatePhone: (state, action) => {
      console.log(action.payload);
      state.phone = action.payload;
    },
    updateBirthday: (state, action) => {
      console.log(action.payload);
      state.birthday = action.payload;
    },
    updateGender: (state, action) => {
      console.log(action.payload);
      state.gender = action.payload;
    },
    updatePassword: (state, action) => {
      console.log(action.payload);
      state.password = action.payload;
    },
  },
});

export const {
  updateUserName,
  updateEmail,
  updateId,
  updatePhone,
  updateBirthday,
  updateGender,
  updatePassword,
} = updateInformation.actions;
export default updateInformation.reducer;
