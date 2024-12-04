import { LoaderCircle } from "lucide-react";
import React from "react";

const Loading = () => {
	return (
		<div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
			<LoaderCircle className="animate-spin" size={48} />
		</div>
	);
};

export default Loading;
