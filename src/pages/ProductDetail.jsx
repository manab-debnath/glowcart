import { MessageCircleQuestion, Truck } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/slice/cartSlice.js";
import Star from "@/components/Star.jsx";
import Loading from "@/components/Loading.jsx";

const ProductDetail = () => {
	const { productId } = useParams();
	const products = useSelector((state) => state.product.products);
	const [product, setProduct] = useState();
	const [quantity, setQuantity] = useState(1);
	const dispatch = useDispatch();

	useEffect(() => {
		const newProduct = products.find(
			(product) => product.id === parseInt(productId)
		);

		setProduct(newProduct);
	}, [productId, products]);

	const handleAddToCart = (product, quantity) => {
		const cartItem = {
			...product,
			quantity,
		};

		dispatch(addToCart(cartItem));
	};

	if (!product) return <Loading />;

	return (
		<div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
			<div className="flex flex-col md:flex-row gap-x-16">
				{/* Product Image */}
				<div className="md:w-1/2 py-4 shadow-md md:px-8 h-96 flex justify-center">
					<img src={product.image} alt={product.name} className="h-full" />
				</div>

				{/* Product Information */}
				<div className="md:w-1/2 p-4 shadow-md md:p-16 lg:p-4 flex flex-col items-center gap-y-2">
					<h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
					<div className="w-full flex flex-row gap-2 items-center justify-center">
						<Star
							totalReviews={product.totalReviews}
							averageRating={product.averageRating}
						/>
						<p>({product.totalReviews}) customer reviews</p>
					</div>

					<p className="text-xl font-semibold text-gray-800 mb-4">
						${product.price}
					</p>
					<div className="flex items-center mb-4 gap-x-2">
						<input
							type="number"
							id="quantity"
							min="1"
							value={quantity}
							className="border p-1 w-16"
							onChange={(e) =>
								setQuantity(Math.max(1, parseInt(e.target.value)) || 1)
							}
						/>
						<button
							className="bg-blue-600 text-white py-1.5 px-4 hover:bg-blue-800"
							onClick={() => handleAddToCart(product, quantity)}
						>
							Add to cart
						</button>
					</div>

					<div className="flex flex-col gap-y-4 mt-4">
						<p className="flex items-center">
							<Truck className="mr-1" />
							Delivery & Return
						</p>
						<p className="flex items-center">
							<MessageCircleQuestion className="mr-1" />
							Ask a Question
						</p>
					</div>
				</div>
			</div>
			<div className="mt-8">
				<h3 className="text-xl font-bold mb-2">Product Description</h3>
				<p>Product Description will go here</p>
			</div>
		</div>
	);
};

export default ProductDetail;
