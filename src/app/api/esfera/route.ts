import { NextRequest, NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { CreateEsferaDTO } from "@/domain/dtos/esfera.dto";
import { CriarEsferaController } from "@/lib/api/controllers/esfera/criar-esfera-controller";
import { ListarEsferaController } from "@/lib/api/controllers/esfera/listar-esfera-controller";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(error: any, message: string) {
	console.error(message, error);
	const respostaException = new RespostaApi({
		sucesso: false,
		mensagem: `Ocorreu um erro inesperado no servidor: ${
			message.toLowerCase().includes("criar") ? "ao criar" : "ao listar"
		} esfera(s)`,
		dados: process.env.NODE_ENV === "development" ? error : undefined,
	});
	return NextResponse.json(respostaException, { status: 500 });
}

// ! Handler - Criação de Esfera
export async function POST(request: NextRequest) {
	try {
		const body = await request.json().catch(() => null);

		if (!body) {
			const respostaNoBody = new RespostaApi({
				sucesso: false,
				mensagem: "Corpo da requisição inválido ou vazio",
			});
			return NextResponse.json(respostaNoBody, { status: 400 });
		}

		const controller = new CriarEsferaController();
		const resposta = await controller.executar(body as CreateEsferaDTO);

		let status = 201;
		if (!resposta.sucesso) {
			if (resposta.mensagem?.includes("obrigatório")) {
				status = 400;
			} else {
				status = 400;
			}
		}

		return NextResponse.json(resposta, { status });
	} catch (error) {
		return handleError(error, "Erro ao criar esfera");
	}
}

// ! Handler - Listar Esferas
export async function GET() {
	try {
		const controller = new ListarEsferaController();
		const resposta = await controller.executar();

		return NextResponse.json(resposta, {
			status: resposta.sucesso ? 200 : 404,
		});
	} catch (error) {
		return handleError(error, "Erro ao listar esferas");
	}
}
