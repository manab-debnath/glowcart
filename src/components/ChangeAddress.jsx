import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const ChangeAddress = ({ setAddress, setIsModalOpen }) => {
	const [newAddress, setNewAddress] = useState("");

	function changeAddress(e) {
		e.preventDefault();

		setAddress(newAddress);
		setIsModalOpen(false);
	}

	return (
		<Card className="w-full max-w-lg py-6">
			<CardContent>
				<input
					type="text"
					placeholder="Enter new address"
					className="w-full border p-2 mb-4 rounded"
					onChange={(e) => setNewAddress(e.target.value)}
				/>
				<div className="flex justify-end">
					{/* <Button color="rgb(107 114 128">Cancel</Button> */}
					<button
						className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
						onClick={() => setIsModalOpen(false)}
					>
						Cancel
					</button>
					<button
						className="bg-blue-500 text-white py-2 px-4 rounded"
						onClick={(e) => changeAddress(e)}
					>
						Save Address
					</button>
				</div>
			</CardContent>
		</Card>
	);
};

export default ChangeAddress;
