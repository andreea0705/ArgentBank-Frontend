import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import profileSlice from "../features/profileSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice,
  },
});
