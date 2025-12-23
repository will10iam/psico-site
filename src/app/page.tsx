import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FieldSeparator } from "@/components/ui/field";

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<Services />
			<FieldSeparator className="my-10 mx-10" />
			<About />
			<FieldSeparator className="my-10 mx-10" />
			<Contact />
			<Footer />
		</>
	);
}
