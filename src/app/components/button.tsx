import React from "react";

const Button = () => {
	return (
		<button className="group relative flex flex-row items-center bg-[#DE8EC1] justify-center gap-2 rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
			<div className="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#DE8EC1]/50 via-[#DE8EC1]/50 to-[#DE8EC1]/50 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]" />
			{/* <svg
				className="size-4 text-[#ffaa40]"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 15 15"
				height={15}
				width={15}
			>
				<path
					clipRule="evenodd"
					fillRule="evenodd"
					fill="currentColor"
					d="M5 4.63601C5 3.76031 5.24219 3.1054 5.64323 2.67357C6.03934 2.24705 6.64582 1.9783 7.5014 1.9783C8.35745 1.9783 8.96306 2.24652 9.35823 2.67208C9.75838 3.10299 10 3.75708 10 4.63325V5.99999H5V4.63601ZM4 5.99999V4.63601C4 3.58148 4.29339 2.65754 4.91049 1.99307C5.53252 1.32329 6.42675 0.978302 7.5014 0.978302C8.57583 0.978302 9.46952 1.32233 10.091 1.99162C10.7076 2.65557 11 3.57896 11 4.63325V5.99999H12C12.5523 5.99999 13 6.44771 13 6.99999V13C13 13.5523 12.5523 14 12 14H3C2.44772 14 2 13.5523 2 13V6.99999C2 6.44771 2.44772 5.99999 3 5.99999H4ZM3 6.99999H12V13H3V6.99999Z"
				/>
			</svg> */}
			{/* <div
				className="shrink-0 bg-border w-[1px] h-4"
				role="none"
				data-orientation="vertical"
			/> */}
			<span className="inline animate-gradient whitespace-pre bg-gradient-to-r from-[#fff] via-[#fff] to-[#fff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%] text-center">
				Fale comigo!
			</span>
			<svg
				strokeLinecap="round"
				className="text-[#ffffff]"
				strokeWidth="1.5"
				aria-hidden="true"
				viewBox="0 0 10 10"
				height={11}
				width={11}
				stroke="currentColor"
				fill="none"
			>
				<path
					strokeLinecap="round"
					d="M0 5h7"
					className="opacity-0 transition group-hover:opacity-100"
				/>
				<path
					strokeLinecap="round"
					d="M1 1l4 4-4 4"
					className="transition group-hover:translate-x-[3px]"
				/>
			</svg>
		</button>
	);
};

export default Button;
