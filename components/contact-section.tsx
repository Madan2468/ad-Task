"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import ask_png from "../public/adTask.ai.png";

export default function ContactSection() {
	return (
		<section className="relative bg-[#050506] text-white overflow-hidden">
			{/* Top Section */}
			<div className="relative py-24 px-6">
				{/* Soft Glowing Background */}

				<div className="relative max-w-6xl mx-auto">
					{/* Contact Badge */}
					<div className="flex justify-center mb-12">
						<motion.button
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="px-6 py-3 text-sm font-medium text-white rounded-full border border-[#333] shadow-md bg-gradient-to-r from-grey to-white text-black"
						>
							CONTACT US
						</motion.button>
					</div>

					<div className="grid md:grid-cols-2 gap-16 items-start ">
						<div className="absolute left-[20%] top-[60%] w-[250px] h-[206px] bg-gradient-to-b from-[#263048] to-[#5b70a0] opacity-60 blur-[70px] z-[100] transform -translate-x-1/2 -translate-y-1/2"></div>

						{/* Left Side - Contact Info */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="space-y-8 relative overflow-hidden"
						>
							{/* Blur Effect */}

							<h2 className="text-5xl font-bold leading-tight relative">
								Ask whatever you have <br />
								<span className="bg-gradient-to-r from-[#A1B7E6] to-[#576CBC] text-transparent bg-clip-text">
									in your mind now
								</span>
							</h2>
							<p className="text-gray-400 text-lg relative">
								Whether you have questions or are ready to
								discuss your business, we're here to help. Reach
								out today.
							</p>
							<div className="space-y-6 relative">
								<p className="flex items-center gap-4 text-gray-400">
									<Mail className="text-[#A1B7E6]" />{" "}
									admin@adtaskai.com
								</p>
								<p className="flex items-center gap-4 text-gray-400">
									<Phone className="text-[#A1B7E6]" /> (669)
									819-8061
								</p>
								<p className="flex items-center gap-4 text-gray-400">
									<MapPin className="text-[#A1B7E6]" /> 43
									Roselle St. New York
								</p>
							</div>
						</motion.div>

						{/* Right Side - Contact Form */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="relative"
						>
							<form className="space-y-6">
								<div className="space-y-2">
									<label className="text-sm text-gray-400">
										Name
									</label>
									<Input
										type="text"
										className="bg-[#0A0B0F] border-gray-800 text-white rounded-lg py-3 px-4"
									/>
								</div>
								<div className="space-y-2">
									<label className="text-sm text-gray-400">
										Email
									</label>
									<Input
										type="email"
										className="bg-[#0A0B0F] border-gray-800 text-white rounded-lg py-3 px-4"
									/>
								</div>
								<div className="space-y-2">
									<label className="text-sm text-gray-400">
										Message
									</label>
									<Textarea className="bg-[#0A0B0F] border-gray-800 text-white rounded-lg py-3 px-4 min-h-[150px]" />
								</div>
							</form>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Bottom Section */}
			{/* <div className="relative py-32 text-center">
				<div className="flex justify-center items-center w-full pb-24">
					<img
						src={ask_png.src}
						alt="adTask.ai"
						className="relative mb-24 text-center"
					/>
				</div> */}

<div className="relative py-32 text-center group overflow-hidden">
  <div className="flex justify-center items-center w-full pb-24 relative">
    {/* Text Image */}
    <img
      src={ask_png.src}
      alt="adTask.ai"
      className="relative mb-24 text-center"
    />

    {/* Ripple Effect */}
    <span className="absolute inset-0 bg-radial-ripple opacity-0 scale-50 transition-all duration-700 group-hover:opacity-100 group-hover:scale-150 mix-blend-lighten"></span>
  </div>





				{/* CTA */}
				<div className="relative space-y-8">
					<h2 className="text-[48px] font-[500]  ">
						Are you ready to boost <br />
						<div className="text-[48px] font-[500]">
							<span className="bg-gradient-to-r from-[#A1B7E6] to-[#576CBC] text-transparent bg-clip-text px-5">
								your
							</span>

							<span className="bg-gradient-to-r from-[#7687B5] to-[#91B0FF] text-transparent bg-clip-text">
								Development?
							</span>
						</div>
					</h2>
					<div className="relative flex items-center justify-center">
  {/* Glowing Triangle */}
  <span className="absolute inset-0 flex items-center justify-center text-gray-300 opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-80 group-hover:blur-[20px]"></span>


  {/* Button */}
  <button className="relative bg-[#7687B5] border-2 border-[#7687B5] text-white py-2 px-6 rounded-3xl overflow-hidden">
    <span className="absolute inset-0 z-0">
      <img
        src="/sparkle2.gif"
        alt="Sparkle GIF"
        className="absolute inset-0 object-cover w-full h-full z-0"
      />
    </span>
    <span className="relative z-10">Try Now for Free</span>
  </button>
</div>

				</div>
			</div>
		</section>
	);
}
