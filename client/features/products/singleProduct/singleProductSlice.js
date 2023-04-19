import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const singleProduct = createSlice({
  name: "singleProduct",
  initialState: {
    product: {},
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
  extraReducers: {
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export const { setProduct } = singleProduct.actions;

export default singleProduct.reducer;
