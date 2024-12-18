import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";
import productSlice from "./slice/productSlice";

export const store = configureStore({
	reducer: {
		cart: cartSlice,
		product: productSlice,
	},
});
