import { NextRequest, NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { AtualizarIdeologiaController } from "@/lib/api/controllers/ideologia/atualizar-ideologia-controller";
import { BuscarIdeologiaController } from "@/lib/api/controllers/ideologia/buscar-ideologia-controller";
import { DeletarIdeologiaController } from "@/lib/api/controllers/ideologia/deletar-ideologia-controller";

export async function PATCH(
	request: NextRequest,
	{ params }: { params: { id?: string } }
) {
	try {
		const { id } = params;

		if (!id) {
			const resposta = new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para a busca da ideologia",
			});
			return NextResponse.json({ resposta }, { status: 400 });
		}

		const { nome, sigla, descricao } = await request.json();

		const controller = new AtualizarIdeologiaController();

		const resposta = await controller.executar({
			id: id,
			nome: nome,
			descricao: descricao,
			sigla: sigla,
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
		const { id } = params;

		if (!id) {
			const resposta = new RespostaApi({
				sucesso: false,
				mensagem: "Estão faltando informações para a busca da ideologia",
			});
			return NextResponse.json({ resposta }, { status: 400 });
		}

		const controller = new DeletarIdeologiaController();

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
				mensagem: "Estão faltando informações para a busca da ideologia",
			});
			return NextResponse.json({ resposta }, { status: 400 });
		}

		const controller = new BuscarIdeologiaController();

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
