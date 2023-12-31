import { NextRequest, NextResponse } from "next/server";

export async function GET() {
	try {
		const response = NextResponse.json({
			message: "Successfully Loge Out",
			success: true,
		});
		response.cookies.set("token", "", {
			httpOnly: true,
			expiresIn: new Date(0),
		});

		return response;
	} catch (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
