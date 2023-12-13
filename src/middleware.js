import { NextRequest, NextResponse } from "next/server";

export function middleware(request) {
	const path = request.nextUrl.pathname;

	const isPublicPath = path === "/login" || path === "/signup";

	const token = request.cookies.get("token")?.value || "";

	if (isPublicPath && token) {
		return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
	}

	if (!isPublicPath && !token) {
		return NextResponse.redirect(new URL("/login", request.nextUrl));
	}

	// Check if the path is a nested route under "/dashboard"
	if (path.startsWith("/dashboard") && !token) {
		return NextResponse.redirect("/login");
	}

	// Continue to the next middleware or handler
	return null;
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: ["/", "/dashboard", "/login"],
};
