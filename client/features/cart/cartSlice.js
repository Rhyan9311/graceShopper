import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToCartAsync = createAsyncThunk("addToCart", async (product) => {
  const { data } = await axios.post("/api/users/:id", product);
  return data;
});

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push(action.payload);
      }
      // localStorage.setItem("cartItems", JSON.stringify(state));
      return state;
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
      // state.splice(action.payload, 1);
      // // localStorage.setItem("cartItems", JSON.stringify(state));
      // return state;
    },
    clearCart: (state) => {
      return [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state));
    });
    //.addCase(removeFromCart.fulfilled, (state, action) => {
    // state.splice(action.payload, 1);
    // localStorage.setItem("cartItems", JSON.stringify(state));
    // })
    //.addCase(removeFromCart.rejected, (state, action) => {
    // state.splice(action.payload, 1);
    // localStorage.setItem("cartItems", JSON.stringify(state));
    // });
  },
  // extraReducers: {
  //   [addToCart.pending]: (state, action) => {
  //     state.push(action.payload);
  //     // localStorage.setItem("cartItems", JSON.stringify(state));
  //     },
  //   [addToCart.rejected]: (state, action) => {
  //     state.push(action.payload);
  //     // localStorage.setItem("cartItems", JSON.stringify(state));
  //     },
  // },
  // },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
