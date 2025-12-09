import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";

export default function Home() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<Services />
			<About />
		</>
	);
}
