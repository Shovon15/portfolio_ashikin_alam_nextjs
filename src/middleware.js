import { NextResponse, NextRequest } from "next/server";

export function middleware(request) {
	const path = request.nextUrl.pathname;

	const isPublicPath = path === "/login" || path === "/signup" || path === "/verifyemail";

	const token = request.cookies.get("token")?.value || "";

	if (isPublicPath && token) {
		return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
	}

	if (!isPublicPath && !token) {
		return NextResponse.redirect(new URL("/login", request.nextUrl));
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/dashboard", "/login"],
};