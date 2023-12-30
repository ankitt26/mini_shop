import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://dummyjson.com/auth/login";
const FetchUser = createAsyncThunk("Fetch User", async (credentials) => {
  console.log(credentials);
  try {
    const response = await axios.post(url, credentials);
    const { data } = response;
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Something went wrong! :", error);
  }
});

const LoginSlice = createSlice({
  name: "Login",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(FetchUser.pending, (state) => ({
      ...state,
      isLoading: true,
      error: undefined,
    }));
    builder.addCase(FetchUser.rejected, (state) => ({
      ...state,
      isLoading: false,
      error: true,
    }));
    builder.addCase(FetchUser.fulfilled, (state, action) => ({
      ...state,
      data: action.payload,
      isLoading: false,
      error: undefined,
    }));
  },
});

export default LoginSlice.reducer;
export { FetchUser };
