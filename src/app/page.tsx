import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<>
			<Navbar />
			<h1 className="text-3xl font-bold">Hello, Next.js!</h1>
		</>
	);
}
