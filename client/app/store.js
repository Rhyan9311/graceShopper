import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../features/auth/authSlice";
import productsSlice from "../features/products/allProducts/allProductsSlice";
import singleProductSlice from "../features/products/singleProduct/singleProductSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsSlice,
    singleProduct: singleProductSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../features/auth/authSlice";
