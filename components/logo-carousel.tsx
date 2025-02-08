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
			<section className="relative py-12 overflow-hidden">
				<div className="max-w-6xl mx-auto px-6">
					<div className="relative flex overflow-hidden">
						<motion.div
							className="flex gap-16 items-center"
							animate={{
								x: "-50%"
							}}
							transition={{
								duration: 15,
								repeat: Infinity,
								ease: "linear",
								repeatType: "mirror"
							}}
							style={{
								willChange: "transform"
							}}
						>
							{[...logos, ...logos].map((logo, index) => (
								<motion.div
									key={index}
									whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 400, damping: 17 }}
									className="w-32 h-16 flex items-center justify-center relative opacity-80 hover:opacity-100 transition-opacity duration-200"
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
							onHoverStart={() => setHoveredPlatform(platform.name)}
							onHoverEnd={() => setHoveredPlatform(null)}
						>
							<motion.div
								initial={{ y: 0 }}
								animate={{ y: hoveredPlatform === platform.name ? -10 : 0 }}
								transition={{
									type: "spring",
									stiffness: 300,
									damping: 25
								}}
								className="flex flex-col items-center relative"
							>
								<Image
									src={platform.icon || "/placeholder.svg"}
									alt={platform.name}
									width={100}
									height={100}
									className="opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
									style={{
										zIndex: "1",
										position: "relative"
									}}
								/>
								<motion.p
									initial={{ opacity: 0, y: 5 }}
									animate={{ 
										opacity: hoveredPlatform === platform.name ? 1 : 0,
										y: hoveredPlatform === platform.name ? 0 : 5
									}}
									transition={{ duration: 0.2 }}
									className="text-white mt-4 text-sm absolute -bottom-8"
								>
									{platform.name}
								</motion.p>
							</motion.div>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
}
