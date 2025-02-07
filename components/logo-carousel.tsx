"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const logos = [
	{ name: "Google", src: "icons8-google-48.png" },
	{ name: "Salesforce", src: "icons8-salesforce-48.png" },
	{ name: "Amazon", src: "icons8-amazon-50.png" },
	{ name: "Coca-Cola", src: "icons8-coca-cola-48.png" },
	{ name: "Intel", src: "icons8-intel-power-gadget-48.png" },
];

const platforms = [
	{ name: "VS Code", icon: "vscode.png" },
	{ name: "Visual Studio", icon: "vscode1.png" },
	{ name: "Azure Studio", icon: "Angular.png" },
	{ name: "Neovim", icon: "Notion.png" },
];

export function LogoCarousel() {
	const [hoveredPlatform, setHoveredPlatform] = useState<string | null>(null);

	return (
		<div className="flex flex-col gap-16 py-16">
			<section className="relative py-12 overflow-hidden ">
				<div className="max-w-6xl mx-auto px-6">
					<div className="flex items-center">
						<motion.div
							className="flex gap-16 items-center"
							initial={{ x: "0%" }}
							animate={{ x: "-100%" }}
							transition={{
								ease: "linear",
								duration: 15,
								repeat: Number.POSITIVE_INFINITY,
							}}
						>
							{[...logos, ...logos].map((logo, index) => (
								<motion.div
									key={index}
									whileHover={{ scale: 1.1, opacity: 1 }}
									className="w-32 h-16 flex items-center justify-center relative opacity-80 transition hover:opacity-100"
								>
									<Image
										src={logo.src || "/placeholder.svg"}
										alt={`${logo.name} logo`}
										width={60}
										height={30}
										className="object-contain brightness-0 invert"
									/>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</section>

			{/* Platforms Section */}
			<section className="max-w-7xl mx-auto px-6 text-center py-16">
				<p className="text-gray-400 mb-8">
					Adtask AI is available on your favorite platforms:
				</p>
				<div className="flex justify-center gap-12 flex-wrap">
					{platforms.map((platform) => (
						<motion.div
							key={platform.name}
							className="relative group flex flex-col items-center"
							onHoverStart={() =>
								setHoveredPlatform(platform.name)
							}
							onHoverEnd={() => setHoveredPlatform(null)}
						>
							<motion.div
								animate={
									hoveredPlatform === platform.name
										? { y: -10 }
										: { y: 0 }
								}
								transition={{ type: "spring", stiffness: 300 }}
								className="flex flex-col items-center relaive"
							>
								<Image
									src={platform.icon || "/placeholder.svg"}
									alt={platform.name}
									width={100}
									height={100}
									className="opacity-90 transition-all group-hover:scale-110"
									style={{
										zIndex : "1",
										position : "relative"
									}}
								/>
								{/* Show platform name when hovered */}
								{hoveredPlatform === platform.name && (
									<p className="text-white mt-4 text-sm">
										{platform.name}
									</p>
								)}
							</motion.div>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
}
