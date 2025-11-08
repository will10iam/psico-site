"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import hero from "../../../public/images/hero-image.svg";

export default function HeroSection() {
	return (
		<section className="relative w-full h-[550px] md:h-[600px] flex items-center justify-center overflow-hidden rounded-2xl">
			<Image
				src={hero}
				alt="Hero Image"
				fill
				className=" object-cover brightness-75 md:mt-30"
				priority
			/>

			<motion.div
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
			</motion.div>
		</section>
	);
}
