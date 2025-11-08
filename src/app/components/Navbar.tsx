"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import logo from "../../../public/images/logo.png";
import logo2 from "../../../public/images/logo2.png";
import Image from "next/image";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
			<nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
				{/* LOGO */}
				<Link href="/" className="text-xl font-semibold text-primary">
					<Image src={logo} alt="Logo" width={150} height={10} />
				</Link>

				{/* Botão Mobile */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden text-primary focus:outline-none"
					aria-label="Abrir menu"
				>
					{isOpen ? <X size={28} /> : <Menu size={28} />}
				</button>

				{/* Links Desktop */}
				<ul className="hidden md:flex gap-6 text-sm font-medium text-[#193F41]">
					<li>
						<Link href="#home" className="hover:text-primary transition-colors">
							Início
						</Link>
					</li>
					<li>
						<Link
							href="#sobre"
							className="hover:text-primary transition-colors"
						>
							Sobre
						</Link>
					</li>
					<li>
						<Link
							href="#servicos"
							className="hover:text-primary transition-colors"
						>
							Serviços
						</Link>
					</li>
					<li>
						<Link
							href="#contato"
							className="hover:text-primary transition-colors"
						>
							Contato
						</Link>
					</li>
				</ul>

				<div>
					<Link href="/" className="text-xl font-semibold text-primary">
						<Image src={logo2} alt="Logo" width={120} height={10} />
					</Link>
				</div>

				{/* CTA Desktop */}
				{/* <div className="hidden md:block">
					<button>
						<Link href="#contato">Agendar Sessão</Link>
					</button>
				</div> */}
			</nav>

			{/* Menu Mobile */}
			{isOpen && (
				<div className="md:hidden bg-white border-t border-gray-100">
					<ul className="flex flex-col items-center py-4 gap-4 text-base text-gray-800">
						<li>
							<Link
								href="#home"
								className="hover:text-primary transition-colors"
							>
								Início
							</Link>
						</li>
						<li>
							<Link
								href="#sobre"
								onClick={() => setIsOpen(false)}
								className="hover:text-primary"
							>
								Sobre
							</Link>
						</li>
						<li>
							<Link
								href="#servicos"
								onClick={() => setIsOpen(false)}
								className="hover:text-primary"
							>
								Serviços
							</Link>
						</li>
						<li>
							<Link
								href="#contato"
								onClick={() => setIsOpen(false)}
								className="hover:text-primary"
							>
								Contato
							</Link>
						</li>
						{/* <li>
							<button className="w-[80%] mt-2">
								<Link href="#contato">Agendar Sessão</Link>
							</button>
						</li> */}
					</ul>
				</div>
			)}
		</header>
	);
}
