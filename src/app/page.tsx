import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import { FieldSeparator } from "@/components/ui/field";

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<Services />
			<About />
			<FieldSeparator className="my-10 md:my-20 md:w-xs justify-center text-center" />
			<Contact />
		</>
	);
}
