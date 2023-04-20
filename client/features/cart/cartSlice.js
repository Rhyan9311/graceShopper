import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk("GetCart", async () => {
  const { data } = await axios.post("/api/users/:id/cart");
  return data;
});
export const addCartProduct = createAsyncThunk("addToCart", async (product) => {
  const { data } = await axios.post("/api/users/:id/cart", product);
  return data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    clearCart: (state) => {
      return {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      return Error('Trouble Fetching Your Cart');
    });
    builder.addCase(addCartProduct.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addCartProduct.rejected, (state, action) => {
      return Error('Trouble This Product to a Cart Product');    });
  },
});
export const selectCart = (state) =>{
  return state.cart;
}

export default cartSlice.reducer;
