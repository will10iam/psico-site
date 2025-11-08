import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";

const funnelSans = Funnel_Sans({
	variable: "--font-funnel-sans",
	subsets: ["latin"],
});
/* 
const funnelMono = Funnel({
  variable: "--font-funnel-mono",
  subsets: ["latin"],
}); */

export const metadata: Metadata = {
	title: "Emilaine Lopes | Site Oficial",
	description:
		"Site oficial de Emilaine Lopes, psicóloga especializada em saúde mental.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${funnelSans.variable} antialiased`}>{children}</body>
		</html>
	);
}
