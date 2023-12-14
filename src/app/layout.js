import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Nav } from "../components";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Ashikin Alam",
	description: "Portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body suppressHydrationWarning={true} className={inter.className}>
				<div className="container">
					<div className="wrapper">
						<Nav />
						{children}
						<Footer />
					</div>
				</div>
				<ToastContainer />
			</body>
		</html>
	);
}
