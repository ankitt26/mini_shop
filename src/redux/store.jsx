import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./login/loginSlice";
const Store = configureStore({
  reducer: {
    login: LoginSlice,
  },
});

export default Store;
