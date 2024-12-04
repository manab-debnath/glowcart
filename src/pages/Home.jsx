import React, { useEffect } from "react";
import HeroImage from "../assets/Images/hero-page.png";
import { Button } from "@/components/ui/button";
import InfoSection from "../components/InfoSection.jsx";
import CategorySection from "../components/CategorySection.jsx";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard.jsx";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Loading from "@/components/Loading";

const categories = [
	"Electronics",
	"Fashion",
	"Beauty",
	"Sports",
	"Home & Kitchen",
	"Automotive",
];

const Home = () => {
	const products = useSelector((state) => state.product);
	// console.log("products ", products.products);

	if (!products) return <Loading />;

	return (
		<div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
			<div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
				<div className="w-full md:w-3/12">
					<div className="bg-blue-600 text-white text-xs font-bold px-2 py-2.5">
						SHOP BY CATEGORIES
					</div>
					<ul className="space-y-4 bg-gray-100 p-3 border">
						{categories.map((item, id) => (
							<li key={id} className="flex items-center text-sm font-medium">
								<div className="w-2 h-2 border border-blue-500 rounded-full mr-2"></div>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
					<img src={HeroImage} alt="" className="h-full w-full" />
					<div className="absolute top-16 left-8">
						<p className="text-gray-600 mb-4">GLOW-CART</p>
						<h1 className="font-bold text-3xl">WELCOME TO GLOW-CART</h1>
						<p className="text-xl mt-2.5 font-bold text-gray-800">
							MILLIONS+ PRODUCTS
						</p>
						<Button className="bg-blue-600 px-8 py-1.5 mt-4 hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105">
							SHOP NOW
						</Button>
					</div>
				</div>
			</div>
			<InfoSection />
			<CategorySection />

			<div className="container mx-auto py-12">
				<h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
					{products.products.slice(0, 5).map((product, index) => (
						<ProductCard product={product} key={index} />
					))}
				</div>
			</div>
			<Link to="/shop/category" className="flex items-center justify-center mb-6">
				<Button className="bg-blue-600 rounded-3xl hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105">
					View All <ArrowRight />
				</Button>
			</Link>
		</div>
	);
};

export default Home;
