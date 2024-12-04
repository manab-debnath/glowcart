import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = ({ order }) => {
  const navigate = useNavigate();

	return (
		<div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
			<h2 className="text-2xl font-semibold mb-4">Thank you for your order</h2>
			<p>
				Your order has been placed successfully you will receive an email
				confirmation
			</p>
			<div className="mt-6 p-4 border rounded-lg bg-gray-100">
				<h3 className="text-lg font-semibold mb-2">Order Summary</h3>
				{/* <p>Order Number: {order.orderNumber}</p> */}
				<div className="mt-4">
					<h2 className="text-md font-semibold mb-2">Shipping Information</h2>
					<p>{order.shippingInformation.address}</p>
					<p>{order.shippingInformation.city}</p>
					<p>{order.shippingInformation.zip}</p>orderNumber
				</div>
				<div className="mt-4">
					<h4 className="text-md font-semibold mb-2">Items Ordered</h4>
					{order.products.map((product) => (
						<div key={product.id} className="flex justify-between mt-2">
							<p>
								{product.name} X {product.quantity}
							</p>
							<p>${(product.price * product.quantity).toFixed(2)}</p>
						</div>
					))}
				</div>
				<div className="mt-6 flex justify-between">
					<span>Total Price:</span>
					<span className="font-semibold">${(order.totalPrice).toFixed(2)}</span>
				</div>
				<div className="mt-6">
					<Button className="bg-green-500 hover:bg-green-600">Track Order</Button>
					<Button className="ml-4" onClick={() => navigate("/shop")}>Continue Shopping</Button>
				</div>
			</div>
		</div>
	);
};

export default OrderConfirmation;
