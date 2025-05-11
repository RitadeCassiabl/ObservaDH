import { NextRequest, NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { AtualizarEsferaController } from "@/lib/api/controllers/esfera/atualizar-esfera-controller";
import { BuscarEsferaController } from "@/lib/api/controllers/esfera/buscar-esfera-controller";
import { DeletarEsferaController } from "@/lib/api/controllers/esfera/deletar-esfera-controller";

export async function PATCH(
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

		const { nome } = await request.json();

		const controller = new AtualizarEsferaController();

		const resposta = await controller.executar(id, nome);

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
		const { id } = params;

		if (!id) {
			const resposta = new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para a busca da esfera",
			});
			return NextResponse.json({ resposta }, { status: 400 });
		}

		const controller = new DeletarEsferaController();

		const resposta = await controller.executar(id);

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
