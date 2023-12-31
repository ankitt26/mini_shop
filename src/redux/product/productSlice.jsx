import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const FetchProducts = createAsyncThunk("fetch products", async () => {
  const url = "https://dummyjson.com/products/";
  try {
    const response = await axios.get(url);
    const data = response.data.products;
    return data;
  } catch (error) {
    console.error("Something went wrong! :", error);
  }
});

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    cart: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart += action.payload;
    },
    searchItem: (state, action) => {
      const newprod = state.products.filter(
        (prod) =>
          prod.brand.toLowerCase().includes(action.payload.toLowerCase()) ||
          prod.title.toLowerCase().includes(action.payload.toLowerCase()) ||
          prod.category.toLowerCase().includes(action.payload.toLowerCase()),
      );
      return {
        ...state,
        products: newprod,
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(FetchProducts.pending, (state) => ({
      ...state,
      isLoading: true,
      error: undefined,
    }));
    builder.addCase(FetchProducts.rejected, (state) => ({
      ...state,
      isLoading: false,
      error: true,
    }));
    builder.addCase(FetchProducts.fulfilled, (state, action) => ({
      ...state,
      products: action.payload,
      isLoading: false,
      error: undefined,
    }));
  },
});

export default ProductSlice.reducer;
export { FetchProducts };
export const { addToCart, searchItem } = ProductSlice.actions;
