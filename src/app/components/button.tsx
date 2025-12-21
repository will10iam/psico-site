import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	color?: "pink" | "green" | "dark" | "white";
	text?: "light" | "dark" | "green";
}

const colors = {
	pink: {
		bg: "bg-[#DE8EC1]",
		gradient: "from-[#DE8EC1]/50 via-[#DE8EC1]/50 to-[#DE8EC1]/50",
	},
	green: {
		bg: "bg-[#193f41]",
		gradient: "from-[#193f41]/50 via-[#193f41]/50 to-[#193f41]/50",
	},
	dark: {
		bg: "bg-[#1a1a1a]",
		gradient: "from-[#1a1a1a]/50 via-[#1a1a1a]/50 to-[#1a1a1a]/50",
	},
	white: {
		bg: "bg-white",
		gradient: "from-white/50 via-white/50 to-white/50",
	},
};

const textColors = {
	light: "text-white",
	dark: "text-black",
	green: "text-[#193f41]",
};

const Button = ({
	children,
	color = "pink",
	text = "light",
	className,
	...props
}: ButtonProps) => {
	const selected = colors[color];
	const textColor = textColors[text];
	return (
		<button
			{...props}
			className={clsx(
				"group relative flex items-center justify-center gap-2 rounded-2xl px-4 py-1.5 text-sm font-medium transition-shadow duration-500 ease-out",
				selected.bg,
				textColor,
				"shadow-[inset_0_-8px_10px_#8fdfff1f] hover:shadow-[inset_0_-5px_10px_#8fdfff3f]",
				className
			)}
		>
			{/* Borda animada */}
			<div
				className={clsx(
					"absolute inset-0 h-full w-full animate-gradient bg-gradient-to-r",
					selected.gradient,
					textColor,
					"bg-[length:var(--bg-size)_100%] p-[1px]",
					"[border-radius:inherit]",
					"[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
					"![mask-composite:subtract]"
				)}
			/>

			{/* Conteúdo */}
			<span className="relative z-10 whitespace-nowrap bg-gradient-to-r from-white via-white to-white bg-[length:300%] bg-clip-text text-">
				{children}
			</span>

			{/* Ícone */}
			<svg
				strokeLinecap="round"
				strokeWidth="1.5"
				viewBox="0 0 10 10"
				height={11}
				width={11}
				stroke="currentColor"
				fill="none"
				className={clsx("relative z-10", textColor)}
			>
				<path
					d="M0 5h7"
					className="opacity-0 transition group-hover:opacity-100"
				/>
				<path
					d="M1 1l4 4-4 4"
					className="transition group-hover:translate-x-[3px]"
				/>
			</svg>
		</button>
	);
};

export default Button;
