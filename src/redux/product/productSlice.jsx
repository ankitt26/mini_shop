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
    searchedItem: [],
    cart: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart += action.payload;
    },
    searchItem: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.searchedItem = state.products.filter(
        (prod) =>
          prod.brand.toLowerCase().includes(searchTerm) ||
          prod.title.toLowerCase().includes(searchTerm) ||
          prod.category.toLowerCase().includes(searchTerm),
      );
    },
    priceFilter: (state, action) => {
      let minPrice = parseInt(action.payload[0]);
      let maxPrice = parseInt(action.payload[1]);

      state.products = state.products.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice,
      );
    },
    lowToHighPrice: (state) => {
      state.products = state.products.slice().sort((a, b) => a.price - b.price);
    },
    highToLowPrice: (state) => {
      state.products = state.products.slice().sort((a, b) => b.price - a.price);
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
export const {
  addToCart,
  searchItem,
  priceFilter,
  highToLowPrice,
  lowToHighPrice,
} = ProductSlice.actions;
