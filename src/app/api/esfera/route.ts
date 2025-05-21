import { NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { CreateEsferaDto } from "@/dtos/esfera.dto";
import { CriarEsferaController } from "@/lib/api/controllers/esfera/criar-esfera-controller";
import { ListarEsferaController } from "@/lib/api/controllers/esfera/listar-esfera-controller";

//! Handler - Criação de esferas
export async function POST(request: Request) {
	try {
		const body = await request.json().catch(() => null);
		if (!body) {
			const respostaNoBody = new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando infomações para a criação da esfera",
			});

			return NextResponse.json({ respostaNoBody }, { status: 400 });
		} else {
			const controller = new CriarEsferaController();
			const resposta = await controller.executar(body as CreateEsferaDto);

			return NextResponse.json(
				{ resposta },
				{ status: resposta.sucesso ? 200 : 400 }
			);
		}
	} catch (error) {
		console.error("Erro ao criar esfera:", error);
		const respostaException = new RespostaApi({
			sucesso: false,
			mensagem: "Ocorreu um erro inesperado",
			dados: process.env.NODE_ENV === "development" ? error : undefined,
		});

		return NextResponse.json({ respostaException }, { status: 500 });
	}
}

export async function GET() {
	try {
		const controller = new ListarEsferaController();
		const resposta = await controller.executar();

		return NextResponse.json({ resposta }, { status: 200 });
	} catch (error) {
		console.error("Erro ao listar esferas:", error);
		const respostaApi = new RespostaApi({
			sucesso: false,
			mensagem: "Ocorreu um erro inesperado",
			dados: process.env.NODE_ENV === "development" ? error : undefined,
		});
		return NextResponse.json({ respostaApi }, { status: 500 });
	}
}
