import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./login/loginSlice";
import productSlice from "./product/productSlice";
const Store = configureStore({
  reducer: {
    login: LoginSlice,
    products: productSlice,
  },
});

export default Store;
