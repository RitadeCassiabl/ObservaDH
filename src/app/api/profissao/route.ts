import { NextRequest, NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { CreateProfissaoDTO } from "@/dtos/profissao.dto";
import { CriarProfissaoController } from "@/lib/api/controllers/profissao/criar-profissao-controller";
import { ListarProfissaoController } from "@/lib/api/controllers/profissao/listar-profissao-controller";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function handleError(error: any, message: string) {
	console.error(message, error);
	const respostaException = new RespostaApi({
		sucesso: false,
		mensagem: `Ocorreu um erro inesperado no servidor: ${
			message.toLowerCase().includes("criar") ? "ao criar" : "ao listar"
		} profissão(ões)`,
		dados: process.env.NODE_ENV === "development" ? error : undefined,
	});
	return NextResponse.json(respostaException, { status: 500 });
}

// ! Handler - Criação de Profissão
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

		const controller = new CriarProfissaoController();
		const resposta = await controller.executar(body as CreateProfissaoDTO);

		let status = 201; // Created
		if (!resposta.sucesso) {
			if (resposta.mensagem?.includes("já existe")) {
				status = 409; // Conflict
			} else if (resposta.mensagem?.includes("obrigatório")) {
				status = 400; // Bad Request
			} else {
				status = 400; // Generic Bad Request for other controller errors
			}
		}

		return NextResponse.json(resposta, { status });
	} catch (error) {
		return handleError(error, "Erro ao criar profissão");
	}
}

// ! Handler - Listar Profissões
export async function GET() {
	try {
		const controller = new ListarProfissaoController();
		const resposta = await controller.executar();

		return NextResponse.json(resposta, {
			status: resposta.sucesso ? 200 : 404, // 404 if no profissoes found based on controller message
		});
	} catch (error) {
		return handleError(error, "Erro ao listar profissões");
	}
}
