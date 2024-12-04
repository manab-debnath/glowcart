import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
	initialState: {
		products: [],
		searchTerm: "",
		filterData: [],
	},
	name: "product",
	reducers: {
		setProducts: (state, action) => {
			state.products = action.payload;
		},
		setSearchTerm: (state, action) => {
			state.searchTerm = action.payload;
			state.filterData = state.products.filter((product) =>
				product.name.toLowerCase().includes(state.searchTerm.toLowerCase())
			);
		},
	},
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
