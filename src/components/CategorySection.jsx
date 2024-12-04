import React from "react";
import MenCategory from "../assets/Images/men.jpg";
import WomenCategory from "../assets/Images/women.jpg";
import KidsCategory from "../assets/Images/kid.jpg";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
	{
		title: "Men",
		imageUrl: MenCategory,
	},
	{
		title: "Women",
		imageUrl: WomenCategory,
	},
	{
		title: "Kids",
		imageUrl: KidsCategory,
	},
];

const CategorySection = () => {
	const navigate = useNavigate();

	return (
		<div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
			{categories.map((category, index) => (
				<div
					key={index}
					className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
				>
					<img
						src={category.imageUrl}
						alt=""
						className="w-full h-full object-cover rounded-lg shadow-md"
					/>
					<div className="absolute top-20 left-12">
						<p className="text-xl font-bold">{category.title}</p>
						<p
							className="flex items-center justify-center gap-2 text-gray-600 group hover:underline"
							onClick={() => navigate("/shop/category")}
						>
							View All <ArrowRight size={16} />
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default CategorySection;
