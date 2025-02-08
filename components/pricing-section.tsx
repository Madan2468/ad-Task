"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

const plans = [
	{
		name: "Free",
		price: "$0",
		features: [
			"Basic AI code generation",
			"Upto 1 team member",
			"Community Support",
		],
		badge: "NEW",
	},
	{
		name: "Pro",
		price: "$10/month",
		features: [
			"Advanced AI Features",
			"Upto 20 team members",
			"Priority Support",
			"Custom Integrations",
		],
		badge: "MOST POPULAR",
	},
	{
		name: "Enterprise",
		price: "$39/month",
		features: [
			"Advanced AI Features",
			"Upto 200 team members",
			"Priority Support",
			"Custom AI training",
		],
	},
];

export function PricingSection() {
	return (
		<section className="relative py-20 px-4 bg-[#050506] overflow-hidden">
			{/* Pricing section temporarily hidden */}
			{/* <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#4c5fd5] opacity-20 blur-[200px] rounded-full"></div>

			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.8 }}
				className="relative text-center mb-12"
			>
				<span className="px-6 py-3 text-sm font-medium text-white bg-[#282828] mb-5 rounded-full border border-[#333] shadow-md">
					Plans
				</span>
				<h2 className="text-4xl font-bold mt-8 text-white relative">
					<div className="relative flex items-center justify-center">
						<span className="w-40 h-[2px] bg-gradient-to-r from-transparent via-[#A1B7E6] to-[#576CBC] absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:block"></span>
						<span className="mx-4 text-center">
							Pricing that scales <br />
							<span className="text-[#4c5fd5]">with you</span>
						</span>
						<span className="w-40 h-[2px] bg-gradient-to-l from-transparent via-[#A1B7E6] to-[#576CBC] absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block"></span>
					</div>
				</h2>
			</motion.div>

			<div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{plans.map((plan, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.2 }}
						className={index!=1 ? "relative rounded-2xl p-8 border border-gray-600 hover:border-[#7687B5] transition-all text-center shadow-lg hover:shadow-[#7687B5]/40 bg-gradient-to-tl from-[#1C2231] to-[#0B0B0B]" : "relative rounded-2xl p-8 border border-gray-600 hover:border-[#7687B5] transition-all text-center shadow-lg hover:shadow-[#7687B5]/40 bg-gradient-to-tl from-[#232323] to-[#0B0B0B]" }
					>
						{plan.badge && (
							<div className="absolute top-[-14px] left-1/2 -translate-x-1/2 bg-[#7687B5] text-white text-xs uppercase px-4 py-1 rounded-full shadow-md">
								{plan.badge}
							</div>
						)}
						<h3 className="relative text-2xl font-semibold text-white mt-12 mb-3">
							{plan.name}
						</h3>
						<div className="relative text-4xl font-bold text-white mb-6">
							{plan.price}
						</div>
						<ul className="relative space-y-4 text-left">
							{plan.features.map((feature, i) => (
								<li key={i} className="flex items-center text-gray-300">
									<Check className="w-6 h-6 text-[#7687B5] mr-2" />
									{feature}
								</li>
							))}
						</ul>
						<button className="relative mt-8 w-full border border-[#7687B5] hover:bg-[#7687B5]/20 text-white rounded-lg py-2 px-4 transition-colors shadow-md">
							Get Started
						</button>
						{index==0 ? <p className="mt-4 text-gray-400 text-sm flex items-center justify-center">
							Already have VS Code?{" "}
							<a href="#" className="text-[#7687B5] hover:underline flex items-center ml-1">
								Open Now
							</a>
						</p> : null}
						{index==1 ? <p className="mt-4 text-gray-400 text-sm flex items-center justify-center">
							Try Free for 30 days
						</p> : null}
					</motion.div>
				))}
			</div> */}

			<style>
				{`
					@keyframes glowing-border {
						0% { box-shadow: 0 0 5px rgba(76, 95, 213, 0.5); }
						50% { box-shadow: 0 0 20px rgba(76, 95, 213, 0.8); }
						100% { box-shadow: 0 0 5px rgba(76, 95, 213, 0.5); }
					}

					.animate-glowing-border {
						animation: glowing-border 2s infinite alternate;
					}
				`}
			</style>
		</section>
	);
}
