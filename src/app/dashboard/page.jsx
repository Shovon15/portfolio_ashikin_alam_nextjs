"use client";

import { showErrorToast, showSuccessToast } from "@/components";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const Dashboard = () => {
	const router = useRouter();
	const [user, setUser] = useState("");
	console.log(user);
	const fetchData = async () => {
		try {
			const res = await axios.get("/api/admin");
			// console.log(res.data, "data from user");
			setUser(res.data?.data);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		fetchData(); // Call the async function
	}, []);

	const handleLogout = async () => {
		try {
			const res = await axios.get("/api/logout");
			console.log(res.data.message);
			router.push("/login");
			showSuccessToast("Logout Successful");
		} catch (error) {
			console.log(error);
			showErrorToast("Logout Failed");
		}
	};

	return (
		<div className="min-h-screen">
			<p>Dashboard</p>
			<div>
				{user && (
					<div>
						<p className="text-2xl font-bold p-5">{user.name}</p>
						<p className="text-xl font-semibold p-2">{user.email}</p>
					</div>
				)}
			</div>
			<Button onClick={handleLogout}>Logout</Button>
		</div>
	);
};

export default Dashboard;
