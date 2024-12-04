import { HandCoins, Headset, Lock, Tag, Truck } from "lucide-react";
import React from "react";

const infoItems = [
	{
		title: "Free Shipping",
		description: "Get your order delivered with no extra cost",
		icon: <Truck size={32} color="#2563eb" />,
	},
	{
		title: "Support 24/7",
		description: "We are here to assist you anytime",
		icon: <Headset size={32} color="#2563eb" />,
	},
	{
		title: "100% Money Back",
		description: "Full refund if you are not satisfied",
		icon: <HandCoins size={32} color="#2563eb" />,
	},
	{
		title: "Payment Secure",
		description: "Your payment information is safe with us",
		icon: <Lock size={32} color="#2563eb" />,
	},
	{
		title: "Discount",
		description: "Enjoy the best prices on our products",
		icon: <Tag size={32} color="#2563eb" />,
	},
];

const InfoSection = () => {
	return (
		<div className="bg-white pb-8 pt-12">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
				{infoItems.map((item, index) => (
					<div
						key={index}
						className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer"
					>
						{item.icon}
						<h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
						<p className="mt-2 text-gray-600">{item.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default InfoSection;
