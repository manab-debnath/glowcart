import Loading from "@/components/Loading";
import ProductCard from "@/components/ProductCard";
import React from "react";

const ProductCategory = ({ filterProducts, products }) => {
	console.log(filterProducts);
	console.log(products);

	if (!filterProducts?.length > 0) return <Loading />;

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{filterProducts?.map((product, index) => (
				<ProductCard product={product} key={index} />
			))}
		</div>
	);
};

export default ProductCategory;
