"use client";
import Image from "next/image";

import { Button } from "@material-tailwind/react";

import { HeroSection } from "@/components";
import { useEffect } from "react";

export default function Home() {
	return (
		<div>
			{/* <HeroSection /> */}
			<section className="flex h-[400px] p-10">
				<div className="w-full lg:w-1/2 p-5 flex flex-col gap-5 justify-center items-center">
					<p className="text-2xl font-bold">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, quidem.
					</p>
					<p className="text-lg font-bold">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati sunt eligendi, hic aliquid
						nesciunt nulla nihil magni nostrum. Soluta hic accusamus laboriosam eaque. Repellat ullam omnis
						facilis fugiat ipsam fuga.
					</p>
					<Button variant="text">button</Button>
				</div>
				<div className="w-full lg:w-1/2 p-5">
					<Image
						src="/images/businessman-working-laptop.jpg"
						alt="..."
						className="w-auto h-auto object-cover"
						width={200}
						height={200}
					/>
				</div>
			</section>
		</div>
	);
}
