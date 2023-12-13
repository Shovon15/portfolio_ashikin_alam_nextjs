"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
	return (
		<nav className="flex justify-between bg-green-500 h-16 p-5">
			<p className="font-bold">navbar</p>
			<div className=" flex gap-5 ">
				<Link href="/task">Task home</Link>
				<Link href="/login">Login</Link>
				<Link href="/dashboard">Dashboard</Link>
				<Link href="/add-task">Add Task</Link>
			</div>
		</nav>
	);
};

export default Nav;
