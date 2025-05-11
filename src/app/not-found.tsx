/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useRouter } from "next/navigation";

const page: React.FC = () => {
	const router = useRouter();
	const retornar = () => {
		router.push("/");
	};
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<p>Página não encontrada...</p>
			<button onClick={retornar}>Voltar ao início</button>
		</div>
	);
};
export default page;
