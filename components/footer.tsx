export function Footer() {
	return (
		<footer className="bg-[#050506] py-12 px-6 border-t border-[#333B4F]">
			<div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">
				{/* Navigation Links */}
				<nav className="flex space-x-12 text-[#FFFFFF] text-[16px]">
					<a
						href="#"
						className="hover:text-white transition-all duration-300"
					>
						Home
					</a>
					<a
						href="#"
						className="hover:text-white transition-all duration-300"
					>
						Resources
					</a>
					<a
						href="#"
						className="hover:text-white transition-all duration-300"
					>
						Pricing
					</a>
					<a
						href="#"
						className="hover:text-white transition-all duration-300"
					>
						Contact Us
					</a>
				</nav>

				{/* Logo Centered */}
				<div className="text-8xl font-bold text-[#C5CDE3] tracking-wide py-10">
					<span className="text-[#C5CDE3]">ad</span>Task.
					<span className="text-[#C5CDE3]">ai</span>
				</div>
			</div>
		</footer>
	);
}
