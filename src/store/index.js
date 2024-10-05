/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import addGuestReducer from "./slices/addingGuestSlice";
import addGuestInRoomReducer from "./slices/addingGuestInRoomDetail";

const store = configureStore({
  reducer: {
    addGuest: addGuestReducer,
    addGuestInRoom: addGuestInRoomReducer,
  },
});

export default store;
