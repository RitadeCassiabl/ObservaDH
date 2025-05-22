import { NextRequest, NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { UpdateEsferaDTO } from "@/dtos/esfera.dto";
import { AtualizarEsferaController } from "@/lib/api/controllers/esfera/atualizar-esfera-controller";
import { BuscarEsferaController } from "@/lib/api/controllers/esfera/buscar-esfera-controller";
import { DeletarEsferaController } from "@/lib/api/controllers/esfera/deletar-esfera-controller";

function validateId(id?: string): NextResponse | undefined {
	if (!id || id.trim() === "") {
		const respostaIdInvalido = new RespostaApi({
			sucesso: false,
			mensagem: "ID da esfera não fornecido ou inválido",
		});
		return NextResponse.json(respostaIdInvalido, { status: 400 });
	}
	return undefined;
}

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

// ! Handler - Atualização de Esfera
export async function PATCH(
	request: NextRequest,
	{ params }: { params: { id?: string } }
) {
	try {
		const idError = validateId(params.id);
		if (idError) return idError;

		const body = await request.json().catch(() => ({}));
		const updateData = { id: params.id as string, ...body } as UpdateEsferaDTO;

		const controller = new AtualizarEsferaController();
		const resposta = (await controller.executar(updateData)) as RespostaApi;

		let status = 200;
		if (!resposta.sucesso) {
			if (resposta.mensagem?.includes("não foi encontrada")) {
				status = 404; // Not Found
			} else {
				status = 400; // Generic Bad Request
			}
		}

		return NextResponse.json(resposta, { status });
	} catch (error) {
		return handleError(error, "Erro ao atualizar esfera");
	}
}

// ! Handler - Deletar Esfera
export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id?: string } }
) {
	try {
		const idError = validateId(params.id);
		if (idError) return idError;

		const controller = new DeletarEsferaController();
		const resposta = (await controller.executar({
			id: params.id as string,
		})) as RespostaApi;

		let status = 200;
		if (!resposta.sucesso) {
			if (resposta.mensagem?.includes("não foi encontrada")) {
				status = 404; // Not Found
			} else if (
				resposta.mensagem?.includes("políticos ou projetos relacionados")
			) {
				status = 409; // Conflict (Foreign Key error due to linked records)
			} else {
				status = 400; // Generic Bad Request
			}
		}

		return NextResponse.json(resposta, { status });
	} catch (error) {
		return handleError(error, "Erro ao deletar esfera");
	}
}

// ! Handler - Buscar Esfera por ID
export async function GET(
	request: Request,
	{ params }: { params: { id: string } }
) {
	try {
		const idError = validateId(params.id);
		if (idError) return idError;

		const { id } = params;
		const controller = new BuscarEsferaController();
		const resposta = await controller.executar(id);

		return NextResponse.json(resposta, {
			status: resposta.sucesso ? 200 : 404,
		});
	} catch (error) {
		return handleError(error, "Erro ao buscar esfera por ID");
	}
}
