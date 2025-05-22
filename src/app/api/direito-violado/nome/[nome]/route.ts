import { NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { BuscarDireitoVioladoController } from "@/lib/api/controllers/direito-violado/buscar-direito_violado-controller";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(error: any, message: string) {
	console.error(message, error);
	const respostaException = new RespostaApi({
		sucesso: false,
		mensagem: `Ocorreu um erro inesperado no servidor: ${message}`,
		dados: process.env.NODE_ENV === "development" ? error : undefined,
	});
	return NextResponse.json(respostaException, { status: 500 });
}

// ! Handler - Buscar Direito Violado por Nome
export async function GET(
	request: Request,
	{ params }: { params: { nome: string } }
) {
	try {
		const { nome } = params;
		if (!nome || nome.trim() === "") {
			const respostaNomeInvalido = new RespostaApi({
				sucesso: false,
				mensagem: "Nome do Direito Violado não fornecido ou inválido",
			});
			return NextResponse.json(respostaNomeInvalido, { status: 400 });
		}

		const controller = new BuscarDireitoVioladoController();
		const resposta = await controller.buscarPorNome(nome);

		return NextResponse.json(resposta, {
			status: resposta.sucesso ? 200 : 404,
		});
	} catch (error) {
		return handleError(error, "Erro ao buscar Direito Violado por nome");
	}
}
