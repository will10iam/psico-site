"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import Button from "../components/button";
import { ContactForm } from "./contactForm";

export default function Contact() {
	return (
		<div className=" bg-[#103739] p-6 md:p-20 m-2.5 rounded-sm flex flex-col md:flex-row items-center justify-between md:items-start">
			<div className="text-center md:text-start md:w-1/2">
				<Badge className="hidden md:block text-sm p-2 md:px-4 md:py-1 bg-[#607A77] font-sans text-[#FFFFFF] mb-6 md:mb-2">
					Entre em contato conosco
				</Badge>
				<h1 className="text-center md:text-start text-amber-50 text-4xl md:text-5xl font-sans font-semibold tracking-tighter">
					Dê o primeiro passo para melhorar seu bem-estar mental hoje mesmo.
				</h1>
				<p className="text-center md:text-start text-amber-50 font-sans mt-4 leading-tight mb-4">
					Quer você esteja procurando terapia personalizada, grupos de apoio ou
					programas de bem-estar, nossa equipe está aqui para orientá-lo.
				</p>
			</div>

			<div className="text-center md:text-start">
				<Badge className=" md:hidden text-sm p-2 bg-[#607A77] font-sans text-[#FFFFFF] mb-10 mt-10">
					Entre em contato conosco
				</Badge>
				<ContactForm />
			</div>
		</div>
	);
}
