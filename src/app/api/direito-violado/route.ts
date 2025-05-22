import { NextRequest, NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { CreateDireitoVioladoDTO } from "@/dtos/direito-violado.dto";
import { CriarDireitoVioladoController } from "@/lib/api/controllers/direito-violado/criar-direito_violado-controller";
import { ListarDireitoVioladoController } from "@/lib/api/controllers/direito-violado/listar-direito_violado-controller";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(error: any, message: string) {
	console.error(message, error);
	const respostaException = new RespostaApi({
		sucesso: false,
		mensagem: `Ocorreu um erro inesperado no servidor: ${
			message.toLowerCase().includes("criar") ? "ao criar" : "ao listar"
		} Direito(s) Violado(s)`,
		dados: process.env.NODE_ENV === "development" ? error : undefined,
	});
	return NextResponse.json(respostaException, { status: 500 });
}

// ! Handler - Criação de Direito Violado
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

		const controller = new CriarDireitoVioladoController();
		const resposta = await controller.executar(body as CreateDireitoVioladoDTO);

		let status = 201;
		if (!resposta.sucesso) {
			if (resposta.mensagem?.includes("já existe")) {
				status = 409;
			} else if (resposta.mensagem?.includes("obrigatórios")) {
				status = 400;
			} else {
				status = 400;
			}
		}

		return NextResponse.json(resposta, { status });
	} catch (error) {
		return handleError(error, "Erro ao criar Direito Violado");
	}
}

// ! Handler - Listar Direitos Violados
export async function GET() {
	try {
		const controller = new ListarDireitoVioladoController();
		const resposta = await controller.executar();

		return NextResponse.json(resposta, {
			status: resposta.sucesso ? 200 : 404,
		});
	} catch (error) {
		return handleError(error, "Erro ao listar Direitos Violados");
	}
}
