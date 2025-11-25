"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

import serv1 from "../../../public/images/serv1.svg";

export default function Services() {
	return (
		<>
			<div className="mt-20 flex flex-row items-center justify-center md:justify-start">
				<Badge className="text-sm md:text-lg md:ml-20 p-2 md:px-4 md:py-1 bg-[#DE8EC1] font-sans">
					Como podemos te ajudar
				</Badge>
			</div>

			<div className="mt-6 md:ml-20 md:w-200">
				<h1 className="text-center md:text-start font-sans text-4xl md:text-6xl font-semibold tracking-tighter p-4 md:p-0 leading-none text-[#193F41]">
					Transformando a saúde mental, um passo de cada vez
				</h1>
				<p className="text-[#193F41] text-center md:text-start font-sans p-4 md:p-0 leading-none md:mt-5 text-lg md:text-xl">
					Oferecemos uma ampla gama de serviços projetados para apoiar seu
					bem-estar mental em cada etapa de sua jornada
				</p>
			</div>

			<div>
				<Card className="flex flex-col md:flex-row items-center justify-center w-90 md:w-[400px] mt-10 ml-4 md:ml-20 bg-[#E6EEF0]">
					<CardContent className="">
						<Image src={serv1} alt="Terapia Individual" />
						<CardTitle className="text-2xl font-semibold mb-2 font-sans text-[#193F41] mt-2">
							Sessões de Terapia Personalizada
						</CardTitle>
						<CardDescription className="text-base text-[#193F41] font-sans">
							Sessões personalizadas para atender às suas necessidades
							específicas, promovendo autoconhecimento e crescimento pessoal.
						</CardDescription>
						<Button className="mt-4 text-white">Saiba Mais</Button>
					</CardContent>
				</Card>
			</div>
		</>
	);
}
