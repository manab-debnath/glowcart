import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Star = ({ totalReviews, averageRating }) => {
	const ratingStar = Array.from({ length: 5 }, (_, index) => {
		let number = index + 0.5;
        
        // debugger;
		return (
			<span key={index}>
				{averageRating >= index + 1 ? (
					<FaStar className="text-yellow-500"/>
				) : averageRating >= number ? (
					<FaStarHalfAlt className="text-yellow-500"/>
				) : (
					<FaRegStar className="text-yellow-500"/>
				)}
			</span>
		);
	});

	return (
		<div className="flex">
			{ratingStar}
		</div>
	);
};

export default Star;
