"use client";

import Image from "next/image";
import logo from "../assets/logo.png";
import User from "../assets/user.svg";
import { useState } from "react";

export default function Header() {
	const [activeLink, setActiveLink] = useState("Home");
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const handleLinkClick = (link: string) => {
		setActiveLink(link);
	};

	return (
		<header className="fixed w-full top-[15px] z-50">
			<div className="rounded-[60px] bg-white mx-auto  p-4 pl-[30px] shadow-lg  2xl:w-[1170px] xl:w-[1100px] w-[95%]">
				<div className="flex justify-between items-center">
					<div className="flex gap-10">
						<Image src={logo} alt="GrowNext" width={126.5} height={50} />
						<div className="hidden xl:flex items-center gap-5">
							{["Home", "Features", "Pricing", "Partner", "Support", "Contact"].map((link) => (
								<a key={link} href="#" onClick={() => handleLinkClick(link)} className={`text-lg hover:text-[#111111] ${activeLink === link ? "text-[#111111]" : "text-[#666666]"}`}>
									{link}
								</a>
							))}
						</div>
					</div>
					<div className="hidden md:flex gap-5 ms-auto">
						<a href="#" className="text-[#111111] text-lg my-auto">
							Request a Demo
						</a>
						<button className="flex gap-2 items-center">
							<User />
							Login
						</button>
						<button className="rounded-[32px] px-[30px] py-5 bg-gradient-to-b from-[#555555] to-[#000000] duration-150 ease-in-out text-white hover:-translate-y-0.5 hover:shadow-xl">
							Start For Free
						</button>
					</div>
					<button
						className="mx-4 my-auto hover:shadow-lg flex xl:hidden duration-500 ease-in-out rounded-full w-12 h-12 justify-center items-center"
						onClick={() => setOpenMobileMenu(!openMobileMenu)}
					>
						<span className="text-[20px]">☰</span>
					</button>
				</div>
				<div className={`overflow-hidden duration-300 ease-in-out ${openMobileMenu ? "h-56 sm:h-36 md:h-10" : "h-0"}`}>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 justify-between px-4 mt-3">
						{["Home", "Features", "Pricing", "Partner", "Support", "Contact"].map((link, i) => (
							<a
								key={link}
								href="#"
								onClick={() => handleLinkClick(link)}
								className={`text-lg hover:text-[#111111] ${activeLink === link ? "text-[#111111]" : "text-[#666666]"} ${i % 2 == 0 ? "text-left" : "text-right"} sm:text-center`}
							>
								{link}
							</a>
						))}
					</div>
					<hr className="mt-3 md:hidden" />
					<div className="flex flex-col sm:flex-row sm:px-10 md:hidden">
						<div className="flex justify-between sm:gap-10 flex-wrap px-4 mt-3">
							{["Request Demo", "Login"].map((link) => (
								<a
									key={link}
									href="#"
									onClick={() => handleLinkClick(link)}
									className={`text-lg hover:text-[#111111] min-w-24 ${activeLink === link ? "text-[#111111]" : "text-[#666666]"}`}
								>
									{link}
								</a>
							))}
						</div>
						<button className="sm:ms-auto rounded-[32px] px-[20px] py-3 mt-3 bg-gradient-to-b from-[#555555] to-[#000000] duration-150 ease-in-out text-white hover:-translate-y-0.5 hover:shadow-xl">
							Start For Free
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
