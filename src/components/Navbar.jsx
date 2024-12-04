import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { CircleUserRound, Search, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { navigationItem } from "./data";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Auth from "./Auth";
import { setSearchTerm } from "@/redux/slice/productSlice.js";

const Navbar = () => {
	const cartQuantity = useSelector((state) => state.cart.totalQuantity);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [isOpen, setIsOpen] = useState(false); // State to toggle hamburger menu
	const dispatch = useDispatch();
	const navigate = useNavigate("/filter-data");

	const handleSearch = (e) => {
		e.preventDefault();
		dispatch(setSearchTerm(search));
		navigate("/filter-data");
	};

	return (
		<nav className="bg-white shadow-md">
			<div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
				{/* Logo */}
				<div className="text-lg font-bold">
					<Link to="/"> GlowCart </Link>
				</div>

				{/* Search Bar (hidden on smaller devices) */}
				<div className="relative flex-1 mx-4 hidden md:block">
					<form onSubmit={handleSearch}>
						<Input
							type="text"
							placeholder="Search Product"
							className="w-full"
							onChange={(e) => setSearch(e.target.value)}
						/>
						<Search className="absolute top-2 right-3" />
					</form>
				</div>

				{/* Cart & Buttons */}
				<div className="flex items-center space-x-4">
					<Link to="/cart" className="relative">
						{cartQuantity > 0 && (
							<span className="absolute bottom-3 left-2 w-7 h-7 flex items-center justify-center text-xs text-white bg-blue-600 rounded-full">
								{cartQuantity > 100 ? "99+" : cartQuantity}
							</span>
						)}
						<ShoppingCart className="text-lg" />
					</Link>

					{/* Button for larger devices */}
					<Button
						className="hidden md:block bg-blue-600 rounded-3xl hover:bg-blue-700 transform transition-transform duration-300 hover:scale-105"
						onClick={(e) => setIsModalOpen(true)}
					>
						Login | Register
					</Button>

					{/* Icon Button for smaller devices */}
					<div className="block md:hidden">
						<button
							className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-transform duration-300 hover:scale-105"
							onClick={(e) => setIsModalOpen(true)}
						>
							<CircleUserRound size={20} />
						</button>
					</div>

					{/* Hamburger Menu */}
					<div className="md:hidden">
						<button onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			<div
				className={`md:hidden flex flex-col items-center space-y-4 bg-blue-50 py-4 transition-transform duration-300 ease-in-out ${
					isOpen ? "block" : "hidden"
				}`}
			>
				{/* Search Bar */}
				<form onSubmit={handleSearch} className="w-full px-4">
					<Input
						type="text"
						placeholder="Search Product"
						className="w-full"
						onChange={(e) => setSearch(e.target.value)}
					/>
				</form>

				{/* Navigation Links */}
				{navigationItem.map((item) => (
					<NavLink
						key={item.name}
						to={item.path}
						className={({ isActive }) =>
							`w-4/5 py-2 text-center rounded-3xl transition-colors duration-300 ease-in-out ${
								isActive ? "bg-blue-600 text-white" : ""
							}`
						}
						onClick={() => setIsOpen(false)} // Close menu after clicking a link
					>
						{item.name}
					</NavLink>
				))}
			</div>

			{/* Desktop Navigation Links */}
			<div className="hidden md:flex items-center justify-center space-x-10 py-4 text-sm font-bold">
				{navigationItem.map((item) => (
					<NavLink
						key={item.name}
						to={item.path}
						className={({ isActive }) =>
							`w-20 py-1 text-center rounded-3xl transition-colors duration-300 ease-in-out ${
								isActive ? "bg-blue-600 text-white" : ""
							}`
						}
					>
						{item.name}
					</NavLink>
				))}
			</div>

			{/* Modal */}
			<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
				<Auth />
			</Modal>
		</nav>
	);
};

export default Navbar;
