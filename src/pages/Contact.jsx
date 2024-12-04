import React from "react";
import { IoChatbox } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegHandPeace } from "react-icons/fa6";

const Contact = () => {
	return (
		<div>
			<div className="w-full min-h-full flex justify-center items-center overflow-hidden pt-6 mb-4">
				<div className="w-2/3 h-1/3 flex flex-col justify-center gap-28">
					<div className="flex flex-col gap-3 items-center justify-center">
						<h1 className="text-xl text-center lg:text-3xl font-bold">
							Have a question we didn't answer?
						</h1>
						<h3 className="text-sm text-center lg:text-lg font-semibold">
							Don't be shy, ask the CheekSquad!
						</h3>
						<div className="w-16 h-2 bg-black"></div>
						<h2 className="text-sm text-center lg:text-xl font-semibold">
							Monday - Sunday: 7:00am - 5:00pm (IST)
						</h2>
					</div>
					<div className="flex flex-col flex-wrap lg:flex-nowrap gap-8 md:flex-col lg:flex-row lg:gap-3 justify-center items-center md:items-stretch">
						<div className="w-3/4 aspect-video bg-blue-300 flex flex-col items-center justify-center relative p-4 rounded-lg shadow-lg mb-4">
							<IoChatbox
								// size={92}
								className="stroke-black fill-white absolute top-[-30px] p-2 text-[64px] md:text-[92px]"
								style={{ strokeWidth: 16 }}
							/>
							<p className="text-sm font-semibold mt-10 text-center mb-12">
								Let's have a chat
							</p>
							<button className="text-sm border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition">
								Start a Live Chat
							</button>
						</div>

						{/* <div className="w-3/4 aspect-video bg-blue-300 flex flex-col items-center justify-center relative p-4 rounded-lg shadow-lg mb-4">
							<IoIosMail
								// size={92}
								className="stroke-black fill-white absolute top-[-35px] p-2 text-[64px] lg:text-[92px]"
								style={{ strokeWidth: 16 }}
							/>
							<p className="text-sm font-semibold mt-10 text-center mb-12">
								Drop us a line
							</p>
							<button className="text-sm border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition">
								Submit a Request
							</button>
						</div> */}
						<div className="w-3/4 aspect-video bg-blue-300 flex flex-col items-center justify-center relative p-4 rounded-lg shadow-lg mb-4">
							<FaMobileAlt
								// size={92}
								className="stroke-black fill-white absolute top-[-30px] p-2 text-[64px] lg:text-[92px]"
								style={{ strokeWidth: 16 }}
							/>
							<p className="text-sm font-semibold mt-10 text-center mb-12">
								Text us
							</p>
							<button className="text-sm border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition">
								Text
							</button>
						</div>
						<div className="w-3/4 aspect-video bg-blue-300 flex flex-col items-center justify-center relative p-4 rounded-lg shadow-lg mb-4">
							<FaRegHandPeace
								// size={92}
								className="stroke-black fill-white absolute top-[-35px] p-2 text-[64px] lg:text-[92px]"
								style={{ strokeWidth: 16 }}
							/>
							<p className="text-sm font-semibold mt-10 text-center mb-8 hover:underline hover:cursor-pointer">
								Tweet Us
							</p>
							<div className="bg-black h-1 w-8"></div>
							<p className="text-sm font-semibold mt-10 text-center hover:underline hover:cursor-pointer">
								Facebook Us
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full min-h-80 bg-blue-50 flex flex-col items-center justify-center py-12 px-4 md:px-8">
				{/* Header */}
				<div className="max-w-4xl text-center">
					<h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6">
						Contact Us
					</h1>
					<p className="text-gray-700 text-base md:text-lg">
						We'd love to hear from you! Fill out the form below or reach us
						through our contact information.
					</p>
				</div>

				{/* Contact Form */}
				<div className="mt-12 max-w-4xl w-full flex flex-col sm:flex-row sm:items-center lg:items-stretch gap-6 bg-white p-6 shadow-lg rounded-lg">
					{/* Left Section */}
					<div className="w-full sm:w-1/2 flex flex-col items-center sm:items-center lg:items-start gap-4">
						<h2 className="text-2xl font-semibold text-blue-600">Our Office</h2>
						<p className="text-gray-700 text-sm md:text-base">
							123 Main Street, <br /> City, State, Zip
						</p>
						<p className="text-gray-700 text-sm md:text-base">
							Phone: (123) 456-7890 <br />
							Email: contact@example.com
						</p>
					</div>

					{/* Right Section */}
					<div className="w-full sm:w-1/2">
						<form className="flex flex-col gap-4">
							<input
								type="text"
								placeholder="Your Name"
								className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
							/>
							<input
								type="email"
								placeholder="Your Email"
								className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
							/>
							<textarea
								rows="4"
								placeholder="Your Message"
								className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
							/>
							<button
								type="submit"
								className="bg-blue-600 text-white px-6 py-3 rounded-md shadow hover:bg-blue-700 transition"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
