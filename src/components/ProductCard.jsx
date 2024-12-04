import React, { useEffect } from "react";
import { addToCart } from "../redux/slice/cartSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Star } from "lucide-react";
import Star from "./Star.jsx";

const ProductCard = ({ product }) => {
	const dispatch = useDispatch();
	// const products = useSelector(state => state.product.products);
	// console.log("state ", products);

	function handleAddToCart(e, product) {
		e.stopPropagation();
		e.preventDefault();

		dispatch(addToCart(product));
		// alert("Product Added Successfully");
	}

	return (
		<Link to={`/product/${product.id}`}>
			<div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105 cursor-pointer">
				<img
					src={product.image}
					alt=""
					className="w-full h-48 object-contain mb-4"
				/>
				<h3 className="text-lg font-semibold">{product.name}</h3>
				<p className="text-gray-500">${product.price}</p>
				<div className="flex items-center mt-2">
					<Star
						totalReviews={product.totalReviews}
						averageRating={product.averageRating}
					/>
				</div>
				<div
					className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-blue-600 group text-white text-sm rounded-full hover:w-32 hover:bg-blue-700 transition-all"
					onClick={(e) => handleAddToCart(e, product)}
				>
					<span className="group-hover:hidden">+</span>
					<span className="hidden group-hover:block">Add to cart</span>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
