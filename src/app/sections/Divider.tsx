import React from "react";
import StarImg from "../assets/star.png";
import Image from "next/image";

const Divider = () => {
	return (
		<div className="flex items-center my-5 md:my-6 lg:my-[50px]">
			<div className="h-[1px] w-full flex-1 bg-gradient-to-l from-[#080808] to-white"></div>
			<div className="flex gap-[13px] items-center">
				<div className="w-2.5 h-2.5 rounded-full" style={{ background: "linear-gradient(137.79deg, #555555 15%, #000000 83.5%)" }}></div>
				<div className="flex gap-[5px]">
					<div className="w-[30px] h-[30px]">
						<Image src={StarImg} alt="*" />
					</div>
					<div className="w-[30px] h-[30px]">
						<Image src={StarImg} alt="*" />
					</div>
					<div className="w-[30px] h-[30px]">
						<Image src={StarImg} alt="*" />
					</div>
					<div className="w-[30px] h-[30px]">
						<Image src={StarImg} alt="*" />
					</div>
					<div className="w-[30px] h-[30px]">
						<Image src={StarImg} alt="*" />
					</div>
				</div>
				<div className="w-2.5 h-2.5 rounded-full" style={{ background: "linear-gradient(137.79deg, #555555 15%, #000000 83.5%)" }}></div>
			</div>
			<div className="h-[1px] w-full flex-1 bg-gradient-to-r from-[#080808] to-white"></div>
		</div>
	);
};

export default Divider;
