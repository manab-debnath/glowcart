import { Input } from "@/components/ui/input";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import RazorpayLogo from "../assets/Images/razorpay.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../redux/slice/cartSlice.js";

const Checkout = ({ setOrder }) => {
	const [paymentMethod, setPaymentMethod] = useState("cod");
	const [shippingInfo, setShippingInfo] = useState({
		address: "",
		city: "",
		zip: "",
	});
	const cart = useSelector((state) => state.cart);
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const handleOrder = (e) => {
		e.preventDefault();

		const newOrder = {
			products: cart.cartProducts,
			totalPrice: cart.totalPrice,
			orderNumber: "1234",
			shippingInformation: shippingInfo,
		};

		setOrder(newOrder);
		navigate("/order-confirmation");

		dispatch(resetCart());
	};

	return (
		<div className="container mx-auto py-8 min-h-96 px-4 md:px-8 lg:px-16">
			<div>
				<h3 className="text-2xl font-semibold mb-4">Checkout</h3>
				<div className="flex flex-col lg:flex-row justify-between lg:space-x-10 mt-8">
					{/* Left Section */}
					<div className="w-full lg:w-2/3 mb-6 lg:mb-0">
						<Accordion type="single" collapsible>
							{/* Billing Info */}
							<AccordionItem value="billing">
								<AccordionTrigger>
									<h3 className="text-lg font-semibold">Billing Information</h3>
								</AccordionTrigger>
								<AccordionContent>
									<div className="p-4 border rounded">
										<Label htmlFor="name" className="text-lg text-gray-700">
											Name
										</Label>
										<Input
											id="name"
											placeholder="Enter name"
											type="text"
											className="mb-4 mt-3"
											required
										/>
										<Label htmlFor="email" className="text-lg text-gray-700">
											Email
										</Label>
										<Input
											id="email"
											placeholder="Enter email"
											type="email"
											className="mb-4 mt-3"
											required
										/>
										<Label htmlFor="phone" className="text-lg text-gray-700">
											Phone No
										</Label>
										<Input
											id="phone"
											placeholder="Enter phone no"
											type="phone"
											className="mb-2 mt-3"
											required
										/>
									</div>
								</AccordionContent>
							</AccordionItem>

							{/* Shipping Info */}
							<AccordionItem value="shipping">
								<AccordionTrigger>
									<h3 className="text-lg font-semibold">
										Shipping Information
									</h3>
								</AccordionTrigger>
								<AccordionContent>
									<div className="p-4 border rounded">
										<Label htmlFor="address" className="text-lg text-gray-700">
											Address
										</Label>
										<Input
											id="address"
											placeholder="Enter Your Address"
											type="address"
											className="mb-4 mt-3"
											onChange={(e) =>
												setShippingInfo({
													...shippingInfo,
													address: e.target.value,
												})
											}
										/>
										<Label htmlFor="city" className="text-lg text-gray-700">
											City
										</Label>
										<Input
											id="city"
											placeholder="Enter City"
											type="city"
											className="mb-4 mt-3"
											onChange={(e) =>
												setShippingInfo({
													...shippingInfo,
													city: e.target.value,
												})
											}
										/>
										<Label htmlFor="zip" className="text-lg text-gray-700">
											Zip code
										</Label>
										<Input
											id="zip"
											placeholder="Enter Zip-Code"
											type="zipcode"
											className="mb-2 mt-3"
											onChange={(e) =>
												setShippingInfo({
													...shippingInfo,
													zip: e.target.value,
												})
											}
										/>
									</div>
								</AccordionContent>
							</AccordionItem>

							{/* Payment Method */}
							<AccordionItem value="payment">
								<AccordionTrigger>
									<h3 className="text-lg font-semibold">Payment Method</h3>
								</AccordionTrigger>
								<AccordionContent>
									<RadioGroup
										onValueChange={(value) => setPaymentMethod(value)}
									>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="cod" id="cod" />
											<Label htmlFor="cod" className="text-base">
												Cash on delivery
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="razorpay" id="razorpay" />
											<Label
												htmlFor="razorpay"
												className="text-xl italic font-bold text-[#072654] flex items-center justify-center"
											>
												<img src={RazorpayLogo} alt="" className="w-4" />
												Razorpay
											</Label>
										</div>
										<div className="flex items-center space-x-2">
											<RadioGroupItem value="stripe" id="stripe" />
											<Label
												htmlFor="stripe"
												className="text-lg font-semibold text-[#635bff]"
											>
												stripe
											</Label>
										</div>
									</RadioGroup>
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>

					{/* Right Section */}
					<div className="w-full lg:w-1/3 bg-white p-4 md:p-6 rounded-lg shadow-md border">
						<h3 className="text-lg font-semibold mb-4">Order Summary</h3>
						<div className="space-y-4">
							{cart.cartProducts.map((product) => (
								<div key={product.id} className="flex justify-between">
									<div className="flex items-center">
										<img
											src={product.image}
											alt={product.name}
											className="w-12 h-12 md:w-16 md:h-16 object-contain rounded"
										/>
										<div className="ml-2 md:ml-4">
											<h4 className="text-sm md:text-md font-semibold">
												{product.name}
											</h4>
											<p className="text-gray-600 text-sm">
												${product.price} X {product.quantity}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="mt-4 border-t pt-4">
							<div className="flex justify-between">
								<span>Total Price</span>
								<span className="font-semibold">
									${cart.totalPrice.toFixed(2)}
								</span>
							</div>
						</div>
						<button
							className="w-full bg-blue-600 text-white py-2 mt-6 hover:bg-blue-800"
							onClick={handleOrder}
						>
							Place Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
