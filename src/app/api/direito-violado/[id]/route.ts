import { NextRequest, NextResponse } from "next/server";

import { RespostaApi } from "@/domain/models/resposta-api";
import { AtualizarDireitoVioladoController } from "@/lib/api/controllers/direito-violado/atualizar-direito_violado-controller";
import { BuscarDireitoVioladoController } from "@/lib/api/controllers/direito-violado/buscar-direito_violado-controller";
import { DeletarDireitoVioladoController } from "@/lib/api/controllers/direito-violado/deletar-direito_violado-controller";

function validateId(id?: string): NextResponse | undefined {
	if (!id) {
		const respostaIdInvalido = new RespostaApi({
			sucesso: false,
			mensagem: "ID do estado não fornecido ou inválido",
		});
		return NextResponse.json({ respostaIdInvalido }, { status: 400 });
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

		const { id } = params;

		const { nome, projetos, sigla, descricao } = await request.json();

		const controller = new AtualizarDireitoVioladoController();

		const resposta = await controller.executar({
			id: id,
			nome: nome,
			sigla: sigla,
			projetos: projetos,
			descricao: descricao,
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
				mensagem: "Estão faltando informações para a busca do direito violado",
			});
			return NextResponse.json({ resposta }, { status: 400 });
		}

		const controller = new DeletarDireitoVioladoController();

		const resposta = await controller.executar({ id: id });

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
				mensagem: "Estão faltando informações para a busca do direito violado",
			});
			return NextResponse.json({ resposta }, { status: 400 });
		}

		const controller = new BuscarDireitoVioladoController();

		const resposta = await controller.executar({ id: id });

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
		return NextResponse.json({ respostaApi, status: 500 });
	}
}
