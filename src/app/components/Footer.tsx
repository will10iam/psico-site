"use-client";

import React from "react";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FieldSeparator } from "@/components/ui/field";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-[#E6EEF0] text-white font-sans py-6 mt-30">
			<div className="flex flex-col md:flex-row md:justify-evenly justify-center gap-130 items-center p-2">
				<Link href="/">
					<Image src={logo} alt="Logo" width={150} height={10} />
				</Link>
				<p className="font-sans text-[#103739] hidden md:block text-2xl w-80 font-semibold tracking-tighter leading-7 text-end">
					Seu caminho para o bem-estar mental começa aqui
				</p>
			</div>

			<div className=" font-sans text-[#103739] font-semibold flex flex-col md:flex-row md:justify-evenly justify-center items-center gap-130 mt-10">
				<div className="flex flex-col gap-10">
					<div className="tracking-tighter leading-5 text-center md:text-start">
						<p className="text-3xl md:text-4xl text-[#757A7A]">Contato</p>
						<span className="md:text-xl">exemplo@email.com</span>
						<br></br>
						<span className="md:text-xl">(12) 3456-7890</span>
					</div>

					<div className="tracking-tighter leading-5 text-center md:text-start">
						<p className="text-3xl md:text-4xl text-[#757A7A]">Visite-nos</p>
						<span className="md:text-2xl">Rua 1, 234 - Bairro 1</span>
						<br></br>
						<span className="md:text-2xl">Cidade/UF</span>
					</div>
				</div>

				<div className=" gap-10 font-sans text-end hidden md:flex tracking-tighter leading-9 text-3xl">
					<div>
						<p>Home</p>
						<p>Sobre</p>
						<p>Serviços</p>
						<p>Contato</p>
					</div>
					<div>
						<p className="flex items-center gap-2">
							<Instagram size={25} /> Instagram
						</p>
						<p className="flex items-center gap-2">
							<Facebook size={25} /> Facebook
						</p>
						<p className="flex items-center gap-2">
							<Linkedin size={25} /> LinkedIn
						</p>
						<p className="flex items-center gap-2">
							<Youtube size={25} /> Youtube
						</p>
					</div>
				</div>
			</div>

			<div className="md:hidden flex items-center justify-center gap-2 mt-10">
				<p className="flex items-center gap-2">
					<Instagram size={25} color="#103739" />
				</p>
				<p className="flex items-center gap-2">
					<Facebook size={25} color="#103739" />
				</p>
				<p className="flex items-center gap-2">
					<Linkedin size={25} color="#103739" />
				</p>
				<p className="flex items-center gap-2">
					<Youtube size={25} color="#103739" />
				</p>
			</div>

			<FieldSeparator className="my-10 mx-6" />
			<div className="flex justify-between container mx-auto px-4 text-[#757A7A]">
				<p>
					&copy; {new Date().getFullYear()} Emilaine Lopes. Todos os direitos
					reservados.
				</p>
				<p>Desenvolvido por William Berbet</p>
			</div>
		</footer>
	);
}
