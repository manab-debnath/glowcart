import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";
import { useSelector } from "react-redux";
import { Label } from "@/components/ui/label.jsx";
import Loading from "@/components/Loading.jsx";
import { Outlet } from "react-router-dom";

const categories = ["Men", "Women", "Kids"];

const Shop = () => {
	const products = useSelector((state) => state.product);
	const [sortType, setSortType] = useState("relevant");
	const [category, setCategory] = useState([]);
	const [filterProducts, setFilterProducts] = useState([]);

	useEffect(() => {
		if (products.products.length) {
			setFilterProducts(products.products);
		}
	}, [products.products]);

	// sort product based on price
	const sortProduct = () => {
		let fpCopy = filterProducts.slice();

		switch (sortType) {
			case "low-high":
				setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
				break;
			case "high-low":
				setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
				break;
			default:
				applyFilter();
				break;
		}
	};

	// toggle Category
	const toggleCategory = (value) => {
		if (category.includes(value)) {
			setCategory((prev) => prev.filter((item) => item !== value));
		} else {
			setCategory((prev) => [...prev, value]);
		}
	};

	// filter products
	const applyFilter = () => {
		let productCopy = products.products.slice();

		if (category.length > 0) {
			productCopy = productCopy.filter((item) =>
				category.includes(item.category)
			);
		}

		setFilterProducts(productCopy);
	};

	useEffect(() => {
		applyFilter();
	}, [category]);

	useEffect(() => {
		sortProduct();
	}, [sortType]);

	// console.log(products.products);

	if (filterProducts.length)
		return (
			<div className="mx-auto py-12 px-4 md:px-16 lg:px-24 flex flex-col md:flex-row gap-4">
				<div className="w-full md:w-3/12 flex flex-col gap-4">
					<div className="bg-blue-600 text-white text-xs font-bold px-2 py-2.5">
						FILTERS
					</div>
					<ul className="space-y-4 bg-gray-100 p-3 border">
						{categories.map((item, id) => (
							<li key={id} className="flex gap-2 items-center font-medium">
								<input
									type="checkbox"
									value={item}
									id={item}
									className="w-4 h-4 rounded border border-gray-950 checked:border-blue-500 checked:bg-blue-500 hover:none"
									onChange={() => toggleCategory(item)}
								/>
								<Label className="text-sm" htmlFor={item}>
									{item}
								</Label>
							</li>
						))}
					</ul>

					{/* Sort by price */}
					<div className="w-full">
						<select
							name=""
							id=""
							className="w-full"
							onChange={(e) => setSortType(e.target.value)}
						>
							<option value="relevant">Sort by: Relevant</option>
							<option value="low-high">Sort by: Low to High</option>
							<option value="high-low">Sort by: High to Low</option>
						</select>
					</div>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{filterProducts?.map((product, index) => (
						<ProductCard product={product} key={index} />
					))}
				</div>
				{/* <Outlet filterProducts={filterProducts} products={products.products} /> */}
			</div>
		);

	return <Loading />;
};

export default Shop;
