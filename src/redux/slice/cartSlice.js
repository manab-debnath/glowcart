import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cartProducts: [],
		totalQuantity: 0,
		totalPrice: 0,
	},
	reducers: {
		addToCart: (state, action) => {
			// console.log("state cartProducts", current(state.cartProducts));

			const newItem = action.payload;
			const itemIndex = state.cartProducts.findIndex(
				(item) => item.id === newItem.id
			);

			if (itemIndex !== -1) {
				state.cartProducts[itemIndex].quantity++;
				state.cartProducts[itemIndex].totalPrice += newItem.price; // product total price (quantity * productPrice)
			} else {
				console.log("Executed");

				state.cartProducts.push({
					id: newItem.id,
					name: newItem.name,
					price: newItem.price,
					quantity: newItem?.quantity || 1,
					totalPrice: newItem.price * (newItem?.quantity || 1),
					image: newItem.image,
				});
			}

			state.totalPrice += (newItem.price * (newItem?.quantity || 1)); //	total cart price (sum of all product price)
			state.totalQuantity += (newItem?.quantity || 1);
		},
		increaseQuantity: (state, action) => {
			const item = action.payload;

			const itemIndex = state.cartProducts.findIndex(
				(product) => product.id === item.id
			);

			state.cartProducts[itemIndex].quantity++;
			state.cartProducts[itemIndex].totalPrice += item.price; // product total price (quantity * productPrice)
			state.totalPrice += item.price; //	total cart price (sum of all product price)
			state.totalQuantity++;
		},
		decreaseQuantity: (state, action) => {
			const item = action.payload;

			const itemIndex = state.cartProducts.findIndex(
				(product) => product.id === item.id
			);

			state.cartProducts[itemIndex].quantity--;
			state.cartProducts[itemIndex].totalPrice -= item.price; // product total price (quantity * productPrice)
			state.totalPrice -= item.price; //	total cart price (sum of all product price)
			state.totalQuantity--;
		},
		removeFromCart: (state, action) => {
			const item = action.payload;

			const itemIndex = state.cartProducts.findIndex(
				(product) => product.id === item.id
			);

			state.totalPrice -= item.totalPrice;
			state.totalQuantity -= item.quantity;

			/* state.cartProducts = state.cartProducts.filter(
				(product) => product.id !== item.id
			); */

			state.cartProducts.splice(itemIndex, 1);
		},
		resetCart: (state) => {
			state.cartProducts = [];
			state.totalPrice = 0;
			state.totalQuantity = 0;
		},
	},
});

export const {
	addToCart,
	increaseQuantity,
	decreaseQuantity,
	removeFromCart,
	resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
