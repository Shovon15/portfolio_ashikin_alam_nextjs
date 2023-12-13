"use client";

import Image from "next/image";
import React, { useRef } from "react";

import bgImage from "../../../public/images/man-bg.jpg";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});
	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
	return (
		<motion.div
			ref={ref}
			style={{ scale: scrollYProgress, opacity: scrollYProgress }}
			className="flex  w-full min-h-[30rem]   mx-auto border"
		>
			<div className="w-full lg:w-1/2 flex flex-col gap-5 justify-center items-center ml-[10rem] p-10">
				<motion.p
					initial={{ x: -1000 }}
					animate={{ x: 0 }}
					transition={{ delay: "0", duration: "2" }}
					className="text-3xl font-bold"
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, facere.
				</motion.p>
				<p className="text-lg font-semibold">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente doloribus nam deserunt sequi
					aspernatur quia rem. Vitae facilis asperiores laudantium!
				</p>
			</div>
			<div
				style={{
					backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.5)), url(${bgImage.src})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					marginLeft: "200px",
					// You can add more styles as needed
					// width: "100%",
					// height: "100%", // Adjust the height as needed
					position: "relative", // Ensure that the child content is positioned relative to this div
				}}
				className="w-full lg:w-1/2  bg bg-gradient-to-r from-cyan-500 to-blue-500"
			>
				<Image
					src="/images/artist-white.jpg"
					alt="..."
					className="w-96 h-80 -ml-44 mt-24"
					width={200}
					height={200}
				/>
			</div>
		</motion.div>
	);
};

export default HeroSection;
