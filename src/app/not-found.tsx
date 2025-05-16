/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useRouter } from "next/navigation";

import FooterBar from "@/components/ui/layouts/footer-bar";
import Header from "@/components/ui/layouts/header";

import { oswald } from "@/lib/fonts/fonts";

const page: React.FC = () => {
	const router = useRouter();
	const retornar = () => {
		router.push("/");
	};
	return (
		<div className="fundo-404 overflow-auto no-scrollbar flex flex-col gap-16">
			<div
				className={`flex flex-col p-8 gap-20 text-white text-shadow-xl ${oswald.className}`}
			>
				<header className="flex flex-col gap-32">
					<Header />
					<h2 className={`text-9xl  `}>{"Perdido no espaço :("}</h2>
				</header>
				<div className="flex flex-col gap-16">
					<p className="text-8xl">{"404 - Página não Encontrada"}</p>
					<button
						onClick={retornar}
						className="rounded-full bg-[#2C52A4] border-[#87D9FF] border-2 h-20 w-72 text-center text-[#91ADF4] text-3xl"
					>
						{"Voltar a página inicial"}
					</button>
				</div>
			</div>
			<FooterBar />
		</div>
	);
};
export default page;
