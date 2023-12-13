"use client";
import { useState } from "react";
import image from "../../../public/images/services_image.jpg";

import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@material-tailwind/react";
const ServeicePage = () => {
	const [hoveredItem, setHoveredItem] = useState(null);
	const data = [
		{
			image: image,
			heading: "1-1 coaching seasion",
			title: "shine with noor",
		},
		{
			image: image,
			heading: "1-1 coaching seasion",
			title: "shine with noor",
		},
		{
			image: image,
			heading: "1-1 coaching seasion",
			title: "shine with noor",
		},
		{
			image: image,
			heading: "1-1 coaching seasion",
			title: "shine with noor",
		},
		{
			image: image,
			heading: "1-1 coaching seasion",
			title: "shine with noor",
		},
	];

	const gradientColors = [
		"linear-gradient(rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0.5))",
		"linear-gradient(rgba(0, 0, 155, 0.4), rgba(0, 0, 255, 0.5))",
		"linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.5))",
		"linear-gradient(rgba(0, 0, 255, 0.6), rgba(0, 0, 255, 0.5))",

		// Add more colors as needed
	];

	const animationVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: { y: 0, opacity: 1 },
	};

	return (
		<div>
			<div className="p-10">
				<h1 className="text-3xl font-bold p-5">Our Services</h1>
				<div className="flex gap-5 justify-center items-center">
					{data.map((item, i) => (
						<motion.div
							key={i}
							onMouseEnter={() => setHoveredItem(i)}
							onMouseLeave={() => setHoveredItem(null)}
							whileHover={{ scale: 1.1 }} // Adjust the scale factor as needed
							transition={{ duration: 0.5 }}
							style={{
								backgroundImage:
									hoveredItem === i
										? `url(${item.image.src})`
										: `${gradientColors[i % gradientColors.length]}, url(${item.image.src})`,
								backgroundSize: "cover",
								filter: hoveredItem !== i ? "blur(50%)" : "none",
								backgroundPosition: "center",
							}}
							className="h-80 w-52 bg-blue-500 p-2 flex flex-col justify-end text-white font-semibold cursor-pointer"
						>
							<p>{item.heading}</p>
							<p>{item.title}</p>
						</motion.div>
					))}
				</div>
			</div>
			<div className="flex p-10 border border-red-500">
				<div className="w-full lg:w-1/2 p-5">
					<motion.p
						className="text-3xl font-bold"
						initial="hidden"
						variants={animationVariants}
						transition={{ duration: 0.8 }}
					>
						1-1 Coaching Sessions
					</motion.p>
					<p>Shine with Noor!</p>
					<p>
						Work with Coach Noorhan on your specific performance and career ambitions YOU can decide what
						you want to work on, and together with Coach Noorhan you will identify your goals, unlock your
						potential, and achieve stellar results Packages Include: Weekly sessions, customized activities,
						and progress tracking Options for: In-person or virtual sessions
					</p>
					<Button>button</Button>
				</div>
				<div className="w-full lg:w-1/2">
					<div className="bg-blue-300 w-full h-[300px]"></div>
				</div>
			</div>
			<div className="flex p-10 border border-red-500">
				<div className="w-full lg:w-1/2 p-5">
					<motion.p
						className="text-3xl font-bold"
						initial="hidden"
						animate="visible"
						variants={animationVariants}
						transition={{ duration: 0.8 }}
					>
						1-1 Coaching Sessions
					</motion.p>
					<p>Shine with Noor!</p>
					<p>
						Work with Coach Noorhan on your specific performance and career ambitions YOU can decide what
						you want to work on, and together with Coach Noorhan you will identify your goals, unlock your
						potential, and achieve stellar results Packages Include: Weekly sessions, customized activities,
						and progress tracking Options for: In-person or virtual sessions
					</p>
					<Button>button</Button>
				</div>
				<div className="w-full lg:w-1/2">
					<div className="bg-green-300 w-full h-[300px]"></div>
				</div>
			</div>
		</div>
	);
};

export default ServeicePage;
