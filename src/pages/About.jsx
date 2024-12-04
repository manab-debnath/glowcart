import React from "react";
import { useNavigate } from "react-router-dom";
import Dummy from "../assets/Images/500x400.png"

const About = () => {
	const navigate = useNavigate();

	return (
		<div className="w-full min-h-screen bg-blue-50 flex flex-col items-center py-16">
			{/* Page Header */}
			<div className="max-w-4xl text-center">
				<h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6">
					About Us
				</h1>
				<p className="text-gray-700 text-lg md:text-xl">
					Welcome to our e-commerce store! We are dedicated to bringing you the
					best products and an unparalleled shopping experience.
				</p>
			</div>

			{/* About Content Section */}
			<div className="mt-12 max-w-6xl px-6 flex flex-col lg:flex-row gap-12 items-center">
				{/* Image Section */}
				<div className="w-full lg:w-1/2">
					<img
						src={Dummy}
						alt="Our Store"
						className="w-full h-auto rounded-lg shadow-lg"
					/>
				</div>

				{/* Text Content Section */}
				<div className="w-full lg:w-1/2 flex flex-col justify-center">
					<h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
						Who We Are
					</h2>
					<p className="text-gray-700 text-base md:text-lg mb-6">
						Our journey started with a simple idea: to create a platform that
						provides high-quality products and exceptional customer service. We
						take pride in offering a wide range of products to suit every need.
					</p>
					<h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
						Our Mission
					</h2>
					<p className="text-gray-700 text-base md:text-lg">
						At the heart of our mission is a commitment to making your shopping
						experience effortless, enjoyable, and satisfying. We work tirelessly
						to ensure you find what you love with ease.
					</p>
				</div>
			</div>

			{/* Vision and Values Section */}
			<div className="mt-16 max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
				{/* Vision */}
				<div className="bg-blue-100 p-6 rounded-lg shadow-lg">
					<h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
						Our Vision
					</h3>
					<p className="text-gray-700 text-base md:text-lg">
						To be a leader in the e-commerce industry by offering unparalleled
						value, quality, and innovation.
					</p>
				</div>

				{/* Values */}
				<div className="bg-blue-100 p-6 rounded-lg shadow-lg">
					<h3 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">
						Our Values
					</h3>
					<ul className="list-disc pl-5 text-gray-700 text-base md:text-lg space-y-2">
						<li>Customer satisfaction is our top priority.</li>
						<li>Commitment to quality and excellence.</li>
						<li>Transparency, trust, and integrity.</li>
						<li>Innovating for a better shopping experience.</li>
					</ul>
				</div>
			</div>

			{/* Call to Action */}
			<div className="mt-16 max-w-4xl text-center">
				<h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
					Join Our Journey
				</h2>
				<p className="text-gray-700 text-base md:text-lg mb-6">
					Explore our collection and experience the best in online shopping.
					Thank you for choosing us!
				</p>
				<button
					className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
					onClick={() => navigate("/shop")}
				>
					Shop Now
				</button>
			</div>
		</div>
	);
};

export default About;
