"use client";

import { User, Mail, Phone, Clock, MessageSquare } from "lucide-react";
import Button from "../components/button";

export function ContactForm() {
	return (
		<form
			className="w-full max-w-md mx-auto flex flex-col gap-2"
			onSubmit={(e) => e.preventDefault()}
		>
			{/* Nome */}
			<div className="flex flex-col gap-1">
				<div className="relative">
					{/* Ícone */}
					<User
						size={18}
						className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
						color="#D7DED5"
					/>
					<input
						id="name"
						type="text"
						placeholder="Nome"
						required
						className="w-full md:w-100 md:mr-20 rounded-md border border-border bg-[#103739] pl-10 pr-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 placeholder:text-white text-white"
					/>
				</div>
			</div>

			{/* Email */}
			<div className="flex flex-col gap-1">
				<div className="relative">
					{/* Ícone */}
					<Mail
						size={18}
						className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
						color="#D7DED5"
					/>
					<input
						id="email"
						type="email"
						placeholder="Email"
						required
						className="w-full rounded-md md:mr-20 border border-border bg-[#103739] pl-10 pr-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 placeholder:text-white text-white"
					/>
				</div>
			</div>

			{/* Telefone */}
			<div className="flex flex-col gap-1">
				<div className="relative">
					{/* Ícone */}
					<Phone
						size={18}
						className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
						color="#D7DED5"
					/>
					<input
						id="phone"
						type="tel"
						placeholder="Telefone"
						className="w-full rounded-md  md:mr-20 border border-amber-50 bg-[#103739] pl-10 pr-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 placeholder:text-white text-white"
					/>
				</div>
			</div>

			{/* {/* Horário de Agendamento
			<div className="flex flex-col gap-1">
				<label
					htmlFor="schedule"
					className="text-sm font-medium font-sans text-[#D7DED5]"
				>
					Horário de preferência
				</label>
				<input
					id="schedule"
					type="text"
					placeholder="Ex: Seg–Sex, das 18h às 20h"
					className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
				/>
			</div> */}

			{/* Mensagem */}
			<div className="flex flex-col gap-1">
				<div className="relative">
					{/* Ícone */}
					<MessageSquare
						size={18}
						className="absolute left-3 top-1/5 -translate-y-1/2 text-muted-foreground"
						color="#D7DED5"
					/>
					<textarea
						id="message"
						placeholder="Mensagem"
						rows={4}
						className="w-full resize-none md:mr-20 rounded-md border border-border bg-[#103739] text-white pl-10 pr-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 placeholder:text-white"
					/>
				</div>
			</div>

			{/* Botão */}
			{/* <button
				type="submit"
				className="mt-2 w-full rounded-md bg-primary py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
			>
				Enviar mensagem
			</button> */}
			<Button color="white" text="green" className="md:w-50">
				Enviar mensagem
			</Button>
		</form>
	);
}
