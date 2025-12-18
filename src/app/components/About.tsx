"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import perfil from "../../../public/images/perfil.jpg";
import perfil2 from "../../../public/images/perfil2.jpg";
import Button from "../components/button";

export default function About() {
	return (
		<>
			<div className="flex items-center justify-evenly md:mt-20">
				<div className="flex flex-col items-center md:items-end max-w-lg p-4 md:p-0 mt-20 md:mt-1 font-sans">
					<Card className="md:hidden mb-8">
						<CardContent className="px-2 -mt-4 -mb-4">
							<Image
								src={perfil}
								alt="Foto da Terapeuta"
								width={400}
								height={400}
								className="rounded-sm"
							/>
						</CardContent>
					</Card>
					<Badge className="text-sm p-2 md:px-4 md:py-1 bg-[#D7DED5] font-sans text-[#103739] mb-6 md:mb-2">
						Terapeuta Licenciada
					</Badge>
					<h1 className=" text-[#103739] text-5xl font-semibold tracking-tighter">
						Emilaine Lopes
					</h1>
					<p className="text-center md:text-end text-[#193F41] font-sans mt-4 leading-tight mb-4">
						Lorem ipsum dolor sit amet consectetur adipiscing elit. Consectetur
						adipiscing elit quisque faucibus ex sapien vitae. Ex sapien vitae
						pellentesque sem placerat in id. Placerat in id cursus mi pretium
						tellus duis. Pretium tellus duis convallis tempus leo eu aenean.
					</p>
					<Button color="pink">Fale comigo</Button>
				</div>
				<div>
					<Card className="hidden md:block mr-10 -ml-30 bg-[#E6EEF0]">
						<CardContent className="px-2 -mt-4 -mb-4">
							<Image
								src={perfil2}
								alt="Foto da Terapeuta"
								width={300}
								height={300}
								className="rounded-sm"
							/>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
}
