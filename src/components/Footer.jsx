import { Facebook, Github, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { navigationItem } from "./data.js";

const socialLink = [
	{
		name: "Facebook",
		icon: <Facebook className="hover:text-gray-400" />,
	},
	{
		name: "Twitter",
		icon: <Twitter className="hover:text-gray-400" />,
	},
	{
		name: "Github",
		icon: <Github className="hover:text-gray-400" />,
	},
	{
		name: "Linkedin",
		icon: <Linkedin className="hover:text-gray-400" />,
	},
];

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24 mt-auto">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 className="text-xl font-semibold">GlowCart</h3>
					<p className="mt-4">
						Your one-step shop for all your needs. Shop with us and experience
						the best online shopping experience.
					</p>
				</div>
				<div className="flex flex-col md:items-center">
					<h4 className="text-lg font-semibold">Quick Links</h4>
					<ul className="mt-4 space-y-2">
						{navigationItem.map((item) => (
							<li key={item.name} className="hover:underline">
								{" "}
								<Link to={item.path}> {item.name} </Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h4 className="text-xl font-semibold">Follow us</h4>
					<div className="flex space-x-4 mt-4">
						{socialLink.map((item) => (
							<a key={item.name} href="">
								{item?.icon}
							</a>
						))}
					</div>
					<form
						action=""
						className="flex items-center justify-center mt-8 [@media(min-width:768px)_and_(max-width:1024px)]:flex-col [@media(min-width:768px)_and_(max-width:1024px)]:gap-4"
					>
						<input
							type="email"
							placeholder="Your Email"
							className="w-full p-2 border border-gray-600 rounded-l-lg bg-gray-800 [@media(min-width:768px)_and_(max-width:1024px)]:rounded-lg"
						/>
						<button className="bg-blue-600 text-white px-4 py-2 border border-blue-600 rounded-r-lg [@media(min-width:768px)_and_(max-width:1024px)]:w-full [@media(min-width:768px)_and_(max-width:1024px)]:rounded-lg">
							Subscribe
						</button>
					</form>
				</div>
			</div>

			<div className="mt-8 border-t border-gray-700 pt-4">
				<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
					<p>&copy; 2024 Glow-Cart All rights reserved.</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<a href="" className="hover:underline">
							Privacy Policy
						</a>
						<a href="" className="hover:underline">
							Terms & Conditions
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
