import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../assets/Images/empty-cart.png";
import EmptyCart2 from "../assets/Images/empty_cart-512.png";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	increaseQuantity,
	decreaseQuantity,
	removeFromCart,
} from "../redux/slice/cartSlice.js";
import Modal from "../components/Modal.jsx";
import ChangeAddress from "../components/ChangeAddress";
import { Outlet, useNavigate } from "react-router-dom";

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	// increase quantity
	function handleIncreaseQuantity(e, product) {
		e.stopPropagation();
		e.preventDefault();

		dispatch(increaseQuantity(product));
	}

	// decrease quantity
	function handleDecreaseQuantity(e, product) {
		e.stopPropagation();
		e.preventDefault();

		dispatch(decreaseQuantity(product));
	}

	// remove product from cart
	function handleRemoveProduct(e, product) {
		dispatch(removeFromCart(product));
	}

	const [address, setAddress] = useState("main street, 0012");
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
			{cart.cartProducts.length > 0 ? (
				<div>
					<h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4">
						SHOPPING CART
					</h3>
					<div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-6 mt-8">
						{/* Product List */}
						<div className="lg:w-2/3 space-y-4">
							<div className="hidden md:flex justify-between border-b items-center mb-4 text-xs font-bold">
								<p>PRODUCTS</p>
								<div className="flex space-x-6 md:space-x-8">
									<p>Price</p>
									<p>Quantity</p>
									<p>Subtotal</p>
									<p>Remove</p>
								</div>
							</div>
							<div className="space-y-4">
								{cart.cartProducts.map((product) => (
									<div
										key={product.id}
										className="flex flex-col md:flex-row items-center justify-between p-3 border-b space-y-4 md:space-y-0"
									>
										{/* Product Info */}
										<div className="flex items-center space-x-4 w-full md:w-1/2">
											<img
												src={product.image}
												alt={product.name}
												className="w-16 h-16 object-contain rounded"
											/>
											<div className="flex-1">
												<h3 className="text-sm sm:text-lg font-semibold">
													{product.name}
												</h3>
											</div>
										</div>

										{/* Product Actions */}
										<div className="flex flex-wrap items-center space-x-4 sm:space-x-6">
											<p className="text-sm">${product.price}</p>
											<div className="flex items-center border rounded">
												<button
													className={`text-sm font-bold px-2 ${
														product.quantity === 0 ? "cursor-not-allowed" : ""
													}`}
													disabled={product.quantity === 0}
													onClick={(e) => handleDecreaseQuantity(e, product)}
												>
													-
												</button>
												<p className="text-sm px-2">{product.quantity}</p>
												<button
													className="text-sm px-2"
													onClick={(e) => handleIncreaseQuantity(e, product)}
												>
													+
												</button>
											</div>
											<p className="text-sm">
												${(product.quantity * product.price).toFixed(2)}
											</p>
											<button
												className="text-blue-500 hover:text-blue-700"
												onClick={(e) => handleRemoveProduct(e, product)}
											>
												<Trash2 className="w-4 h-4" />
											</button>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Cart Totals */}
						<div className="lg:w-1/3 bg-white p-4 sm:p-6 rounded-lg shadow-md border space-y-4">
							<h3 className="text-sm sm:text-base font-semibold">
								CART TOTALS
							</h3>
							<div className="flex justify-between border-b pb-2">
								<span className="text-sm">Total Items:</span>
								<span className="text-sm">{cart.totalQuantity}</span>
							</div>
							<div className="border-b pb-2 space-y-2">
								<p className="text-sm">Shipping:</p>
								<p className="text-sm">
									Shipping to <span className="font-bold">{address}</span>
								</p>
								<button
									className="text-blue-500 hover:underline text-sm"
									onClick={() => setIsModalOpen(true)}
								>
									Change Address
								</button>
							</div>
							<div className="flex justify-between">
								<span className="text-sm font-medium">Total Price:</span>
								<span className="text-sm font-medium">
									${cart.totalPrice.toFixed(2)}
								</span>
							</div>
							<Button
								className="w-full bg-gray-800 hover:bg-[#0F172A] text-sm py-2"
								onClick={() => navigate("/checkout")}
							>
								Proceed to Checkout
							</Button>
						</div>
					</div>
					<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
						<ChangeAddress
							setAddress={setAddress}
							setIsModalOpen={setIsModalOpen}
						/>
					</Modal>
				</div>
			) : (
				<div className="flex flex-col justify-center items-center h-48 md:h-full lg:h-96">
					<img
						src={EmptyCart2}
						alt="Empty Cart"
						className="h-16 sm:h-28 md:h-52 lg:h-80"
					/>
					<p className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-600">
						Your cart is empty
					</p>
					<p className="text-sm md:text-lg text-gray-400">
						Add something to make me happy :)
					</p>
				</div>
			)}
		</div>
	);
};

export default Cart;
