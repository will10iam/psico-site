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

import servicesDb from "./servicesdb.json";

function ServicesList() {
	return (
		<>
			{servicesDb.map((service, i) => (
				<Card className="w-90 md:w-[400px] mt-10 bg-[#E6EEF0]" key={i}>
					<CardContent className="px-2 -mt-4">
						<Image
							src={service.image}
							alt={service.title}
							width={400}
							height={400}
						/>
						<CardTitle className="text-xl md:text-[23px] font-medium mb-2 font-sans text-[#193F41] mt-4 ml-4">
							{service.title}
						</CardTitle>
						<CardDescription className="text-[15px] md:text-[16px] text-[#193F41] font-sans ml-4 mr-2 leading-tight">
							{service.description}
						</CardDescription>
						<Button variant="default" className="ml-4 mt-6 text-white">
							Saiba Mais
						</Button>
					</CardContent>
				</Card>
			))}
		</>
	);
}
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

			<div className="flex flex-col md:flex-row items-center justify-center md:gap-8">
				<ServicesList />
			</div>
		</>
	);
}
