"use client";

import { Button, Card, Input, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const router = useRouter()

	const handleLogin = async (data) => {
		const loginData = {
			email: data.email,
			password: data.password,
		};

		try {
			const response = await axios.post("/api/login", loginData);
			if(response.status=== 200){
				router.push('/dashboard')
			}
			console.log(response, "user");
		} catch (error) {
			console.log(error, "error from login page");
		}
	};

	const handleSeed = async () => {
		try {
			const response = await axios.get("/api/seedAdmin");
			console.log(response, "user");
		} catch (error) {
			console.log(error, "error from seed admin");
		}
	};

	return (
		<div className="flex justify-center items-center bg-primary dark:bg-darkPrimary h-screen">
			<Card color="white" className="px-5 py-10">
				<div className="mx-auto flex flex-col items-center gap-3">
					<Typography variant="h3" className="text-primary font-bold">
						Admin Login
					</Typography>
					{/* <img src={loginIcon} alt="..." className="w-20 h-20" /> */}
				</div>

				<form onSubmit={handleSubmit(handleLogin)} className="my-8 mb-2 w-80 max-w-screen-lg sm:w-96">
					<div className="mb-4 flex flex-col gap-6 text-start">
						<div>
							<Input
								size="lg"
								label="email"
								type="text"
								{...register("email", {
									required: "Email is Required",
								})}
							/>
							{errors.email && <p className="text-red-500">{errors.email.message}</p>}
						</div>
						<div className="relative">
							<Input
								size="lg"
								label="password"
								// type={passwordShown ? "text" : "password"}
								{...register("password", {
									required: "password is Required",
								})}
							/>
							{/* <div className="absolute inset-y-0 right-0 pr-3 flex items-center h-12">
                        <span onClick={togglePassword} className="cursor-pointer text-xl">
                            {passwordShown === true ? <PiEye /> : <PiEyeClosed />}
                        </span>
                    </div> */}
							{errors.password && <p className="text-red-500">{errors.password.message}</p>}
						</div>
					</div>

					<Button
						// value={value}
						type="submit"
						className="mt-6 bg-green-500"
						// disabled={isLoading}
						fullWidth
					>
						submit
					</Button>
				</form>

				<div>
					<button onClick={handleSeed}>seed user</button>
				</div>
			</Card>
		</div>
	);
};

export default LoginPage;
