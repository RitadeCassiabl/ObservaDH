import { NextRequest, NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { UpdateEsferaDto } from "@/dtos/esfera.dto";
import { AtualizarEsferaController } from "@/lib/api/controllers/esfera/atualizar-esfera-controller";
import { BuscarEsferaController } from "@/lib/api/controllers/esfera/buscar-esfera-controller";
import { DeletarEsferaController } from "@/lib/api/controllers/esfera/deletar-esfera-controller";

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

export async function PATCH(
	request: NextRequest,
	{ params }: { params: { id?: string } }
) {
	try {
		const idError = validateId(params.id);
		if (idError) return idError;

		const body = await request.json().catch(() => ({}));
		const { nome } = body as UpdateEsferaDto;

		const controller = new AtualizarEsferaController();

		const resposta = await controller.executar({
			id: params.id as string,
			nome,
		});

		return NextResponse.json(
			{ resposta },
			{ status: resposta.sucesso ? 200 : 400 }
		);
	} catch (error) {
		const resposta = new RespostaApi({
			sucesso: false,
			mensagem: "Ocorreu um erro inesperado",
			dados: error,
		});
		return NextResponse.json({ resposta }, { status: 500 });
	}
}

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

		return NextResponse.json(
			{ resposta },
			{ status: resposta.sucesso ? 200 : 400 }
		);
	} catch (error) {
		const respostaApi = new RespostaApi({
			sucesso: false,
			mensagem: "Ocorreu um erro inesperado",
			dados: error,
		});
		return NextResponse.json({ respostaApi }, { status: 500 });
	}
}

export async function GET(
	request: NextRequest,
	{ params }: { params: { id?: string } }
) {
	try {
		const { id } = params;
		if (!id) {
			const resposta = new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para a busca da esfera",
			});
			return NextResponse.json({ resposta }, { status: 400 });
		}

		const controller = new BuscarEsferaController();

		const resposta = await controller.executar(id);

		return NextResponse.json(
			{ resposta },
			{ status: resposta.sucesso ? 200 : 404 }
		);
	} catch (error) {
		const respostaApi = new RespostaApi({
			sucesso: false,
			mensagem: "Ocorreu um erro inesperado",
			dados: error,
		});
		return NextResponse.json({ respostaApi }, { status: 500 });
	}
}
