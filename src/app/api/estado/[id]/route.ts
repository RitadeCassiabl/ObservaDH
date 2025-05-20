import { NextRequest, NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { UpdateEstadoDto } from "@/dtos/estado.dto";
import { AtualizarEstadoController } from "@/lib/api/controllers/estado/atualizar-estado-controller";
import { BuscarEstadoController } from "@/lib/api/controllers/estado/buscar-estado-controller";
import { DeletarEstadoController } from "@/lib/api/controllers/estado/deletar-estado-controller";

function validateId(id?: string): NextResponse | undefined {
	if (!id) {
		const respostaIdInvalido = new RespostaApi({
			sucesso: false,
			mensagem: "ID do estado não fornecido ou inválido",
		});
		return NextResponse.json(respostaIdInvalido, { status: 400 });
	}
	return undefined;
}

//! Handler - Atualização de estado
export async function PATCH(
	request: NextRequest,
	{ params }: { params: { id?: string } }
) {
	try {
		const idError = validateId(params.id);
		if (idError) return idError;

		const body = await request.json().catch(() => ({}));
		const { nome, sigla } = body as UpdateEstadoDto;

		const controller = new AtualizarEstadoController();
		const resposta = (await controller.executar({
			id: params.id as string,
			nome,
			sigla,
		} as UpdateEstadoDto)) as RespostaApi;

		return NextResponse.json(resposta, {
			status: resposta.sucesso
				? 200
				: resposta.mensagem?.includes("não encontrado")
					? 404
					: 400,
		});
	} catch (error) {
		console.error("Erro ao atualizar estado:", error);

		const respostaException = new RespostaApi({
			sucesso: false,
			mensagem: "Ocorreu um erro inesperado no servidor",
			dados: process.env.NODE_ENV === "development" ? error : undefined,
		});
		return NextResponse.json(respostaException, { status: 500 });
	}
}

//! Handler - Deletar estado
export async function DELETE(
	request: NextRequest,
	{ params }: { params: { id?: string } }
) {
	try {
		const idError = validateId(params.id);
		if (idError) return idError;

		const controller = new DeletarEstadoController();
		const resposta = (await controller.executar({
			id: params.id as string,
		})) as RespostaApi;

		return NextResponse.json(resposta, {
			status: resposta.sucesso
				? 200
				: resposta.mensagem?.includes("não encontrado")
					? 404
					: 400,
		});
	} catch (error) {
		console.error("Erro ao deletar estado:", error);

		const respostaException = new RespostaApi({
			sucesso: false,
			mensagem: "Ocorreu um erro inesperado no servidor",
			dados: process.env.NODE_ENV === "development" ? error : undefined,
		});
		return NextResponse.json(respostaException, { status: 500 });
	}
}

//! Handler - Buscar estado
export async function GET(
	request: NextRequest,
	{ params }: { params: { id?: string } }
) {
	try {
		const idError = validateId(params.id);
		if (idError) return idError;

		const controller = new BuscarEstadoController();
		const resposta = await controller.executar(params.id as string);

		return NextResponse.json(resposta, {
			status: resposta.sucesso ? 200 : 404,
		});
	} catch (error) {
		console.error("Erro ao buscar estado:", error);
		const respostaException = new RespostaApi({
			sucesso: false,
			mensagem: "Ocorreu um erro inesperado no servidor",
			dados: process.env.NODE_ENV === "development" ? error : undefined,
		});
		return NextResponse.json(respostaException, { status: 500 });
	}
}
