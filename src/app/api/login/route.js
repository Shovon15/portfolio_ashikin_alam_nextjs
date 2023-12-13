import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import { connectDb } from "@/dbConfig/dbConfig";

export async function POST(request) {
	try {
		connectDb();
		const reqBody = await request.json();
		const { email, password } = reqBody;

		const user = await User.findOne({ email });

		if (!user) {
			return NextResponse.json({ error: "user does not Exist" }, { status: 400 });
		}

		const validatePassword = await bcryptjs.compare(password, user.password);

		if (!validatePassword) {
			return NextResponse.json({ error: "Password not matched" }, { status: 400 });
		}
		const token = sign({ id: user._id }, process.env.JWT_ACTIVATION_KEY, {
			expiresIn: "30d",
		});

		const response = NextResponse.json({
			message: "Successfully Loged In",
			success: true,
			payload: {
				user,
			},
		});

		response.cookies.set("token", token, {
			httpOnly: true,
		});

		return response;
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
