/* eslint-disable no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import addGuestReducer from "./slices/addingGuestSlice";
import addGuestInRoomReducer from "./slices/addingGuestInRoomDetail";
import storeInformationReducer from "./slices/storeUserInformation";

const store = configureStore({
  reducer: {
    addGuest: addGuestReducer,
    addGuestInRoom: addGuestInRoomReducer,
    storeInformation: storeInformationReducer,
  },
});

export default store;
