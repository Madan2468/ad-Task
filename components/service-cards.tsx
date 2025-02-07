"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

// Define the type for a Service
interface Service {
	icon: JSX.Element;
	title: string;
	description: string;
}

// Define the services array with the Service type
const services: Service[] = Array(6).fill({
	icon: <Target className="w-8 h-8 text-gray-300" />,
	title: "Smart Ad Targeting",
	description: "AI-powered Audience targeting for maximum conversion rates",
});

export function ServiceCards() {
	return (
		<section className="py-20 px-4 bg-black min-h-screen flex flex-col items-center">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="text-center mb-12"
			>
				<button className="px-6 py-3 text-sm font-medium text-white bg-[#282828] mb-5 rounded-full border border-[#333] shadow-md">
					Services
				</button>
				<div className="relative flex items-center  justify-between gap-20 w-full">
					{/* Left Line */}
					<div>
						<span className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[#A1B7E6] to-[#576CBC] hidden md:block "></span>
					</div>
					{/* Text */}
					<h2 className="text-4xl font-bold text-white mt-8 text-center">
						{" "}
						{/* Increased margin-top */}
						Innovative Services <br />
						<span className="bg-gradient-to-r from-[#A1B7E6] to-[#576CBC] text-transparent bg-clip-text">
							for Growth.
						</span>
					</h2>

					{/* Right Line */}
					<div>
						<span className="w-40 h-[2px] bg-gradient-to-l from-transparent via-[#A1B7E6] to-[#576CBC] hidden md:block"></span>
					</div>
				</div>
			</motion.div>

			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
				{services.map((service, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className="relative bg-gray-900/40 backdrop-blur-lg p-8 rounded-xl border border-gray-700/50 
              shadow-[0px_0px_20px_3px_rgba(0,150,255,0.2)] hover:shadow-[0px_0px_30px_5px_rgba(0,150,255,0.4)] 
              hover:scale-105 hover:rotate-2 transition-all duration-300 flex flex-col items-center text-center"
					>
						<div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
							{service.icon}
						</div>
						<h3 className="text-xl font-semibold text-gray-200">
							{service.title}
						</h3>
						<p className="text-gray-400 mt-2">
							{service.description}
						</p>
					</motion.div>
				))}
			</div>

			{/* Contact Button with Glowing Effect */}
			{/* <button className="mt-12 px-6 py-2 bg-gray-800 text-white text-lg rounded-full hover:bg-gray-700 transition-all animate-pulse">
				Contact Us
			</button> */}


<button className="relative mt-12 px-6 py-2 bg-gray-800 text-white text-lg rounded-full hover:bg-gray-700 transition-all overflow-hidden border-2 border-aqua">
  {/* Background GIF */}
  <span className="absolute inset-0 -z-10">
    <img src="/sparkle2-bg.gif" alt="Background GIF" className="w-full h-full object-cover rounded-full opacity-50" />
  </span>

  {/* Foreground GIF inside button, but static */}
  <span className="absolute inset-0 flex items-center justify-center">
    <img src="/sparkle2.gif" alt="Foreground GIF" className="w-70 h-70 opacity-80" />
  </span>

  <span className="relative z-10">Contact Us</span>
</button>




			{/* Inline Tailwind CSS for button animation */}
			<style jsx>{`
				@keyframes glow {
					0% {
						box-shadow: 0 0 5px rgba(90, 110, 166, 0.5);
					}
					50% {
						box-shadow: 0 0 15px rgba(90, 110, 166, 0.8);
					}
					100% {
						box-shadow: 0 0 5px rgba(90, 110, 166, 0.5);
					}
				}
			`}</style>
		</section>
	);
}
