import { conntectDb } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

// import data from "../../../../seedData";
// conntectDb();

export async function GET(request) {
	try {
		// await User.deleteMany({});

		//  insert data

		const data = {
			name: "shovon mahamud",
			email: "shovonrnbd@gmail.com",
			password: "Shovon@1",
			isAdmin: "true",
		};
		const newUser = new User({
			name: data.name,
			email: data.email,
			password: data.password,
			isAdmin: data.isAdmin,
		});

		// Save the user to the database
		await newUser.save();

		const response = NextResponse.json({
			message: "admin Data seed successfully",
			success: true,
			payload: {
				newUser,
			},
		});
		return response;
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
