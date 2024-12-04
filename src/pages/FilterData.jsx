import Loading from "@/components/Loading.jsx";
import ProductCard from "../components/ProductCard.jsx";
import React from "react";
import { useSelector } from "react-redux";

const FilterData = () => {
	const filterProducts = useSelector((state) => state.product.filterData);

	if(!filterProducts)	return <Loading />


	return (
		<div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
			{filterProducts.length <= 0 ? (
				<h1 className="text-4xl font-bold">No result found!</h1>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
					{filterProducts.map((product) => (
						<ProductCard product={product} key={product.id} />
					))}
				</div>
			)}
		</div>
	);
};

export default FilterData;
