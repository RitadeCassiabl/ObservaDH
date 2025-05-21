import { NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { BuscarEsferaController } from "@/lib/api/controllers/esfera/buscar-esfera-controller";

export async function GET(
	request: Request,
	{ params }: { params: { nome: string } }
) {
	try {
		const { nome } = params;
		const controller = new BuscarEsferaController();
		const resposta = await controller.buscarPorNome(nome);

		return NextResponse.json(resposta, {
			status: resposta.sucesso ? 200 : 404,
		});
	} catch (error) {
		console.error("Erro ao buscar esfera pelo nome:", error);

		const respostaException = new RespostaApi({
			sucesso: false,
			mensagem: "Ocorreu um erro inesperado no servidor",
			dados: process.env.NODE_ENV === "development" ? error : undefined,
		});
		return NextResponse.json(respostaException, { status: 500 });
	}
}
