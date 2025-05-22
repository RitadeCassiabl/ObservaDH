import { NextRequest, NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { CreateProjetoDTO } from "@/dtos/projeto.dto";
import { CriarProjetoController } from "@/lib/api/controllers/projeto/criar-projeto-controller";
import { ListarProjetoController } from "@/lib/api/controllers/projeto/listar-projeto-controller";

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

		const controller = new CriarProjetoController();
		const resposta = await controller.executar(body as CreateProjetoDTO);

		// Check for specific messages to return different status codes
		let status = 201; // Created
		if (!resposta.sucesso) {
			if (resposta.mensagem?.includes("Já existe um projeto com o número PL")) {
				status = 409; // Conflict
			} else if (
				resposta.mensagem?.includes("Faltam informações obrigatórias")
			) {
				status = 400; // Bad Request
			} else if (resposta.mensagem?.includes("ID relacionado inválido")) {
				status = 400; // Bad Request
			} else {
				status = 400; // Generic Bad Request for other controller errors
			}
		}

		return NextResponse.json(resposta, { status });
	} catch (error) {
		return handleError(error, "Erro ao criar projeto");
	}
}

export async function GET() {
	try {
		const controller = new ListarProjetoController();
		const resposta = await controller.executar();

		return NextResponse.json(resposta, {
			status: resposta.sucesso ? 200 : 404, // 404 if no projects found based on controller message
		});
	} catch (error) {
		return handleError(error, "Erro ao listar projetos");
	}
}
