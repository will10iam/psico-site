"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import hero2 from "../../../public/images/hero2.svg";
import hero4 from "../../../public/images/hero4.svg";

export default function HeroSection() {
	return (
		<section className="relative w-full h-[480px] md:h-[600px] flex items-center justify-center overflow-hidden bg-amber-700">
			<Image
				src={hero4}
				alt="Mobile Hero Image"
				className="mt-10 md:hidden"
				priority
			/>

			<Image
				src={hero2}
				alt="Desktop Hero Image"
				className="object-cover mt-30 hidden md:block"
				priority
			/>

			{/* <motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1.2, ease: "easeOut" }}
				viewport={{ once: true }}
				className="relative z-10 text-center px-6 max-w-2xl"
			>
				<p className="text-white text-lg md:text-2xl leading-relaxed font-sans">
					A vida é feita de alegrias e tristezas, mas fazer psicoterapia é como
					ter um lar para onde voltar de forma simbólica, onde eu seguro a sua
					mão e você pode simplesmente ser!
				</p>
			</motion.div> */}
		</section>
	);
}
